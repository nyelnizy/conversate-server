package intfc

import "github.com/nyelnizy/conversate-server/core"

type ActionStore interface {
	AddAction(newAction *core.Action)
	GetAction(actionName string) (*core.Action, error)
	GetAllActions() map[string]*core.Action
}
