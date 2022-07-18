/*
Класс, предоставляющий инструменты для отсчета времени
*/

export default class Chronograph{
  constructor(){
    this.start=new Date();
    this._period=new Date();
  }
  get l_t(){
    //Время от создания хронографа
    return (new Date()- this.start)
  }
  get r_p(){
    //время от прошлой отсечки, и сделать новую отсечку
    const deltaPeriod=new Date()- this._period;
    this._period=new Date();
    return deltaPeriod;
  }
  get p(){
    //время от прошлой отсечки
    return (new Date()- this._period);
  }
}
