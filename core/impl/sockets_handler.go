package impl

import (
	"context"
	"fmt"
	"github.com/gorilla/websocket"
	sockets "github.com/nyelnizy/conversate-server/core"
	"github.com/nyelnizy/conversate-server/events"
	"github.com/nyelnizy/conversate-server/logs"
	"github.com/nyelnizy/conversate-server/response"
	"github.com/nyelnizy/conversate-server/utils"
	"io"
	"log"
	"net/http"
	"strings"
)

type SocketsHandler struct {
	ConnectedClients map[string]*websocket.Conn
	Conn             *websocket.Conn
	Code             int
	Context          context.Context
}

func NewSocketsHandler() *SocketsHandler {
	return &SocketsHandler{
		ConnectedClients: make(map[string]*websocket.Conn),
	}
}

var upgrader = websocket.Upgrader{}

func (h *SocketsHandler) Handle(w http.ResponseWriter, r *http.Request) {
	if r.Header.Get("Sec-WebSocket-Key") == "" {
		return
	}
	//c, _, _, err := ws.UpgradeHTTP(r, w)
	//if err != nil {
	//	logs.LogErr(err)
	//	return
	//}
	c, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Print("upgrade:", err)
		return
	}
	// get client id from url and add to connected clients
	clientId := strings.Replace(r.URL.Path, "/", "", 1)
	logs.LogStr(fmt.Sprintf("New Connection -> %s \n", clientId))
	h.ConnectedClients[clientId] = c
	// close connection
	defer func(c *websocket.Conn, clientId string) {
		_ = c.Close()
		logs.LogStr(fmt.Sprintf("Client %s Disconnected", clientId))
		delete(h.ConnectedClients, clientId)
	}(c, clientId)
	// listen for requests from connected client
	for {
		op, message, err := c.ReadMessage()
		if err != nil {
			if err != io.EOF {
				logs.LogErr(err)
				return
			}
			continue
		}
		h.Code = op
		h.Conn = c
		h.Context = r.Context()
		// run on a new lightweight thread
		go h.Process(message)
	}
}

func (h *SocketsHandler) Process(message []byte) {
	// encode message to request packet
	requestPacket, err := sockets.NewRequestPacket(message, h.Conn, h.Code, h.Context)
	if err != nil {
		res := response.SocketResponseData{
			Code: utils.APIErrorCode,
			Data: utils.APIError,
		}
		b, _ := res.Encode()
		_ = h.Conn.WriteJSON(b)
		logs.LogErr(err)
	} else {
		logs.LogStr(fmt.Sprintf("Receiced Request -> %s", requestPacket.Action))
		apiRequests.Enqueue(requestPacket)
		// notify dispatcher to consume request packet
		events.Notify()
	}
}
