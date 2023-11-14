package core

import (
	"context"
	"encoding/json"
	"github.com/gorilla/websocket"
)

type RequestPacket struct {
	Id        string      `json:"id"`
	ClientId  string      `json:"client_id"`
	Action    string      `json:"action"`
	Parameter interface{} `json:"parameter"`
	Token     string      `json:"token"`
	Conn      *websocket.Conn
	OptCode   int
	Context   context.Context
}

func NewRequestPacket(request []byte, conn *websocket.Conn, code int, ctx context.Context) (*RequestPacket, error) {
	var rp RequestPacket
	if err := json.Unmarshal(request, &rp); err != nil {
		return nil, err
	}
	rp.Conn = conn
	rp.Context = ctx
	rp.OptCode = code
	return &rp, nil
}
