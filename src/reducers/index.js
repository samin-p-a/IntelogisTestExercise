import updateService from './service';
import updateApi from './api';
import updateMap from './map';
import updateUi from './ui';

const reducer = (state, action) => {
  return {
    service:updateService(state, action),     //хранилище сервисов
    api:updateApi(state, action),             //результаты деятельности АПИ
    map:updateMap(state, action),             //объекты карты
    ui:updateUi(state, action),               //состояние интерфейса
  }
}

export default reducer;
