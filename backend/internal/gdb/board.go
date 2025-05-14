package gdb

import (
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// BoardGetByID - get one board
func BoardGetByID(id string) (board models.Board) {

	err = db.Preload("Columns").Preload("Columns.Cards").Preload("Columns.Props").First(&board, id).Error
	check.IfError(err)

	return board
}

// BoardsGetAll - get all Boards IDs and Names
func BoardsGetAll() (boards []models.BoardInfo) {

	err = db.Model(&models.Board{}).Select("id, name").Find(&boards).Error
	check.IfError(err)

	return boards
}

// BoardEdit - update or add Board
func BoardEdit(board models.Board) bool {

	err = db.Save(&board).Error
	return !check.IfError(err)
}

// BoardDelete - delete Board by ID
func BoardDelete(id string) bool {

	err = db.Delete(&models.Board{}, id).Error
	return !check.IfError(err)
}
