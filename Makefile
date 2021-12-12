.RECIPEPREFIX = >

SOURCE_DIR := src
SOURCES := $(shell find $(SOURCE_DIR) -name '*.ts')
BUILD_DIR := build/zock

PYTHON := python3
NPM := npm
NPX := npx

build-client: $(SOURCES)
> mkdir -p $(BUILD_DIR)
> $(NPX) webpack build
> cp -R static/css $(BUILD_DIR)
> cp -R static/html/* $(BUILD_DIR)

build: build-client

clean:
> rm -fR build/

setup-python: Pipfile Pipfile.lock
> $(PYTHON) -m pip install pipenv
> $(PYTHON) -m pipenv update

setup-testserver:
> $(PYTHON) -m pipenv run python util/gen_cert.py

setup-node: package.json package-lock.json
> $(NPM) install

setup-build: setup-node

setup: setup-python setup-node

test-serve:
> $(PYTHON) -m pipenv run python util/test_serve.py

rebuild-serve: build test-serve
