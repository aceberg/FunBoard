package gdb

import (
	"github.com/aceberg/FunBoard/internal/models"
)

// BoardGetByID - get one board
func BoardGetByID() models.Board {

	var board models.Board
	db.Preload("Columns").Preload("Columns.Cards").First(&board, 1)

	return board
}
