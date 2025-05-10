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

func cardDelete(c *gin.Context) {

	idStr := c.Param("id")
	log.Println("Delete Card", idStr)

	gdb.CardDelete(idStr)

	c.IndentedJSON(http.StatusOK, true)
}

func cardEdit(c *gin.Context) {
	var card models.Card

	str := c.PostForm("card")
	err := json.Unmarshal([]byte(str), &card)
	check.IfError(err)

	log.Println("Edit Card", card)

	gdb.CardEdit(card)

	c.IndentedJSON(http.StatusOK, true)
}
