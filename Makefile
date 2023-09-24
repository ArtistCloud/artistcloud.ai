.PHONY: clean build deploy setup

all: clean build deploy

clean:
	rm -rf docs/*

build:
	npm run build

deploy:
	cp -R dist/. docs/.

setup:
	npm install
