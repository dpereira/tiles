

cache:
	mkdir -p /tmp/cache

build:
	docker-compose build

update:
	docker-compose run web-builder

run: cache
	docker-compose up

stop:
	docker-compose stop

open:
	xdg-open http://localhost
