// main.go

// @title         FunBoard API
// @version       1.0
// @description   API built with Fiber v2

// @contact.url   https://github.com/aceberg/FunBoard
// @license.name  MIT
// @license.url   https://opensource.org/licenses/MIT
// @BasePath  	  /

package main

import (
	"flag"

	_ "time/tzdata"

	"github.com/aceberg/FunBoard/internal/web"
)

const dirPath = "/data/FunBoard"

func main() {
	dirPtr := flag.String("d", dirPath, "Path to config dir")
	flag.Parse()

	web.Gui(*dirPtr) // webgui.go
}
