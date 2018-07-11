import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import TileGrid from 'ol/tilegrid/TileGrid';
import XYZ from 'ol/source/XYZ';
import Projection from 'ol/proj/Projection';
import {Attribution, Zoom, ScaleLine} from 'ol/control';
import {defaults as defaultInteractions} from 'ol/interaction';
import {register} from 'ol/proj/proj4';
import proj4 from 'proj4';

export default class {
  constructor(id) {
    proj4.defs('EPSG:5179','+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs');
    register(proj4);

    const resolutions = [2048, 1024, 512, 256, 128, 64, 32, 16, 8, 4, 2, 1, 0.5, 0.25];
    const extent = [90112, 1192896, 2187264, 2765760]; 
    const projection = new Projection({
      code: 'EPSG:5179',
      extent: extent,
      units: 'm'
    });
    
    const map = new Map({
      controls: [
        new Attribution({
          collapsible: true
        }), 
        new Zoom(), 
        new ScaleLine()
      ],
      interactions: defaultInteractions({pinchZoom: true, mouseWheelZoom: false}),
      layers: [ this.createNaverStreetTileLayer(projection, extent, resolutions) ],
      target: id,
      renderer: 'canvas',
      view: new View({
        projection,
        extent,
        resolutions,
        maxResolution: resolutions[0],
        zoomFactor: 1,
        center : [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2],
        zoom : 0
      })
    });
    
    this._map = map;
  }
  
  /**
   * 네이버 Street 타일 레이어를 생성
   * 
   * @param {ol.proj.Projection} projection 
   * @param {Array} extent 
   * @param {Array} resolutions 
   */
  createNaverStreetTileLayer(projection, extent, resolutions) {
    return new TileLayer({
      title: 'Naver Street Map',
      visible: true,
      type: 'base',
      source: new XYZ({
        projection,
        tileSize: 256,
        minZoom: 0,
        maxZoom: resolutions.length - 1,
        tileGrid: new TileGrid({
          extent,
          origin: [extent[0], extent[1]],
          resolutions
        }),
        tileUrlFunction: (tileCoord, pixelRatio, projection) => {
          if (tileCoord) {
            const [z, x, y] = [tileCoord[0] + 1, tileCoord[1], tileCoord[2]];

            return `https://simg.pstatic.net/onetile/get/194/0/0/${z}/${x}/${y}/bl_vc_bg/ol_vc_an`;
          } 
        },
        attributions: [
          '<a href="http://map.naver.com"><img src="http://static.naver.net/maps2/logo_naver_s.png"></a>'
        ]
      })
    });
  }
}