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

func columnDelete(c *gin.Context) {

	idStr := c.Param("id")
	log.Println("Delete Column", idStr)

	ok := gdb.ColumnDelete(idStr)

	c.IndentedJSON(http.StatusOK, ok)
}

func columnEdit(c *gin.Context) {
	var column models.Column

	str := c.PostForm("column")
	err := json.Unmarshal([]byte(str), &column)
	check.IfError(err)

	log.Println("Edit Column", column)

	ok := gdb.ColumnEdit(column)

	c.IndentedJSON(http.StatusOK, ok)
}

func columnPropsEdit(c *gin.Context) {
	var props models.ColumnProps

	str := c.PostForm("props")
	err := json.Unmarshal([]byte(str), &props)
	check.IfError(err)

	log.Println("Edit Column Props", props)

	ok := gdb.ColumnPropsEdit(props)

	c.IndentedJSON(http.StatusOK, ok)
}
