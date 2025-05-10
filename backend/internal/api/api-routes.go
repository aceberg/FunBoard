package api

import (
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/gin-gonic/gin"
)

var appConfig models.Conf

// Routes - API routes
func Routes(router *gin.Engine, conf *models.Conf) {

	appConfig = *conf

	router.GET("/api", apiHandler)             // api.go
	router.GET("/api/board/:id", getBoardByID) // api.go
	router.GET("/api/conf", getConfig)         // api.go

	router.POST("/api/conf", saveConf) // api.go

}
