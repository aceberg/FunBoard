package gdb

import (
	"gorm.io/driver/sqlite"
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

	// Migrate the schema
	err = db.AutoMigrate(&models.Board{}, &models.Column{}, &models.Card{}, &models.ColumnProps{})
	check.IfError(err)
}
