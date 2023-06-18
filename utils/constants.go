package utils

const (
	BadJwtToken   = "The provided JWT token is not valid"
	APIError      = "Something went wrong, please contact support"
	InvalidPacket = "Invalid request packet, make sure the request payload is properly structured"
	NotFound      = "The requested action is not defined"
)
const (
	BadJwtTokenCode   = 401
	InvalidPacketCode = 400
	APIErrorCode      = 500
	NotfoundCode      = 404
)
