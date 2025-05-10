package gdb

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// Start working with DB
func Start(path string) {
	db, err := gorm.Open(sqlite.Open(path), &gorm.Config{})
	check.IfError(err)

	// tmpBoard := models.Board{
	// 	ID:   1,
	// 	Name: "Temp Board",
	// 	Columns: []models.Column{
	// 		{
	// 			ID:   1,
	// 			Name: "Backlog",
	// 			Fold: false,
	// 			Cards: []models.Card{
	// 				{Name: "Card 1"},
	// 				{Name: "Card 2"},
	// 			},
	// 		},
	// 		{
	// 			ID:   2,
	// 			Name: "Now",
	// 			Fold: false,
	// 			Cards: []models.Card{
	// 				{Name: "Card 11"},
	// 				{Name: "Card 12"},
	// 			},
	// 		},
	// 		{
	// 			ID:   3,
	// 			Name: "Done",
	// 			Fold: false,
	// 			Cards: []models.Card{
	// 				{Name: "Card 21"},
	// 				{Name: "Card 22"},
	// 			},
	// 		},
	// 	},
	// }
	// Migrate the schema
	err = db.AutoMigrate(&models.Board{}, &models.Column{}, &models.Card{})
	check.IfError(err)

	// Create or Save
	// db.Save(&tmpBoard)
}

// GetBoardByID - get one board
func GetBoardByID(path string) models.Board {
	db, err := gorm.Open(sqlite.Open(path), &gorm.Config{})
	check.IfError(err)

	var board models.Board
	db.Preload("Columns").Preload("Columns.Cards").First(&board, 1)

	return board
}
