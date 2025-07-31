PKG_NAME=FunBoard
USR_NAME=aceberg

mod:
	rm go.mod || true && \
	rm go.sum || true && \
	go mod init github.com/$(USR_NAME)/$(PKG_NAME) && \
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

# can be yaml, xml, db; add -w to write to file
tags: 
	gomodifytags -file internal/models/models.go -all -add-tags json
