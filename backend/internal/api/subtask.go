package api

import (
	"fmt"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/users"
)

// subtaskDelete godoc
// @Summary      Delete Card Subtask by ID
// @Description  Delete Card Subtask by ID
// @Tags         subtask
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Subtask ID"
// @Success      200  {object}  bool
// @Failure      404
// @Router       /api/subtask/del/{id} [get]
func subtaskDelete(c *fiber.Ctx) error {
	var ok bool

	idStr := c.Params("id")
	// log.Println("Delete Card", idStr)
	subtask := gdb.SubtaskGetByID(idStr)
	card := gdb.CardGetByID(fmt.Sprintf("%d", subtask.CardID))
	column := gdb.ColumnGetByID(fmt.Sprintf("%d", card.ColumnID))
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.SubtaskDelete(idStr)
	}

	return c.JSON(ok)
}

// subtaskEdit godoc
// @Summary      Edit or add Card Subtask
// @Description  Edit existing Subtask by ID or add new Subtask (if ID=0)
// @Tags         subtask
// @Accept       json
// @Produce      json
// @Param subtask body models.Subtask true "Subtask"
// @Success      200 {object}  bool
// @Failure      404
// @Router       /api/subtask [post]
func subtaskEdit(c *fiber.Ctx) error {
	var subtask models.Subtask
	var ok bool

	err := c.BodyParser(&subtask)
	check.IfError(err)

	// log.Println("Edit Card", card)
	card := gdb.CardGetByID(fmt.Sprintf("%d", subtask.CardID))
	column := gdb.ColumnGetByID(fmt.Sprintf("%d", card.ColumnID))
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.SubtaskEdit(subtask)
	}

	return c.JSON(ok)
}
