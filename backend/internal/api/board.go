package api

import (
	"encoding/json"
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/gdb"
	"github.com/aceberg/FunBoard/internal/models"
)

// boardGetByID godoc
// @Summary      Get a Board by ID
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
	log.Println("Getting Board", idStr)

	board := gdb.BoardGetByID("1")

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

func boardEdit(c *fiber.Ctx) error {
	var board models.Board

	str := c.FormValue("board")
	err := json.Unmarshal([]byte(str), &board)
	check.IfError(err)

	log.Println("Edit Board", board)

	ok := gdb.BoardEdit(board)

	return c.JSON(ok)
}

func boardDelete(c *fiber.Ctx) error {

	idStr := c.Params("id")
	log.Println("Delete Board", idStr)

	ok := gdb.BoardDelete(idStr)

	return c.JSON(ok)
}
