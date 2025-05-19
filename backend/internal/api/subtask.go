package api

import (
	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
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

	idStr := c.Params("id")
	// log.Println("Delete Card", idStr)

	ok := gdb.SubtaskDelete(idStr)

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

	err := c.BodyParser(&subtask)
	check.IfError(err)

	// log.Println("Edit Card", card)

	ok := gdb.SubtaskEdit(subtask)

	return c.JSON(ok)
}
