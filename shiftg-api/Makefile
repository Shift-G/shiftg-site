# SHIFT+G API — Docker helpers
# Usage: make <target>   (run `make help` to list targets)

IMAGE     ?= shiftg-api
CONTAINER ?= shiftg-api
PORT      ?= 8000
ENV_FILE  ?= .env

# Pass --env-file only if the file exists (avoids docker erroring on a missing .env).
ENV_ARG := $(if $(wildcard $(ENV_FILE)),--env-file $(ENV_FILE),)

.DEFAULT_GOAL := help
.PHONY: help build up run down destroy logs sh restart ps

help: ## List available targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-10s\033[0m %s\n", $$1, $$2}'

build: ## Build the Docker image
	docker build -t $(IMAGE) .

up: build ## Build and run the container (detached) on $(PORT)
	docker run -d --name $(CONTAINER) $(ENV_ARG) -e PORT=$(PORT) -p $(PORT):$(PORT) $(IMAGE)
	@echo "Running at http://localhost:$(PORT)  (docs: /docs)"

run: up ## Alias for `up`

down: ## Stop and remove the container
	-docker rm -f $(CONTAINER)

destroy: down ## Remove the container and the image
	-docker rmi $(IMAGE)

restart: down up ## Rebuild and restart the container

logs: ## Follow container logs
	docker logs -f $(CONTAINER)

sh: ## Open a shell inside the running container
	docker exec -it $(CONTAINER) sh

ps: ## Show this project's container
	docker ps -a --filter name=$(CONTAINER)
