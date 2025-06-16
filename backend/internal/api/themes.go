package api

import (
	"os"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/gofiber/fiber/v2"
)

func themesGetAll(c *fiber.Ctx) error {
	type ThemeList struct {
		Boards []string
		Cards  []string
	}
	var themes ThemeList
	themes.Boards = getThemeNames(appConfig.DirPath + "/themes/board")
	themes.Cards = getThemeNames(appConfig.DirPath + "/themes/card")

	return c.JSON(themes)
}

func getThemeNames(path string) []string {
	var names []string

	entries, err := os.ReadDir(path)

	if !check.IfError(err) {
		for _, entry := range entries {
			if !entry.IsDir() {
				names = append(names, entry.Name())
			}
		}
	}

	return names
}
