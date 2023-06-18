package response

import (
	"encoding/json"
	"errors"
)

type SocketResponseData struct {
	Id       string      `json:"id"`
	Action   string      `json:"action"`
	ClientId string      `json:"client_id"`
	Code     int         `json:"code"`
	Data     interface{} `json:"data"`
}

// Encode simply transforms the response data struct into bytes to send to the client
func (response *SocketResponseData) Encode() ([]byte, error) {
	if response.Id == "" {
		return nil, errors.New("invalid response data")
	}
	bytes, err := json.Marshal(response)
	if err != nil {
		return nil, err
	}
	return bytes, err
}
