package impl

import (
	"errors"
	sockets "github.com/nyelnizy/conversate-server/core"
)

type DefaultActionStore struct {
	actions map[string]*sockets.Action
}

func NewDefaultActionStore() *DefaultActionStore {
	actions := make(map[string]*sockets.Action)
	return &DefaultActionStore{
		actions,
	}
}
func NewStoreWithActions(actions map[string]*sockets.Action) *DefaultActionStore {
	return &DefaultActionStore{
		actions,
	}
}
func (a *DefaultActionStore) AddAction(newAction *sockets.Action) {
	a.actions[newAction.Name] = newAction
}
func (a *DefaultActionStore) GetAction(actionName string) (*sockets.Action, error) {
	action, exists := a.actions[actionName]
	if !exists {
		return nil, errors.New("action not found")
	}
	return action, nil
}
func (a *DefaultActionStore) GetAllActions() map[string]*sockets.Action {
	return a.actions
}
