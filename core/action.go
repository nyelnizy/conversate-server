package core

import (
	"context"
	"orionedge.co/conversate/core/docs/params"
	"orionedge.co/conversate/response"
)

type Action struct {
	Name         string
	RequiresAuth bool
	ApiDoc       *docsparams.ApiDoc
	Callback     func(parameter []byte, ctx context.Context) *response.SocketResponseData
}
