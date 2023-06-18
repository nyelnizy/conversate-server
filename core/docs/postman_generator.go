package docs

import (
	"encoding/json"
	"fmt"
	"github.com/rbretecher/go-postman-collection"
	"log"
	"orionedge.co/conversate/core/docs/params"
	"os"
)

type PostManEndpoint struct {
	Action string
	Input  interface{}
}

func GetFeaturesForPostMan(actions map[string]*docsparams.ApiDoc) map[string][]*PostManEndpoint {
	features := make(map[string][]*PostManEndpoint)
	// loop through actions and extract details from endpoints
	for k, doc := range actions {
		if doc == nil {
			continue
		}
		endpoint := &PostManEndpoint{
			Action: k,
			Input:  doc.Input,
		}
		endpoints, ok := features[doc.Group]
		if ok {
			features[doc.Group] = append(endpoints, endpoint)
		} else {
			features[doc.Group] = []*PostManEndpoint{
				endpoint,
			}
		}
	}
	return features
}
func GeneratePostmanCollection(actions map[string]*docsparams.ApiDoc) {
	features := GetFeaturesForPostMan(actions)
	v := postman.CreateVariable("token", "xxx")
	c := postman.CreateCollection(config.AppName, config.AppDescription)
	fmt.Println(len(features))
	for name, endpoints := range features {
		item := c.AddItemGroup(name)
		for _, endpoint := range endpoints {
			itm := &postman.Items{
				Name: getRequestName(endpoint.Action),
				Request: &postman.Request{
					URL: &postman.URL{
						Raw: config.PostManBaseUrl + "/" + endpoint.Action,
					},
					Method: postman.Post,
					Header: []*postman.Header{
						{
							Key:   "X-Token",
							Value: "{{token}}",
						},
					},
				},
			}
			if endpoint.Input != nil {
				data := endpoint.Input
				value, ok := endpoint.Input.(*docsparams.InputPrimitive)
				if ok {
					data = struct {
						Primitive interface{} `json:"primitive"`
					}{
						Primitive: value.Example,
					}
				}
				inputData, err := json.Marshal(data)
				if err != nil {
					log.Fatal(err)
				}
				itm.Request.Body = &postman.Body{
					Mode: "raw",
					Raw:  string(inputData),
					Options: &postman.BodyOptions{
						Raw: postman.BodyOptionsRaw{
							Language: "json",
						},
					},
				}
			}
			item.AddItem(itm)
		}
		c.AddItem(item)
	}
	c.Variables = []*postman.Variable{
		v,
	}
	file, err := os.Create("postman_collection.json")
	defer file.Close()

	if err != nil {
		log.Fatal(err)
	}
	err = c.Write(file, postman.V200)

	if err != nil {
		log.Fatal(err)
	}
}
