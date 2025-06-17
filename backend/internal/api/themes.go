package api

import (
	"encoding/json"
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

func themeGetByName(c *fiber.Ctx) error {
	var data any

	path := c.Params("path")
	name := c.Params("name")

	if path != "" && name != "" {
		content, err := os.ReadFile(appConfig.DirPath + "/themes/" + path + "/" + name)
		check.IfError(err)

		err = json.Unmarshal(content, &data)
		check.IfError(err)
	}

	return c.JSON(data)
}
