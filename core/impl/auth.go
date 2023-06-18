package impl

import "github.com/nyelnizy/conversate-server/core/interfaces"

var jwtValidator intfc.Validator

func VerifyToken(api *SocketApiRequest) bool {
	ctx, err := jwtValidator.Validate(api.RequestPacket.Token, api.RequestPacket.Context)
	if err != nil {
		return false
	}
	api.RequestPacket.Context = ctx
	return true
}
func SetValidator(v intfc.Validator) {
	jwtValidator = v
}
