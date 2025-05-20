package gdb

import (
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// ColumnGetByID - get one column
func ColumnGetByID(id string) (column models.Column) {

	err = db.Preload("Cards").Preload("Props").Preload("Cards.Tasks").First(&column, id).Error
	check.IfError(err)

	return column
}

// ColumnDelete - delete Column by ID
func ColumnDelete(id string) bool {

	err = db.Delete(&models.Column{}, id).Error
	return !check.IfError(err)
}

// ColumnEdit - update or add Column
func ColumnEdit(column models.Column) bool {

	err = db.Save(&column).Error
	return !check.IfError(err)
}

// ColumnPropsEdit - update or add ColumnProps
func ColumnPropsEdit(props models.ColumnProps) bool {

	err = db.Save(&props).Error
	return !check.IfError(err)
}
