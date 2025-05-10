package api

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/FunBoard/internal/gdb"
)

func getBoardByID(c *gin.Context) {

	idStr := c.Param("id")
	log.Println("Getting Board", idStr)

	board := gdb.GetBoardByID(appConfig.DBPath)

	c.IndentedJSON(http.StatusOK, board)
}
