# Tiles

Hacking a crude tile server together.

## Setup

You will need docker + docker compose.

Download an mbtiles file containing the tiles you want to use, and save it in the repo root.

There is a free one available with world data here:

- https://openmaptiles.com/downloads/tileset/osm/?usage=personal

Update `image/tilestache/tilestaches.config` with the local path to the just downloaded mbtiles.

Finally:

```
$ make build
```

## Run

```
$ make run
```

## Use!

```
$ make open
```

Or:

 - http://localhost

Voilá.




