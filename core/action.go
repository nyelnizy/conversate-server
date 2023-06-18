package core

import (
	"context"
	"github.com/nyelnizy/conversate-server/core/docs/params"
	"github.com/nyelnizy/conversate-server/response"
)

type Action struct {
	Name         string
	RequiresAuth bool
	ApiDoc       *docsparams.ApiDoc
	Callback     func(parameter []byte, ctx context.Context) *response.SocketResponseData
}
