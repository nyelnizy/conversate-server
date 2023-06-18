package events

var listener func()

// Listen registers a callback function from the dispatcher to be called on new requests
func Listen(callback func())  {
	listener = callback
}

// Notify simply calls the registered callback function,
// this function is usually called by the socket's on message handler
// when there is a new request
func Notify()  {
	listener()
}