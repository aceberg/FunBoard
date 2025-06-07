package users

import (
	"log"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/session"

	"github.com/aceberg/FunBoard/internal/check"
)

var store = session.New(session.Config{
	CookieName:     "session_id",
	Expiration:     24 * time.Hour,
	CookieSecure:   false, // must be false for HTTP (non-HTTPS) during dev
	CookieHTTPOnly: true,
})

// Login handler: sets user ID in session
func Login(c *fiber.Ctx) error {
	var creds struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	err := c.BodyParser(&creds)
	check.IfError(err)

	log.Println("Login:", creds)

	user, ok := allUsers[creds.Username]
	if !(ok && user.Password == creds.Password) {
		return c.Status(fiber.StatusUnauthorized).JSON("Invalid credentials")
	}

	sess, err := store.Get(c)
	check.IfError(err)

	sess.Set("username", creds.Username)
	err = sess.Save()
	check.IfError(err)

	sess2, _ := store.Get(c)
	log.Println("Username", sess2.Get("username"))

	return c.JSON("Logged in")
}

// Logout handler: clears session
func Logout(c *fiber.Ctx) error {
	sess, err := store.Get(c)
	check.IfError(err)

	err = sess.Destroy()
	check.IfError(err)

	return c.JSON("Logged out")
}

// RequireAuth - middleware to protect routes
func RequireAuth(c *fiber.Ctx) error {

	if Enabled {
		sess, err := store.Get(c)
		check.IfError(err)

		username := sess.Get("username")
		if username == nil {
			log.Println("Unauthorized")
			return c.Status(fiber.StatusUnauthorized).JSON("Unauthorized")
		}

		log.Println("User on Auth", username)
		c.Locals("username", username)
	}

	return c.Next()
}
