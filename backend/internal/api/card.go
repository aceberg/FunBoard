package api

import (
	"encoding/json"
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
)

func cardDelete(c *fiber.Ctx) error {

	idStr := c.Params("id")
	log.Println("Delete Card", idStr)

	ok := gdb.CardDelete(idStr)

	return c.JSON(ok)
}

func cardEdit(c *fiber.Ctx) error {
	var card models.Card

	str := c.FormValue("card")
	err := json.Unmarshal([]byte(str), &card)
	check.IfError(err)

	log.Println("Edit Card", card)

	ok := gdb.CardEdit(card)

	return c.JSON(ok)
}
