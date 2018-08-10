import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import Projection from 'ol/proj/Projection';
import { setTimeout } from 'timers';
 
export default class MapView extends Component {
    constructor(props){
        super(props);
        this.layerMarker = null;
        this.radiusCircle = null;
        this.map = null;
        this.osm = null;
        this.marker = null;
        this.click = false;
        this.clickTimeout = null;
        
    }
    PropTypes = {
        centerPoint:PropTypes.object.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.number.isRequired,
        mapZoom: PropTypes.number.isRequired
    
    };
    componentDidMount(){
        
        const {
            centerPoint,
            mapZoom,
          } = this.props;
      
          // this.props.getUserSelectedArea();
          var mapId = this.props.mapId || 'mapid';
      
          let { lat, lng } = centerPoint;
      console.log(centerPoint);
      console.log(mapZoom);
      console.log(mapId);
      this.map=  new Map({
                target: mapId,
                layers: [
                    new TileLayer({
                    source: new XYZ({
                        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    })
                    })
                ],
                view: new View({
                    projection: 'EPSG:4326',
                    center:  [lng, lat],
                    zoom: mapZoom
                })
        });
    }
    render () {
        const {mapId,height,width}=this.props;
        return <div  id={mapId} className="mapContainer" style={{height: height, width: width}} >
                </div>
    }
}