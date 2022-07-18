import * as actions from '../actions/api';
import { setApi } from '../actions/service';

import { dummyPoints, dummyRoutes, dummyRequests } from './dummyApiData.js'

import ReduxableService from './parentСlasses/ReduxableService'
/*
  Предоставляет на this
  store         редакс стор
  rr            обертка облегчающая доступ к данным в стейте редакса
  _c            таймер
  actions       задиспатченные actions переданные в конструктор

  _isChange     ф-ция - универсальный проверятор изменений в стейте редакса
  _resetC       ф-ция - сбрасывает отсчет таймера (начало времен)
  _bindAC       ф-ция - упрощает создание экшенов.

  Обеспечивает
  вызов ф-ции _storeListener при каждом изменении redux State
*/

export default class Api extends ReduxableService{

  constructor(store){
    super(store, actions, setApi)
  }
  //Ф-ции имитирующие загрузку данных с бека 
  getPoints=()=>{
    //Имитатор загрузки данных о точках погрузки/разгрузки
    const { setPoints } = this.actions;
    setTimeout(()=>setPoints(dummyPoints),Math.floor(Math.random()*1500))
  }
  getRoute=({startId, endId})=>{
    //Имитатор загрузки маршрутов
    const { setRoute } = this.actions;
    //ищем подходящий маршрут в dummy маршрутах
    const result = dummyRoutes.find(({from, to})=>(from===startId && to===endId))?.route;
    //если нашлось что то правдивое
    if(result){
      //В редакс попадет наша находка
      setTimeout(()=>setRoute(result),Math.floor(Math.random()*1500))
    }else{
      //Иначе - пустой массив
      setTimeout(()=>setRoute([]),Math.floor(Math.random()*1500))
    }
  }
  getDeliveryRequests=()=>{
    //Имитатор загрузки заявок на доставку
    const { setDeliveryRequests } = this.actions;
    setTimeout(()=>setDeliveryRequests(dummyRequests),Math.floor(Math.random()*1500))

  }
}
