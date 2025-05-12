package gdb

import (
	"time"

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

	now := time.Now().Format("2006-01-02 15:04:05")
	if card.ID == 0 {
		card.DateCreated = now
		card.DateMoved = now
	} else {
		var oldCard models.Card
		err = db.First(&oldCard, card.ID).Error
		check.IfError(err)

		if card.ColumnID != oldCard.ColumnID {
			card.DateMoved = now
		}
	}

	card.DateUpdated = now

	err = db.Save(&card).Error
	check.IfError(err)
}
