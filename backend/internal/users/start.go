package users

import (
	"slices"

	"github.com/aceberg/FunBoard/internal/models"
	"github.com/aceberg/FunBoard/internal/yaml"
	"github.com/gofiber/fiber/v2"
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

// CheckPerm - check if this user allowed to read/write this board
func CheckPerm(c *fiber.Ctx, id uint, permType string) (perm bool) {
	perm = false

	if !Enabled {
		perm = true
		return perm
	}

	username := c.Locals("username").(string)
	// username := "user1"
	user, ok := allUsers[username]

	if ok && user.Admin {
		perm = true
	} else {
		if slices.Contains(user.BoardsWrite, id) ||
			(slices.Contains(user.BoardsRead, id) && permType == "read") {
			perm = true
		}
	}

	return perm
}
