package gdb

import (
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

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
