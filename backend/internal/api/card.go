package api

import (
	"fmt"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/users"
)

// cardDelete godoc
// @Summary      Delete Card by ID
// @Description  Delete Card by ID
// @Tags         card
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Card ID"
// @Success      200  {object}  bool
// @Failure      404
// @Router       /api/card/del/{id} [get]
func cardDelete(c *fiber.Ctx) error {
	var ok bool

	idStr := c.Params("id")
	// log.Println("Delete Card", idStr)
	card := gdb.CardGetByID(idStr)
	column := gdb.ColumnGetByID(fmt.Sprintf("%d", card.ColumnID))
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.CardDelete(idStr)
	}

	return c.JSON(ok)
}

// cardGetByID godoc
// @Summary      Get Card by ID
// @Description  Get Card by ID
// @Tags         card
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Card ID"
// @Success      200  {object}  models.Card
// @Failure      404
// @Router       /api/card/{id} [get]
func cardGetByID(c *fiber.Ctx) error {

	idStr := c.Params("id")
	// log.Println("Delete Card", idStr)
	card := gdb.CardGetByID(idStr)
	column := gdb.ColumnGetByID(fmt.Sprintf("%d", card.ColumnID))
	if users.CheckPerm(c, column.BoardID, "read") {
		return c.JSON(card)
	}
	return c.JSON(false)
}

// cardEdit godoc
// @Summary      Edit or add Card
// @Description  Edit existing Card by ID or add new Card (if ID=0)
// @Tags         card
// @Accept       json
// @Produce      json
// @Param card body models.Card true "Card"
// @Success      200 {object}  bool
// @Failure      404
// @Router       /api/card [post]
func cardEdit(c *fiber.Ctx) error {
	var card models.Card
	var ok bool

	err := c.BodyParser(&card)
	check.IfError(err)

	// log.Println("Edit Card", card)
	column := gdb.ColumnGetByID(fmt.Sprintf("%d", card.ColumnID))
	if users.CheckPerm(c, column.BoardID, "write") {
		ok = gdb.CardEdit(card)
	}

	return c.JSON(ok)
}
