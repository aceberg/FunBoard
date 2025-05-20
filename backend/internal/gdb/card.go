package gdb

import (
	"time"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// CardGetByID - get one Card
func CardGetByID(id string) (card models.Card) {

	err = db.Preload("Tasks").First(&card, id).Error
	check.IfError(err)

	return card
}

// CardDelete - delete Card by ID
func CardDelete(id string) bool {

	err = db.Delete(&models.Card{}, id).Error
	return !check.IfError(err)
}

// CardEdit - update or add Card
func CardEdit(card models.Card) bool {

	now := time.Now().Format("2006-01-02 15:04:05")
	if card.ID == 0 {
		card.DateCreated = now
		card.DateMoved = now
	} else {
		var columnID uint
		err = db.Model(&models.Card{}).Select("column_id").Where("id = ?", card.ID).Scan(&columnID).Error
		check.IfError(err)

		if card.ColumnID != columnID {
			card.DateMoved = now
		}
	}

	err = db.Save(&card).Error
	return !check.IfError(err)
}
