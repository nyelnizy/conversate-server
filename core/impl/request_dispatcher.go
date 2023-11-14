package impl

import (
	"fmt"
	"github.com/nyelnizy/conversate-server/core"
	intfc "github.com/nyelnizy/conversate-server/core/interfaces"
	"github.com/nyelnizy/conversate-server/events"
	"github.com/nyelnizy/conversate-server/logs"
	"github.com/nyelnizy/conversate-server/response"
	"github.com/nyelnizy/conversate-server/utils"
)

type RequestDispatcher struct {
	ActionStore intfc.ActionStore
}

func NewRequestDispatcher(store intfc.ActionStore) *RequestDispatcher {
	return &RequestDispatcher{
		store,
	}
}
func (d *RequestDispatcher) RegisterRequestListener() {
	events.Listen(func() {
		if !apiRequests.Empty() {
			// consume request from queue
			packet, _ := apiRequests.Dequeue()
			requestPacket, _ := packet.(*core.RequestPacket)
			logs.LogStr(fmt.Sprintf("Processing Request -> %s", requestPacket.Action))
			go d.ServeRequest(requestPacket)
		}
	})
}

func (d *RequestDispatcher) ServeRequest(requestPacket *core.RequestPacket) {
	// initialize response object
	res := &response.SocketResponseData{}
	// lookup the action to serve
	action, err := d.ActionStore.GetAction(requestPacket.Action)
	// create a new request (works even if action is nil)
	apiRequest := NewSocketApiRequest(requestPacket, action)
	if err != nil {
		logs.LogErr(err)
		res.Code = utils.NotfoundCode
		res.Data = utils.NotFound
	} else {
		// validate request
		if apiRequest.Authenticate() {
			if core.IsSystemBusy() {
				res.Code = 400
				res.Data = "A system operation is ongoing, please try again later"
			}
			res = apiRequest.Execute()
		} else {
			res.Code = utils.BadJwtTokenCode
			res.Data = utils.BadJwtToken
		}
	}
	// respond to client
	logs.LogStr(fmt.Sprintf("Responding to action %s", requestPacket.Action))
	logs.LogStr("-----------------------------------------------------\n")
	res.Id = requestPacket.Id
	res.ClientId = requestPacket.ClientId
	res.Action = requestPacket.Action
	socketResponse, err := res.Encode()
	if err != nil {
		socketResponse = []byte(err.Error())
	}
	_ = apiRequest.Respond(socketResponse)
}
