package impl

import (
	aq "github.com/emirpasic/gods/queues/arrayqueue"
)

var apiRequests *aq.Queue

func InitializeQueue() {
	apiRequests = aq.New()
}
