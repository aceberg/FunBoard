package api

import (
	"github.com/gofiber/fiber/v2"
	fiberSwagger "github.com/swaggo/fiber-swagger"

	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/users"

	// Swagger
	_ "github.com/aceberg/FunBoard/docs"
)

var appConfig models.Conf

// Routes - API routes
func Routes(app *fiber.App, conf *models.Conf) {

	appConfig = *conf

	users.Start(appConfig.UsersPath)

	// auth
	app.Post("/login", users.Login)
	app.Get("/logout", users.Logout)

	// themes
	app.Get("/themes", themesGetAll)

	api := app.Group("/api", users.RequireAuth)

	// config.go
	api.Get("/conf", getConfig)
	api.Post("/conf", saveConf)

	// board.go
	api.Get("/boards", boardsGetAll)
	api.Get("/board/:id", boardGetByID)
	api.Get("/board/del/:id", boardDelete)
	api.Post("/board", boardEdit)

	// card.go
	api.Get("/card/:id", cardGetByID)
	api.Get("/card/del/:id", cardDelete)
	api.Post("/card", cardEdit)

	// subtask.go
	api.Get("/subtask/del/:id", subtaskDelete)
	api.Post("/subtask", subtaskEdit)

	// column.go
	api.Get("/column/:id", columnGetByID)
	api.Get("/column/del/:id", columnDelete)
	api.Post("/column", columnEdit)
	api.Post("/column/props", columnPropsEdit)

	// swagger
	app.Get("/swagger/*", fiberSwagger.WrapHandler)
}
