package api

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/users"
)

// columnDelete godoc
// @Summary      Delete Column by ID
// @Description  Delete Column by ID
// @Tags         column
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Column ID"
// @Success      200  {object}  bool
// @Failure      404
// @Router       /api/column/del/{id} [get]
func columnDelete(c *fiber.Ctx) error {
	var ok bool

	idStr := c.Params("id")
	// log.Println("Delete Column", idStr)

	column := gdb.ColumnGetByID(idStr)
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.ColumnDelete(idStr)
	}

	return c.JSON(ok)
}

// columnGetByID godoc
// @Summary      Get Column by ID
// @Description  Get Column by ID
// @Tags         column
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Column ID"
// @Success      200  {object}  models.Column
// @Failure      404
// @Router       /api/column/{id} [get]
func columnGetByID(c *fiber.Ctx) error {

	idStr := c.Params("id")

	column := gdb.ColumnGetByID(idStr)
	if users.CheckPerm(c, column.BoardID, "read") {
		return c.JSON(column)
	}

	return c.JSON(false)
}

// columnEdit godoc
// @Summary      Edit or add Column
// @Description  Edit existing Column by ID or add new Column (if ID=0)
// @Tags         column
// @Accept       json
// @Produce      json
// @Param column body models.Column true "Column"
// @Success      200 {object}  bool
// @Failure      404
// @Router       /api/column [post]
func columnEdit(c *fiber.Ctx) error {
	var column models.Column
	var ok bool

	err := c.BodyParser(&column)
	check.IfError(err)

	// log.Println("Edit Column", column)
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.ColumnEdit(column)
	}

	return c.JSON(ok)
}

// columnPropsEdit godoc
// @Summary      Edit Column Properties
// @Description  Edit Column Properties
// @Tags         column
// @Accept       json
// @Produce      json
// @Param props body models.ColumnProps true "Column Props"
// @Success      200 {object}  bool
// @Failure      404
// @Router       /api/column/props [post]
func columnPropsEdit(c *fiber.Ctx) error {
	var props models.ColumnProps
	var ok bool

	err := c.BodyParser(&props)
	check.IfError(err)

	log.Println("Edit Column Props", props)

	column := gdb.ColumnGetByID(fmt.Sprintf("%d", props.ColumnID))
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.ColumnPropsEdit(props)
	}

	return c.JSON(ok)
}
