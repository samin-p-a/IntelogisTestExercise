//Регистратор сервисов в редаксе

//Регистрация АПИ
export const setApi = (Api) => {
  //имя переменной service.Api
  return {type: 'SET_SERVICE_API', payload:Api};
};
