export const formChanger = (saver) => {
  //ф-ция высшего порядка, которая принимает useState сохранялку данных
  //и возвращает ф-цию которая сохранит правильное голое значение в этой ф-ции
  //поддерживает поля ввода, радиокнопки и чекбоксы
  return (event, allocatedValue=undefined) => {
    if(allocatedValue && typeof(allocatedValue)!=='object'){
      //так бывает у некоторых компонентов Material-UI
      saver(allocatedValue);
    }else if(event.target.type==='checkbox'){
      saver(event.target.checked);
    }else{
      saver(event.target.value);
    }
  };
}
export const replaceAll = (string, find, place) => {
  //замена в строке всех включений подстроки
  return String(string).split(find).join(place);
}
export const comparator=(fieldsArr,obj1,obj2)=>{
  //сравнение двух объектов по полям, список которых передан в массиве fieldsArr
  for(const field of fieldsArr){
    if((obj1[field]!==undefined || obj2[field]!==undefined) && obj1[field]!==obj2[field]) return false;
  }
  return true;
}

export const hash=(s)=>{
  //ф-ция вычисляет простой хеш из массива
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}
export const hash2=(s)=>{
  //ф-ция вычисляет простой хеш из строки
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

export const dateToMysql=(d)=>{
  const m2d=(num)=>num<10?`0${num}`:`${num}`; //число превратим в строку минимуи с двумя цифрами
  if(!(d instanceof Date)) throw new Error('Ф-ция dateToMysql принимает данные только типа Date');
  return (`${m2d(d.getFullYear())}-${m2d(d.getMonth()+1)}-${m2d(d.getDate())}`);
}

export const distance=(c1,c2)=>{
  //вычисляет расстояние между двумя точками с координатами c1 и c2, заданными массивами [lat, lon]
  //результат в метрах. (По некоторым сведениям на малых расстояниях привирает, из-за точности
  //чисел с плавающей точкой)

  if(!c1 || !c2) return undefined;

  //радиус земли в метрах
  const r = 6371000;

  const { PI, sin, cos, acos } = Math;

  //преобразование градусов в радианы
  const g2r = grad=>grad/180*PI

  const [ lat1, lon1 ] = c1.map(g2r);
  const [ lat2, lon2 ] = c2.map(g2r);

  return r*acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon1-lon2))
}
