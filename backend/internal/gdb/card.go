package gdb

import (
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// CardDelete - delete Card by ID
func CardDelete(id string) {

	err = db.Delete(&models.Card{}, id).Error
	check.IfError(err)
}

// CardEdit - update or add Card
func CardEdit(card models.Card) {

	err = db.Save(&card).Error
	check.IfError(err)
}
