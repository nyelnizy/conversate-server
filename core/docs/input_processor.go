package docs

import (
	"reflect"
	"strings"
)

type ApiInput struct {
	Type       string         `json:"type"`
	Parameters []*ActionInput `json:"parameters"`
}
type ActionInput struct {
	Name          string         `json:"name"`
	Type          string         `json:"type"`
	PrimitiveType string         `json:"primitive_type"`
	Description   string         `json:"description"`
	Example       interface{}    `json:"example"`
	Validations   []string       `json:"validations"`
	Children      []*ActionInput `json:"children"`
}

func makeActionInput(field reflect.StructField, jsonTag string, includes []string) *ActionInput {
	fieldType := field.Type
	fieldKind := fieldType.Kind()
	stringType := fieldType.String()
	if fieldKind == reflect.Ptr {
		fieldType = fieldType.Elem()
		fieldKind = fieldType.Kind()
	}
	if fieldKind == reflect.Struct {
		stringType = "object"
	}
	if fieldKind == reflect.Slice {
		stringType = "array"
	}
	actionInput := &ActionInput{
		Name:        strings.ReplaceAll(jsonTag, ",omitempty", ""),
		Type:        stringType,
		Description: field.Tag.Get("dsc"),
		Example:     field.Tag.Get("eg"),
		Validations: strings.Split(field.Tag.Get("validate"), ","),
	}
	if stringType == "object" {
		actionInput.Children = getInputParameters(fieldType, includes)
	}
	if stringType == "array" {
		elementType := field.Type.Elem()
		if elementType.Kind() == reflect.Ptr {
			elementType = elementType.Elem()
		}
		actionInput.PrimitiveType = elementType.Kind().String()
		if elementType.Kind() == reflect.Struct {
			actionInput.PrimitiveType = "object"
		}
		if elementType.Kind() == reflect.Slice {
			actionInput.PrimitiveType = "array"
		}
		if elementType.Kind() == reflect.Struct || elementType.Kind() == reflect.Slice {
			actionInput.Children = getInputParameters(elementType, includes)
		}
	}
	return actionInput
}
func getInputParameters(t reflect.Type, includes []string) []*ActionInput {
	var actionInputList []*ActionInput
	// iterate through the fields of the Person struct
	for i := 0; i < t.NumField(); i++ {
		// get the field and its JSON tag value
		field := t.Field(i)
		if field.Anonymous {
			embeddedType := field.Type.Elem()
			numFields := embeddedType.NumField()
			// Iterate over the fields of the embedded type
			for j := 0; j < numFields; j++ {
				// Get the embedded field from the embedded type
				embeddedField := embeddedType.Field(j)
				jsonTag := embeddedField.Tag.Get("json")
				fieldToInclude := embeddedField.Tag.Get("ex")
				if jsonTag == "updated_at" || jsonTag == "created_at" || jsonTag == "deleted_at" || jsonTag == "" || jsonTag == "-" || !shouldIncludeField(fieldToInclude, includes) {
					continue
				}
				actionInput := makeActionInput(embeddedField, jsonTag, includes)
				actionInputList = append(actionInputList, actionInput)
			}
		} else {
			jsonTag := field.Tag.Get("json")
			fieldToInclude := field.Tag.Get("in")
			if jsonTag == "updated_at" || jsonTag == "created_at" || jsonTag == "deleted_at" || jsonTag == "" || jsonTag == "-" || !shouldIncludeField(fieldToInclude, includes) {
				continue
			}
			actionInput := makeActionInput(field, jsonTag, includes)
			actionInputList = append(actionInputList, actionInput)
		}
	}
	return actionInputList
}
func getActionInput(inputData interface{}, includes []string) *ApiInput {
	input := &ApiInput{}
	valueType := getActualType(inputData)
	if valueType.Kind() == reflect.Struct {
		input.Type = "object"
		input.Parameters = getInputParameters(valueType, includes)
	} else {
		input.Type = "array"
		t := valueType.Elem()
		input.Parameters = getInputParameters(t, includes)
	}
	return input
}
