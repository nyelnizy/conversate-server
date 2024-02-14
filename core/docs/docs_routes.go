package docs

import (
	"embed"
	"encoding/json"
	"fmt"
	"github.com/golang-jwt/jwt/v4"
	"html/template"
	"io/ioutil"
	"net/http"
	"time"
)

//go:embed html
var content embed.FS

func RenderDocs(w http.ResponseWriter, r *http.Request) {
	htmlContent, err := content.ReadFile("html/index.html")
	tmpl := template.Must(template.New("docs-tmpl").Parse(string(htmlContent)))
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	// Execute the template with no data
	err = tmpl.Execute(w, nil)
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
}
func GetDocs(w http.ResponseWriter, r *http.Request) {

	groupedFeatures := getFeatures()
	documentation := &Documentation{
		AppName:     config.AppName,
		AppVersion:  config.AppVersion,
		Description: config.AppDescription,
		Features:    groupedFeatures,
	}
	jsonData, err := json.Marshal(documentation)
	if err != nil {
		_, err := w.Write([]byte("An error occurred"))
		if err != nil {
			return
		}
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	_, err = w.Write(jsonData)
	if err != nil {
		return
	}
}
func Login(w http.ResponseWriter, r *http.Request) {
	var data struct {
		Email    string `json:"email"`
		Password string `json:"password"`
	}
	if r.Body == nil {
		http.Error(w, "Request body is empty", http.StatusBadRequest)
		return
	}
	fmt.Println(r.Header.Get("X-Token"))
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Println(err.Error())
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	err = json.Unmarshal(body, &data)
	if err != nil {
		fmt.Println(err.Error())
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if data.Email != config.DocsEmail || data.Password != config.DocsPassword {
		fmt.Println("Invalid Password")
		w.WriteHeader(422)
		_, _ = w.Write([]byte("Invalid Credentials"))
		return
	}
	token, err := generateToken()
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	w.Header().Set("Access-Control-Allow-Origin", "*")
	_, _ = w.Write([]byte(token))
}
func generateToken() (string, error) {

	timeInMinutes := 24 * 60
	expiresAt := &jwt.NumericDate{Time: time.Now().Add(time.Minute * time.Duration(timeInMinutes))}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.RegisteredClaims{
		Issuer:    config.DocsJwtIssuer,
		ExpiresAt: expiresAt,
		Audience:  []string{config.DocsJwtAudience},
	})
	// Sign and get the complete encoded token as a string using the secret
	tokenString, err := token.SignedString([]byte(config.DocsJwtSecret))
	if err != nil {
		return "", err
	}
	return tokenString, nil
}

//
//type jwtValidator struct {
//	Issuer   string
//	Secret   string
//	Audience string
//}
//
//// Validate validateToken validates the provided jwt token
//func (v *jwtValidator) Validate(token string, ctx context.Context) (context.Context, error) {
//	keyFunc := func(ctx context.Context) (interface{}, error) {
//		return []byte(v.Secret), nil
//	}
//	// Set up the validator.
//	jwtValidator, err := validator.New(
//		keyFunc,
//		validator.HS256,
//		v.Issuer,
//		[]string{v.Audience},
//	)
//	if err != nil {
//		return nil, err
//	}
//	// Validate token and return claims, eg. UserId
//	_, err = jwtValidator.ValidateToken(ctx, token)
//	if err != nil {
//		return nil, err
//	}
//	return ctx, nil
//}
