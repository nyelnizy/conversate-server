package impl

import (
	"context"
	"strconv"

	"github.com/auth0/go-jwt-middleware/v2/validator"
)

type DefaultJwtValidator struct {
	Issuer        string
	Secret        string
	Audience      string
	AuthUserIdKey string
	SubjectKey    string
}

// Validate validates the provided jwt token
func (v *DefaultJwtValidator) Validate(token string, ctx context.Context) (context.Context, error) {
	keyFunc := func(ctx context.Context) (interface{}, error) {
		return []byte(v.Secret), nil
	}
	// Set up the validator.
	jwtValidator, err := validator.New(
		keyFunc,
		validator.HS256,
		v.Issuer,
		[]string{v.Audience},
	)
	if err != nil {
		return nil, err
	}
	// Validate token and return claims, eg. UserId
	claims, err := jwtValidator.ValidateToken(ctx, token)
	if err != nil {
		return nil, err
	}
	clms := claims.(*validator.ValidatedClaims)
	id, _ := strconv.Atoi(clms.RegisteredClaims.ID)
	subject, _ := strconv.Atoi(clms.RegisteredClaims.Subject)
	ctx = context.WithValue(ctx, v.AuthUserIdKey, uint(id))
	ctx = context.WithValue(ctx, v.SubjectKey, uint(subject))
	return ctx, nil
}
