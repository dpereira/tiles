import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import TileLayer from 'ol/layer/Tile';
import VectorTileSource from 'ol/source/VectorTile';
import XYZ from 'ol/source/XYZ';
import MVT from 'ol/format/MVT';

new Map({
  target: 'map',
  layers: [
    new VectorTileLayer({
      source: new VectorTileSource({
        url: '/world/{z}/{x}/{y}.pbf',
        format: new MVT(),
        maxZoom: 30
      })
    }),
    new TileLayer({
      source: new XYZ({
        url: '/world-raster/{z}/{x}/{y}.png',
        maxZoom: 8,
      }),
      opacity: .75
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
