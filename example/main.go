package main

import (
	"context"
	"github.com/nyelnizy/conversate-server/core"
	docsparams "github.com/nyelnizy/conversate-server/core/docs/params"
	"github.com/nyelnizy/conversate-server/core/impl"
	intfc "github.com/nyelnizy/conversate-server/core/interfaces"
	conversate "github.com/nyelnizy/conversate-server/entry"
	"github.com/nyelnizy/conversate-server/entry/config"
	"github.com/nyelnizy/conversate-server/response"
)

type TestActions struct {
}

func (a TestActions) SetupActions(store intfc.ActionStore) {
	store.AddAction(&core.Action{
		Name:         "test-api",
		RequiresAuth: false,
		ApiDoc: &docsparams.ApiDoc{
			Group:       "Test",
			Description: "Test endpoint",
		},
		Callback: func(parameter []byte, ctx context.Context) *response.SocketResponseData {
			return &response.SocketResponseData{
				Code: 200,
				Data: "Hello World",
			}
		},
	})
}
func main() {
	conf := &config.ServerConfig{
		Port:         "6002",
		PublicFolder: "public",
		JwtValidator: &impl.DefaultJwtValidator{
			Issuer:        "",
			Secret:        "",
			Audience:      "",
			AuthUserIdKey: "id",
			SubjectKey:    "userTypeId",
		},
	}

	server := conversate.New(conf)
	testActions := &TestActions{}
	server.Run(testActions)
}
