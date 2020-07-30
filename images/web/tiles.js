import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
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
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
