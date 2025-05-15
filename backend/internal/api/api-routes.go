package api

import (
	"github.com/gofiber/fiber/v2"
	fiberSwagger "github.com/swaggo/fiber-swagger"

	"github.com/aceberg/FunBoard/internal/models"

	// Swagger
	_ "github.com/aceberg/FunBoard/docs"
)

var appConfig models.Conf

// Routes - API routes
func Routes(app *fiber.App, conf *models.Conf) {

	appConfig = *conf

	// config.go
	app.Get("/api/conf", getConfig)
	app.Post("/api/conf", saveConf)

	// board.go
	app.Get("/api/boards", boardsGetAll)
	app.Get("/api/board/:id", boardGetByID)
	app.Get("/api/board/del/:id", boardDelete)
	app.Post("/api/board", boardEdit)

	// card.go
	app.Get("/api/card/del/:id", cardDelete)
	app.Post("/api/card", cardEdit)

	// column.go
	app.Get("/api/column/del/:id", columnDelete)
	app.Post("/api/column", columnEdit)
	app.Post("/api/column/props", columnPropsEdit)

	// swagger
	app.Get("/swagger/*", fiberSwagger.WrapHandler)
}
