//Сервис предназначен исключительно для облегчения работы других сервисов с редаксом.

export default class ReduxReaderService{
  constructor(store){
    if(!store){
      throw new Error("Required the redux-store")
    }
    this.store=store;
  }

  //Сервисы
  get service_Api(){
    return this._service.Api;
  }

  //АПИ
  get api_points(){
    return this._api.points;
  }
  get api_route(){
    return this._api.route;
  }
  get api_deliveryRequests(){
    return this._api.isLoggedIn;
  }

  //Карта
  get map_status(){
    return this._map.status;
  }

  //Пользовательский интерфейс
  get ui_paletteWidth(){
    return this._ui.paletteWidth;
  }


  //Внутренние ф-ции
  get _state(){
    return this.store.getState();
  }

  get _service(){
    return this._state.service;
  }
  get _api(){
    return this._state.api;
  }
  get _map(){
    return this._state.map;
  }
  get _ui(){
    return this._state.ui;
  }
}
