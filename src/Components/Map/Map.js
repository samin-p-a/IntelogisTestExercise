import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, LayerGroup, ZoomControl, } from 'react-leaflet'


import useStyles from './useStyles'



function Map(props) {
  const {
    start,
    end,
    //redux
    paletteWidth,
    route,
    getRoute,
  } = props;
  const classes = useStyles();

  return (
  <div
    className={classes.map}
    key='map'
    style={{width:paletteWidth?`calc(100vw - ${paletteWidth}px)`:'100%'}}
    >
    <MapContainer
      className="mapContainer"
      center={[55.754304, 37.622124]}
      zoom={9}
      maxZoom={18}
      touchZoom={true}
      scrollWheelZoom={true}>
      <TileLayer
        key="title-layer"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
  </div>

  );
}

export default Map;
