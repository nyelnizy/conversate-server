package impl

import (
	aq "github.com/emirpasic/gods/queues/arrayqueue"
)

var apiRequests *aq.Queue
var apiResponses *aq.Queue
var processingResponse bool

func InitializeQueue() {
	apiRequests = aq.New()
	apiResponses = aq.New()
}
