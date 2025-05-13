package api

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
)

func boardGetByID(c *gin.Context) {

	idStr := c.Param("id")
	log.Println("Getting Board", idStr)

	board := gdb.BoardGetByID("1")

	c.IndentedJSON(http.StatusOK, board)
}

func boardsGetAll(c *gin.Context) {

	boards := gdb.BoardsGetAll()

	c.IndentedJSON(http.StatusOK, boards)
}

func boardEdit(c *gin.Context) {
	var board models.Board

	str := c.PostForm("board")
	err := json.Unmarshal([]byte(str), &board)
	check.IfError(err)

	log.Println("Edit Board", board)

	ok := gdb.BoardEdit(board)

	c.IndentedJSON(http.StatusOK, ok)
}

func boardDelete(c *gin.Context) {

	idStr := c.Param("id")
	log.Println("Delete Board", idStr)

	ok := gdb.BoardDelete(idStr)

	c.IndentedJSON(http.StatusOK, ok)
}
