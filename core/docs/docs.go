package docs

import (
	"github.com/nyelnizy/conversate-server/core/docs/params"
	"github.com/nyelnizy/conversate-server/core/interfaces"
	"reflect"
	"strings"
)

var store intfc.ActionStore
var config *docsparams.DocsConfig

type Documentation struct {
	AppName     string     `json:"app_name"`
	AppVersion  string     `json:"app_version"`
	Description string     `json:"description"`
	Features    []*Feature `json:"features"`
}
type Feature struct {
	Name      string      `json:"group_name"`
	Endpoints []*Endpoint `json:"endpoints"`
}
type Endpoint struct {
	Action          string     `json:"action"`
	Description     string     `json:"description"`
	PrimitiveInput  bool       `json:"primitive_input"`
	NoInput         bool       `json:"no_input"`
	PrimitiveOutput bool       `json:"primitive_output"`
	AuthRequired    bool       `json:"auth_required"`
	Input           *ApiInput  `json:"input"`
	Output          *ApiOutput `json:"output"`
}

func SetStore(s intfc.ActionStore) {
	store = s
}
func SetConfig(c *docsparams.DocsConfig) {
	config = c
}

func getFeatures() []*Feature {
	actions := store.GetAllActions()
	features := make(map[string][]*Endpoint)
	// loop through actions and extract details from endpoints
	for k, v := range actions {
		if v.ApiDoc == nil {
			continue
		}
		if v.ApiDoc.Output == nil {
			v.ApiDoc.Output = &docsparams.OutputPrimitive{
				Name:    "Success Message",
				Example: "Operation Successful",
			}
		}
		endpoint := &Endpoint{}
		endpoint.Action = k
		endpoint.Description = v.ApiDoc.Description
		if v.ApiDoc.Input == nil {
			endpoint.NoInput = true
		} else {
			if isType(v.ApiDoc.Input, docsparams.InputPrimitive{}) {
				inputPrimitive := v.ApiDoc.Input.(*docsparams.InputPrimitive)
				valueType := reflect.TypeOf(inputPrimitive.Example)
				input := &ActionInput{
					Name:        inputPrimitive.Name,
					Type:        valueType.Name(),
					Description: inputPrimitive.Description,
					Example:     inputPrimitive.Example,
					Validations: []string{"required"},
				}
				endpoint.Input = &ApiInput{
					Type: "primitive",
					Parameters: []*ActionInput{
						input,
					},
				}
				endpoint.PrimitiveInput = true
			} else {
				endpoint.Input = getActionInput(v.ApiDoc.Input, v.ApiDoc.ExcludeInput)
			}
		}

		if isType(v.ApiDoc.Output, docsparams.OutputPrimitive{}) {
			outputPrimitive := v.ApiDoc.Output.(*docsparams.OutputPrimitive)
			valueType := reflect.TypeOf(outputPrimitive.Example)
			output := &ActionOutput{
				Name:    outputPrimitive.Name,
				Type:    valueType.Name(),
				Example: outputPrimitive.Example,
			}
			endpoint.Output = &ApiOutput{
				Type: "primitive",
				Parameters: []*ActionOutput{
					output,
				},
			}
			endpoint.PrimitiveOutput = true
		} else {
			endpoint.Output = getActionOutput(v.ApiDoc.Output, v.ApiDoc.ExcludeOutput)
		}
		endpoint.AuthRequired = v.RequiresAuth
		endpoints, ok := features[v.ApiDoc.Group]
		if ok {
			features[v.ApiDoc.Group] = append(endpoints, endpoint)
		} else {
			features[v.ApiDoc.Group] = []*Endpoint{
				endpoint,
			}
		}
	}
	var groupedFeatures []*Feature
	for k, v := range features {
		groupedFeatures = append(groupedFeatures, &Feature{
			Name:      k,
			Endpoints: v,
		})
	}
	if groupedFeatures == nil {
		groupedFeatures = []*Feature{}
	}
	return groupedFeatures
}
func excludesContain(tag string, excludes []string) bool {
	for _, num := range excludes {
		if num == tag {
			return true
		}
	}
	return false
}
func getActualType(typ interface{}) reflect.Type {
	typType := reflect.TypeOf(typ)
	if typType.Kind() == reflect.Ptr {
		// If the type is a pointer, dereference it
		typType = typType.Elem()
	}
	return typType
}
func isType(value interface{}, typ interface{}) bool {
	valueType := reflect.TypeOf(value)
	typType := reflect.TypeOf(typ)
	if typType.Kind() == reflect.Ptr {
		// If the type is a pointer, dereference it
		typType = typType.Elem()
	}
	if valueType.Kind() == reflect.Ptr {
		// If the value is a pointer, dereference it
		valueType = valueType.Elem()
	}
	return valueType == typType
}
func getRequestName(action string) string {
	name := strings.ReplaceAll(action, "-", " ")
	return strings.Title(strings.ToLower(name))
}
