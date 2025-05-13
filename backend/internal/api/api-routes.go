package api

import (
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/gin-gonic/gin"
)

var appConfig models.Conf

// Routes - API routes
func Routes(router *gin.Engine, conf *models.Conf) {

	appConfig = *conf

	// config.go
	router.GET("/api", apiHandler)
	router.GET("/api/conf", getConfig)
	router.POST("/api/conf", saveConf)

	// board.go
	router.GET("/api/boards", boardsGetAll)
	router.GET("/api/board/:id", boardGetByID)
	router.GET("/api/board/del/:id", boardDelete)
	router.POST("/api/board", boardEdit)

	// card.go
	router.GET("/api/card/del/:id", cardDelete)
	router.POST("/api/card", cardEdit)

	// column.go
	router.GET("/api/column/del/:id", columnDelete)
	router.POST("/api/column", columnEdit)
}
