package api

import (
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/gin-gonic/gin"
)

var appConfig models.Conf

// Routes - API routes
func Routes(router *gin.Engine, conf *models.Conf) {

	appConfig = *conf

	router.GET("/api", apiHandler)
	router.GET("/api/board/:id", getBoardByID)
	router.GET("/api/card/del/:id", cardDelete)
	router.GET("/api/conf", getConfig)

	router.POST("/api/conf", saveConf)
	router.POST("/api/card", cardEdit)
}
