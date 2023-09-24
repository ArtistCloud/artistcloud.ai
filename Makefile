.PHONY: build deploy

all: build deploy

build:
	npm run build

deploy:
	cp -R dist/. docs/.

setup:
	npm install
