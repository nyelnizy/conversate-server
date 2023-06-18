package docsparams

type ApiDoc struct {
	Group         string      `json:"group"`
	Description   string      `json:"description"`
	Input         interface{} `json:"input"`
	Output        interface{} `json:"output"`
	ExcludeOutput []string
	ExcludeInput  []string
}
type InputPrimitive struct {
	Name        string      `json:"name"`
	Description string      `json:"description"`
	Example     interface{} `json:"example"`
}
type OutputPrimitive struct {
	Name    string      `json:"name"`
	Example interface{} `json:"example"`
}

type DocsConfig struct {
	AppName         string
	AppVersion      string
	AppDescription  string
	PostManBaseUrl  string
	DocsEmail       string
	DocsPassword    string
	DocsJwtIssuer   string
	DocsJwtAudience string
	DocsJwtSecret   string
	DocsActions     map[string]*ApiDoc
}
