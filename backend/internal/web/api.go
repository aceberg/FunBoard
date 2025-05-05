package web

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/conf"
	"github.com/aceberg/FunBoard/internal/models"
)

func apiHandler(c *gin.Context) {

	msg := "This is API"
	log.Println(msg)

	c.IndentedJSON(http.StatusOK, msg)
}

func apiGetConfig(c *gin.Context) {

	c.IndentedJSON(http.StatusOK, appConfig)
}

func apiSaveConf(c *gin.Context) {
	var config models.Conf

	str := c.PostForm("conf")
	err := json.Unmarshal([]byte(str), &config)
	check.IfError(err)

	// log.Println("INFO: new config", config)
	appConfig.Host = config.Host
	appConfig.Port = config.Port
	appConfig.Theme = config.Theme
	appConfig.Color = config.Color
	appConfig.NodePath = config.NodePath
	appConfig.LangFrom = config.LangFrom
	appConfig.LangTo = config.LangTo
	appConfig.LtrPath = config.LtrPath
	appConfig.LtrKey = config.LtrKey

	conf.Write(appConfig)

	c.IndentedJSON(http.StatusOK, true)
}
