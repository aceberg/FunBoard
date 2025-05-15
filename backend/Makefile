PKG_NAME=FunBoard
USR_NAME=aceberg

mod:
	go mod tidy

run:
	go run .

fmt:
	go fmt ./...

lint:
	golangci-lint run
	golint ./...

check: fmt lint

swag:
	swag init --parseInternal