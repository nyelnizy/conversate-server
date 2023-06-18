package config

import (
	"github.com/nyelnizy/conversate-server/core/docs/params"
	"github.com/nyelnizy/conversate-server/core/interfaces"
)

type TlsCert struct {
	Key  string
	Cert string
}
type ServerConfig struct {
	Port         string
	PublicFolder string
	JwtValidator intfc.Validator
	TlsCert      *TlsCert
	DocsConfig   *docsparams.DocsConfig
}
