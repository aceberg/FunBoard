package api

import (
	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
)

// boardGetByID godoc
// @Summary      Get Board by ID
// @Description  Get Board details by its unique ID
// @Tags         board
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Board ID"
// @Success      200  {object}  models.Board
// @Failure      404
// @Router       /api/board/{id} [get]
func boardGetByID(c *fiber.Ctx) error {

	idStr := c.Params("id")
	// log.Println("Getting Board", idStr)

	board := gdb.BoardGetByID(idStr)

	return c.JSON(board)
}

// boardsGetAll godoc
// @Summary      Get all Boards
// @Description  Get IDs and Names of all Boards
// @Tags         board
// @Accept       json
// @Produce      json
// @Success      200  {array}  models.BoardInfo
// @Failure      404
// @Router       /api/boards [get]
func boardsGetAll(c *fiber.Ctx) error {

	boards := gdb.BoardsGetAll()

	return c.JSON(boards)
}

// boardEdit godoc
// @Summary      Edit or add Board
// @Description  Edit existing Board by ID or add new Board (if ID=0)
// @Tags         board
// @Accept       json
// @Produce      json
// @Param board body models.Board true "Board"
// @Success      200 {object}  bool
// @Failure      404
// @Router       /api/board [post]
func boardEdit(c *fiber.Ctx) error {
	var board models.Board

	err := c.BodyParser(&board)
	check.IfError(err)

	// log.Println("Edit Board", board)

	ok := gdb.BoardEdit(board)

	return c.JSON(ok)
}

// boardDelete godoc
// @Summary      Delete Board by ID
// @Description  Delete Board by ID
// @Tags         board
// @Accept       json
// @Produce      json
// @Param        id   path      int  true  "Board ID"
// @Success      200  {object}  bool
// @Failure      404
// @Router       /api/board/del/{id} [get]
func boardDelete(c *fiber.Ctx) error {

	idStr := c.Params("id")
	// log.Println("Delete Board", idStr)

	ok := gdb.BoardDelete(idStr)

	return c.JSON(ok)
}
