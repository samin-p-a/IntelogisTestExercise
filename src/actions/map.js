//Объекты которые живут на карте

//Сохраняем загруженные точки
export const setSelectedDeliveryRequest = (index) => {
  //имя переменной map.selectedDeliveryRequest
  return {type: 'SET_MAP_SELECTED_DELIVERY_REQUEST', payload:index};
};
