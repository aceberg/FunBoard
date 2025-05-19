package gdb

import (
	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// SubtaskDelete - delete Subtask by ID
func SubtaskDelete(id string) bool {

	err = db.Delete(&models.Subtask{}, id).Error
	return !check.IfError(err)
}

// SubtaskEdit - update or add Subtask
func SubtaskEdit(subtask models.Subtask) bool {

	err = db.Save(&subtask).Error
	return !check.IfError(err)
}
