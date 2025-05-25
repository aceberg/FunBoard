package yaml

import (
	"log"
	"os"

	"gopkg.in/yaml.v3"

	"github.com/aceberg/FunBoard/internal/check"
	"github.com/aceberg/FunBoard/internal/models"
)

// Read - read .yaml file to struct
func Read(path string) map[string]models.User {

	file, err := os.ReadFile(path)
	check.IfError(err)

	items := make(map[string]models.User)
	err = yaml.Unmarshal(file, &items)
	check.IfError(err)

	return items
}

// Write - write struct to  .yaml file
func Write(path string, items map[string]models.User) {

	yamlData, err := yaml.Marshal(&items)
	check.IfError(err)

	err = os.WriteFile(path, yamlData, 0644)
	check.IfError(err)

	log.Println("INFO: writing new Users to", path)
}
