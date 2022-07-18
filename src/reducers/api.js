const updateApi = (state, action) => {
  if(state===undefined){
    return {
      points: undefined,
      route: undefined,
      deliveryRequests: undefined,
    }
  }
  const { api:data } = state;

  switch(action.type){
    case 'SET_API_POINTS':
      return {...data, points: action.payload};
    case 'SET_API_ROUTE':
      return {...data, route: action.payload};
    case 'SET_API_DELIVERY_REQUESTS':
      return {...data, deliveryRequests: action.payload};

    default:
      return data;
  }
}

export default updateApi;
