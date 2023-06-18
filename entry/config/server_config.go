package config

import (
	"orionedge.co/conversate/core/docs/params"
	"orionedge.co/conversate/core/interfaces"
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
