/*
Универсальный класс для взаимодействия с редакс.
Обеспечивает необходимые для этого интерфейсы. Остальные классы
работающие с Р стоит наследовать от этого, напрямую или через
суб-классы, реализующие доп. функционал.

Ожидает
super(
  <ссылка на store>,
  ?<объект actions которые надо массово диспатчить и присвоить в this>,
  ?<action в котором надлежит регистрировать экземпляр объекта-сервиса>
)

Предоставляет на this
store         редакс стор
rr            обертка облегчающая доступ к данным в стейте редакса
_c            таймер
actions       задиспатченные actions переданные в конструктоа

_isChange     ф-ция - универсальный проверятор изменений в стейте редакса
_resetC       ф-ция - сбрасывает отсчет таймера (начало времен)
_bindAC       ф-ция - упрощает создание экшенов.

Обеспечивает
вызов ф-ции _storeListener при каждом изменении redux State
*/
import { bindActionCreators } from 'redux';
import ReduxReader from './ReduxReader';
import Chronograph from './Chronograph';


export default class ReduxableService{

  constructor(store, actions, selfRegisterAction){
    console.log('Вызван конструктор родителя (ReduxableService)',this)
    if(!store){
      //обязательный параметр редакс стор
      throw new Error("Required the redux-store")
    }
    this.store = store; //редакс стор
    this.store.subscribe(this.__caller); //Подписываемся на изменения стейта редакса
    this.rr = new ReduxReader(store); //обертка облегчающая доступ к данным в стейте редакса
    this._c = new Chronograph(); //таймер


    if(actions){
      //Если нам передали экшны - регистрируем их на здесь
      this.actions = bindActionCreators(actions, this.store.dispatch);
    }

    if(selfRegisterAction){
      //если нам передали экшн, в котором надо регать экземпляр регаем его
      bindActionCreators(selfRegisterAction, this.store.dispatch)(this);
    }


    this.__storedReduxValuePrefix = '__';

  }

  //внутренние функции
  _storeListener = () => {
    //ф-ция слушатель изменений в редаксе
  }
  _isChange = (valName) => {
    //универсальная проверка на изменения поля в rr
    const result=(this[`${this.__storedReduxValuePrefix}${valName}`]!==this.rr[`${valName}`]);
    this[`${this.__storedReduxValuePrefix}${valName}`]=this.rr[`${valName}`];
    return result;
  }
  _resetC = () => {
    //сбрасывает таймер
    this._c = new Chronograph()
  }
  _bindAC = (actions) => {
    //Упрощает создание экшн креаторов
    return bindActionCreators(actions, this.store.dispatch);
  }
  __caller=()=>{
    this._storeListener();
  }
}
