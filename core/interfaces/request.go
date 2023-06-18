package intfc

import "github.com/nyelnizy/conversate-server/response"

type Request interface {
	Authenticate() bool
	Execute() *response.SocketResponseData
	Respond(data []byte) error
}
