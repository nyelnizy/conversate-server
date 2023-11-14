package main

import (
	"github.com/nyelnizy/conversate-server/core/impl"
	conversate "github.com/nyelnizy/conversate-server/entry"
	"github.com/nyelnizy/conversate-server/entry/config"
)

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
	server.Run()
}
