package intfc

import "orionedge.co/conversate/core"

type ActionStore interface {
	AddAction(newAction *core.Action)
	GetAction(actionName string) (*core.Action, error)
	GetAllActions() map[string]*core.Action
}
