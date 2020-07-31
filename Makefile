

cache:
	mkdir -p /tmp/cache

build:
	docker-compose build

run: cache
	docker-compose up

stop:
	docker-compose stop

open:
	xdg-open http://localhost
