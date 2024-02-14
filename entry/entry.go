package conversate

import (
	"flag"
	"fmt"
	sockets "github.com/nyelnizy/conversate-server/core"
	"github.com/nyelnizy/conversate-server/core/docs"
	"github.com/nyelnizy/conversate-server/core/impl"
	intfc "github.com/nyelnizy/conversate-server/core/interfaces"
	"github.com/nyelnizy/conversate-server/entry/config"
	"github.com/nyelnizy/conversate-server/logs"
	"log"
	"mime"
	"net/http"
	"path/filepath"
	"runtime"
)

type server struct {
	config *config.ServerConfig
}

func New(config *config.ServerConfig) *server {
	return &server{config: config}
}

func (s *server) Run(actions ...intfc.ActionSetup) {
	impl.SetValidator(s.config.JwtValidator)
	store := impl.NewDefaultActionStore()
	// actions dispatcher
	for _, a := range actions {
		a.SetupActions(store)
	}
	docs.SetStore(store)
	docs.SetConfig(s.config.DocsConfig)
	d := impl.NewRequestDispatcher(store)
	d.RegisterRequestListener()
	impl.InitializeQueue()
	//box := rice.MustFindBox("../core/docs/pwa/assets")
	//assetsFileServer := http.StripPrefix("/assets/", http.FileServer(box.HTTPBox()))
	//http.Handle("/assets/", assetsFileServer)
	http.HandleFunc("/docs", docs.RenderDocs)
	http.HandleFunc("/api-docs", docs.GetDocs)
	http.HandleFunc("/api-login", docs.Login)
	http.HandleFunc("/generate-postman-collection", docs.GenerateCollection)
	// create a new handler to handle socket requests
	h := impl.NewSocketsHandler()
	http.HandleFunc("/api", h.Handle)

	_, currentFile, _, ok := runtime.Caller(0)
	if !ok {
		log.Fatal("failed to retrieve current file")
		return
	}
	dir := filepath.Dir(currentFile)
	err := mime.AddExtensionType(".webmanifest", "application/manifest+json")
	if err != nil {
		log.Fatal(err)
	}
	fs := http.FileServer(http.Dir(filepath.Join(dir, "../core/docs/pwa")))
	http.Handle("/", fs)
	http.Handle(fmt.Sprintf("/%s/", s.config.PublicFolder),
		http.StripPrefix(fmt.Sprintf("/%s/", s.config.PublicFolder), fs))
	logs.LogStr(fmt.Sprintf("Waiting For Connections...: %s\n", s.config.Port))
	var addr = flag.String("addr", fmt.Sprintf(":%s", s.config.Port), "http service address")
	if s.config.TlsCert != nil {
		log.Fatal(http.ListenAndServeTLS(*addr, s.config.TlsCert.Cert, s.config.TlsCert.Key, nil))
	} else {
		log.Fatal(http.ListenAndServe(*addr, nil))
	}
}
func (s *server) RunWithActions(actions map[string]*sockets.Action) {
	impl.SetValidator(s.config.JwtValidator)
	store := impl.NewStoreWithActions(actions)
	// actions dispatcher
	docs.SetStore(store)
	docs.SetConfig(s.config.DocsConfig)
	d := impl.NewRequestDispatcher(store)
	d.RegisterRequestListener()
	impl.InitializeQueue()
	http.HandleFunc("/docs", docs.RenderDocs)
	http.HandleFunc("/api-docs", docs.GetDocs)
	http.HandleFunc("/api-login", docs.Login)
	http.HandleFunc("/generate-postman-collection", docs.GenerateCollection)
	// create a new handler to handle socket requests
	h := impl.NewSocketsHandler()
	http.HandleFunc("/api", h.Handle)

	_, currentFile, _, ok := runtime.Caller(0)
	if !ok {
		log.Fatal("failed to retrieve current file")
		return
	}
	dir := filepath.Dir(currentFile)
	err := mime.AddExtensionType(".webmanifest", "application/manifest+json")
	if err != nil {
		log.Fatal(err)
	}
	fs := http.FileServer(http.Dir(filepath.Join(dir, "../core/docs/pwa")))
	http.Handle("/", fs)
	http.Handle(fmt.Sprintf("/%s/", s.config.PublicFolder),
		http.StripPrefix(fmt.Sprintf("/%s/", s.config.PublicFolder), fs))
	logs.LogStr(fmt.Sprintf("Waiting For Connections...: %s\n", s.config.Port))
	var addr = flag.String("addr", fmt.Sprintf(":%s", s.config.Port), "http service address")
	if s.config.TlsCert != nil {
		log.Fatal(http.ListenAndServeTLS(*addr, s.config.TlsCert.Cert, s.config.TlsCert.Key, nil))
	} else {
		log.Fatal(http.ListenAndServe(*addr, nil))
	}
}
