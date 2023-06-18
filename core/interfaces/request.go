package intfc

import "orionedge.co/conversate/response"

type Request interface {
	Authenticate() bool
	Execute() *response.SocketResponseData
	Respond(data []byte) error
}
