package web

import (
	"embed"
	"io/fs"
	"log"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/fiber/v2/middleware/logger"

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
	//go:embed public/*
	pubFS embed.FS
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

	appConfig.UsersPath = dirPath + "/users.yaml"
	check.Path(appConfig.UsersPath)

	log.Println("INFO: starting web gui with config", appConfig.ConfPath)

	address := appConfig.Host + ":" + appConfig.Port

	log.Println("=================================== ")
	log.Printf("Web GUI at http://%s", address)
	log.Println("=================================== ")

	app := fiber.New()
	app.Use(logger.New())
	// Only for DEV
	app.Use(cors.New())

	api.Routes(app, &appConfig)

	publicFS, err := fs.Sub(pubFS, "public")
	check.IfError(err)

	app.Use("/", filesystem.New(filesystem.Config{
		Root:   http.FS(publicFS),
		Browse: true,
		Index:  "index.html",
	}))

	err = app.Listen(address)
	check.IfError(err)
}
