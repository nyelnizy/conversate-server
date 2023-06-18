package intfc

import "context"

type Validator interface {
	Validate(token string, ctx context.Context) (context.Context, error)
}
