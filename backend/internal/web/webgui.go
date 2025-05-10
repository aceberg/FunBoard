package web

import (
	"embed"
	"html/template"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/FunBoard/internal/api"
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/conf"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
)

var (
	appConfig models.Conf

	// pubFS - public folder
	//
	//go:embed public/assets/*
	assetsFS embed.FS

	//go:embed public/index.html
	templFS embed.FS
)

// Gui - start web server
func Gui(dirPath string) {

	confPath := dirPath + "/config.yaml"
	check.Path(confPath)
	appConfig = conf.Get(confPath)

	appConfig.DirPath = dirPath
	appConfig.ConfPath = confPath
	appConfig.DBPath = dirPath + "/sqlite.db"
	check.Path(appConfig.DBPath)

	gdb.Start(appConfig.DBPath)

	log.Println("INFO: starting web gui with config", appConfig.ConfPath)

	address := appConfig.Host + ":" + appConfig.Port

	log.Println("=================================== ")
	log.Printf("Web GUI at http://%s", address)
	log.Println("=================================== ")

	gin.SetMode(gin.ReleaseMode)
	router := gin.Default()

	templ := template.Must(template.New("").ParseFS(templFS, "public/index.html"))
	router.SetHTMLTemplate(templ) // templates

	router.GET("/", indexHandler) // index.go
	router.StaticFS("/fs", http.FS(assetsFS))

	api.Routes(router, &appConfig)

	err := router.Run(address)
	check.IfError(err)
}
