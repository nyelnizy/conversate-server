package intfc

import (
	sockets "github.com/nyelnizy/conversate-server/core"
)

type Dispatcher interface {
	RegisterListener()
	ServeRequest(*sockets.RequestPacket)
}
