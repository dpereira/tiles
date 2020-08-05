import Map from 'ol/Map';
import View from 'ol/View';
import VectorTileLayer from 'ol/layer/VectorTile';
import TileLayer from 'ol/layer/Tile';
import VectorTileSource from 'ol/source/VectorTile';
import XYZ from 'ol/source/XYZ';
import MVT from 'ol/format/MVT';
import {fromLonLat} from 'ol/proj';

let view = new View({
    center: [0, 0],
    zoom: 2
  });

let map = new Map({
  target: 'map',
  layers: [
    /*
    new TileLayer({
      source: new XYZ({
        url: '/world-raster/{z}/{x}/{y}.png',
        maxZoom: 8,
      }),
      opacity: .75
    }),*/
    new TileLayer({
      source: new XYZ({
        url: 'https://tiles{0-3}.planet.com/basemaps/v1/planet-tiles/global_monthly_2019_05_mosaic/{z}/{x}/{y}.png?api_key=9dd6691c3cae4233a5a0116696d29d7d',
        maxZoom: 30
      })
    }),
    new VectorTileLayer({
      source: new VectorTileSource({
        url: '/world/{z}/{x}/{y}.pbf',
        format: new MVT(),
        maxZoom: 30
      }),
      opacity: .25

    })
  ],
  view: view
});

window.map = map;
window.view = view;
window.fromLonLat = fromLonLat;

window.reset  = () => {
    view.animate({zoom: 4}, {center: fromLonLat([0, 0])}); 
}

window.poa = () => {
    view.animate({zoom: 12}, {center: fromLonLat([-51.2177, -30.0346])}); 
}

window.xap = () => {
    view.animate({zoom: 12}, {center: fromLonLat([-52.6157, -27.1009])}); 
}
