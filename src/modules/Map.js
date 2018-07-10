import Map from 'ol/Map.js';
import View from 'ol/View.js';
import TileLayer from 'ol/layer/Tile.js';
import OSM from 'ol/source/OSM.js';

export default class {
  constructor(id) {
    const map = new Map({
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      target: id,
      view: new View({
        center: [14240853.357171986, 4544242.892015014],
        zoom: 6
      })
    });

    this._map = map;
  }
}