//Регистрация результатов загрузки данных

//Сохраняем загруженные точки
export const setPoints = (points) => {
  //имя переменной api.points
  return {type: 'SET_API_POINTS', payload:points};
};
//Сохраняем полученный маршрут
export const setRoute = (route) => {
  //имя переменной api.route
  return {type: 'SET_API_ROUTE', payload:route};
};
//Сохраняем список заявок на доставку
export const setDeliveryRequests = (requests) => {
  //имя переменной api.deliveryRequests
  return {type: 'SET_API_DELIVERY_REQUESTS', payload:requests};
};
