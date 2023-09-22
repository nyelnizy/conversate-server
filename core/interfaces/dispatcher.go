package intfc

import (
	sockets "github.com/nyelnizy/conversate-server/core"
)

type Dispatcher interface {
	RegisterRequestListener()
	ServeRequest(*sockets.RequestPacket)
}
