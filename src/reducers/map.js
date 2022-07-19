const updateMap = (state, action) => {
  if(state===undefined){
    return {

    }
  }

  const { map:data } = state

  switch(action.type){
    case 'SET_MAP_SELECTED_DELIVERY_REQUEST':
      return {...data, selectedDeliveryRequest:action.payload};

    default:
      return data;
  }
}

export default updateMap;
