package impl

import (
	"context"
	"encoding/json"
	"github.com/gobwas/ws/wsutil"
	"orionedge.co/conversate/core"
	"orionedge.co/conversate/logs"
	"orionedge.co/conversate/response"
	"orionedge.co/conversate/utils"
)

const (
	connKey = "conn"
)

// SocketApiRequest represents the current api request
type SocketApiRequest struct {
	RequestPacket *core.RequestPacket
	Action        *core.Action
}

// NewSocketApiRequest creates an instance of the current request to the application
func NewSocketApiRequest(packet *core.RequestPacket, action *core.Action) *SocketApiRequest {
	return &SocketApiRequest{
		RequestPacket: packet,
		Action:        action}
}

// Authenticate checks whether the intended action requires authentication, then verifies the token
func (req *SocketApiRequest) Authenticate() bool {
	if req.Action.RequiresAuth {
		return VerifyToken(req)
	}
	return true
}

// Execute parses the supplied parameter and invokes
// the callback function with this parameter
func (req *SocketApiRequest) Execute() *response.SocketResponseData {
	b, err := json.Marshal(req.RequestPacket.Parameter)
	if err != nil {
		logs.LogErr(err)
		return &response.SocketResponseData{
			Code: utils.InvalidPacketCode,
			Data: utils.InvalidPacket,
		}
	}
	ctx := context.WithValue(req.RequestPacket.Context, connKey, req.RequestPacket.Conn)
	return req.Action.Callback(b, ctx)
}

func (req *SocketApiRequest) Respond(data []byte) error {
	return wsutil.WriteServerMessage(req.RequestPacket.Conn, req.RequestPacket.OptCode, data)
}
