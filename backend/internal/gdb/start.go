package gdb

import (
	sqlite "github.com/aceberg/gorm-sqlite"

	"gorm.io/gorm"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

var db *gorm.DB
var err error

// Start working with DB
func Start(path string) {
	db, err = gorm.Open(sqlite.Open(path), &gorm.Config{})
	check.IfError(err)
	// db.Exec("PRAGMA foreign_keys = ON") // must be called for SQLite

	// Migrate the schema
	err = db.AutoMigrate(&models.Board{}, &models.Column{}, &models.Card{}, &models.ColumnProps{}, &models.Subtask{})
	check.IfError(err)
}
