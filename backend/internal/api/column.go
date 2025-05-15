package api

import (
	"encoding/json"
	"log"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/gofiber/fiber/v2"
)

func columnDelete(c *fiber.Ctx) error {

	idStr := c.Params("id")
	log.Println("Delete Column", idStr)

	ok := gdb.ColumnDelete(idStr)

	return c.JSON(ok)
}

func columnEdit(c *fiber.Ctx) error {
	var column models.Column

	str := c.FormValue("column")
	err := json.Unmarshal([]byte(str), &column)
	check.IfError(err)

	log.Println("Edit Column", column)

	ok := gdb.ColumnEdit(column)

	return c.JSON(ok)
}

func columnPropsEdit(c *fiber.Ctx) error {
	var props models.ColumnProps

	str := c.FormValue("props")
	err := json.Unmarshal([]byte(str), &props)
	check.IfError(err)

	log.Println("Edit Column Props", props)

	ok := gdb.ColumnPropsEdit(props)

	return c.JSON(ok)
}
