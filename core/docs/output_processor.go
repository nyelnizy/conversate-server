package docs

import (
	"reflect"
	"strings"
)

type ApiOutput struct {
	Type       string          `json:"type"`
	Parameters []*ActionOutput `json:"parameters"`
}

type ActionOutput struct {
	Name          string          `json:"name"`
	Type          string          `json:"type"`
	PrimitiveType string          `json:"primitive_type"`
	Example       interface{}     `json:"example"`
	Children      []*ActionOutput `json:"children"`
}

func makeActionOutput(field reflect.StructField, jsonTag string, excludes []string) *ActionOutput {
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
	actionOutput := &ActionOutput{
		Name:    strings.ReplaceAll(jsonTag, ",omitempty", ""),
		Type:    stringType,
		Example: field.Tag.Get("eg"),
	}
	if stringType == "object" {
		actionOutput.Children = getOutputParameters(fieldType, excludes)
	}
	if stringType == "array" {
		elementType := field.Type.Elem()
		if elementType.Kind() == reflect.Ptr {
			elementType = elementType.Elem()
		}
		actionOutput.PrimitiveType = elementType.Kind().String()
		if elementType.Kind() == reflect.Struct {
			actionOutput.PrimitiveType = "object"
		}
		if elementType.Kind() == reflect.Slice {
			actionOutput.PrimitiveType = "array"
		}
		if elementType.Kind() == reflect.Struct || elementType.Kind() == reflect.Slice {
			actionOutput.Children = getOutputParameters(elementType, excludes)
		}
	}
	return actionOutput
}
func getOutputParameters(t reflect.Type, excludes []string) []*ActionOutput {
	var actionOutputList []*ActionOutput
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
				excludeFromDoc := embeddedField.Tag.Get("in")
				if jsonTag == "" || jsonTag == "-" || !shouldIncludeField(excludeFromDoc, excludes) {
					continue
				}
				actionOutput := makeActionOutput(embeddedField, jsonTag, excludes)
				actionOutputList = append(actionOutputList, actionOutput)
			}
		} else {
			jsonTag := field.Tag.Get("json")
			excludeFromDoc := field.Tag.Get("in")
			if jsonTag == "" || jsonTag == "-" || !shouldIncludeField(excludeFromDoc, excludes) {
				continue
			}
			actionOutput := makeActionOutput(field, jsonTag, excludes)
			actionOutputList = append(actionOutputList, actionOutput)
		}
	}
	return actionOutputList
}
func getActionOutput(inputData interface{}, excludes []string) *ApiOutput {
	output := &ApiOutput{}
	valueType := getActualType(inputData)
	if valueType.Kind() == reflect.Struct {
		output.Type = "object"
		output.Parameters = getOutputParameters(valueType, excludes)
	} else {
		output.Type = "array"
		t := valueType.Elem()
		output.Parameters = getOutputParameters(t, excludes)
	}
	return output
}
