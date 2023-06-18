package intfc

import (
	sockets "orionedge.co/conversate/core"
)

type Dispatcher interface {
	RegisterListener()
	ServeRequest(*sockets.RequestPacket)
}
