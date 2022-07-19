import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, LayerGroup, ZoomControl, Polyline } from 'react-leaflet'


import useStyles from './useStyles'



function Map(props) {
  const {
    //dispatch
    setRoute,
    //redux
    paletteWidth,
    route,
    points=[],
    start,
    end,
    getRoute=()=>{},
  } = props;

  const classes = useStyles();

  useEffect(()=>{
    //произошло изменение начальной или конечной точки маршрута, надо удалить старый маршрут
    setRoute(undefined)
    //если в редаксе нашолся старт и финиш, и у нас есть данные о этих точках
    if(start && end && getPoinsById(start) && getPoinsById(end)){
      //Запросим маршрут между этими двумя точками
      getRoute({startId:start, endId:end})
      //а пока он грузится - пнем карту, чтоб отобразить старт и финиш в области видимости
      const neededPoints=[getPoinsById(start).position, getPoinsById(end).position]
      showPoints(neededPoints);
    }
  },[start, end,])

  useEffect(()=>{
    //изменился маршрут. Проверяем загружен ли он, а также установлены ли стартовая и финишная точки.
    //и если да - пинаем карту, чтоб все это богатство было в области отображения
    if(start && end && getPoinsById(start) && getPoinsById(end) && route){
      const neededPoints=[getPoinsById(start).position, getPoinsById(end).position, ...route]
      showPoints(neededPoints);
    }
  },[route])

  const getPoinsById=(findedId)=>{
    return points?points.find(({id})=>id===findedId):undefined;
  }

  const sPoint=getPoinsById(start);
  const ePoint=getPoinsById(end);

  const showPoints=(pointsArr)=>{
    // ф-ция которая изменяет область видимости на карте, чтоб все точки гарантировано попали в нее.
    //!!!Внимание!!! у этой ф-ции есть проблема - переход через разрыв координат (область рядом с 180 долготой)

    // TODO: Реализовать ф-цию
    //Впрочем в тестовом задании даныый функционал не является необходимым
  }

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
      {(sPoint)?(
        <Marker position={sPoint.position}>
          <Tooltip>
            {`Начало: ${sPoint.name}`}
          </Tooltip>
        </Marker>
      ):null}
      {(ePoint)?(
        <Marker position={ePoint.position}>
          <Tooltip>
            {`Конец: ${ePoint.name}`}
          </Tooltip>
        </Marker>
      ):null}
      {(sPoint && ePoint && route)?(
        <Polyline positions={[sPoint.position, ...route, ePoint.position]} />
      ):null}
      <TileLayer
        key="title-layer"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    </MapContainer>
  </div>

  );
}

export default Map;
