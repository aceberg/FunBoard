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
