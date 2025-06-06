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

// CheckRead - check if this user allowed to read this board
func CheckRead(c *fiber.Ctx, id uint) (perm bool) {
	perm = false

	if !Enabled {
		perm = true
	} else {
		//username := c.Locals("username").(string)
		username := "user1"
		user, ok := allUsers[username]

		if ok {
			if user.Admin || slices.Contains(user.BoardsWrite, id) || slices.Contains(user.BoardsRead, id) {
				perm = true
			}
		}
	}

	return perm
}

// CheckWrite - check if this user allowed to write this board
func CheckWrite(c *fiber.Ctx, id uint) (perm bool) {
	perm = false

	if !Enabled {
		perm = true
	} else {
		//username := c.Locals("username").(string)
		username := "user1"
		user, ok := allUsers[username]

		if ok {
			if user.Admin || slices.Contains(user.BoardsWrite, id) {
				perm = true
			}
		}
	}

	return perm
}
