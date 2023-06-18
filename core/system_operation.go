package core

var busy bool

func IsSystemBusy() bool {
	return busy
}
func SetSystemBusy(b bool) {
	busy = b
}
