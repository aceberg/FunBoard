package users

import (
	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/yaml"
)

var allUsers map[string]models.User

// Enabled - true if users.yaml has 1 or more users
var Enabled bool

// Start - get users from file
func Start(path string) {
	allUsers = yaml.Read(path)

	// log.Println("Users:", allUsers)

	if len(allUsers) > 0 {
		Enabled = true
	}
}

// IsAdmin - check if user is Admin by Name
func IsAdmin(name string) bool {

	user, ok := allUsers[name]

	if ok && user.Admin {
		return true
	}

	return false
}
