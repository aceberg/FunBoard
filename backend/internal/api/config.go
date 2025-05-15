package api

import (
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/conf"
	"github.com/aceberg/FunBoard/internal/models"
)

// getConfig godoc
// @Summary      Get app Config
// @Description  Get app Config
// @Tags         config
// @Accept       json
// @Produce      json
// @Success      200  {object}  models.Conf
// @Failure      404
// @Router       /api/conf [get]
func getConfig(c *fiber.Ctx) error {

	return c.JSON(appConfig)
}

// saveConfig godoc
// @Summary      Save app Config
// @Description  Save app Config
// @Tags         config
// @Accept       json
// @Produce      json
// @Param config body models.Conf true "App config"
// @Success      200
// @Failure      404
// @Router       /api/conf [post]
func saveConf(c *fiber.Ctx) error {
	var config models.Conf

	err := c.BodyParser(&config)
	check.IfError(err)

	appConfig.Host = config.Host
	appConfig.Port = config.Port

	log.Println("INFO: new config", config)

	conf.Write(appConfig)

	return c.SendString("")
}
