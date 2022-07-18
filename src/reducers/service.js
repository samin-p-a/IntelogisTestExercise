const updateService = (state, action) => {
  if(state===undefined){
    return {
      Api: undefined,
    }
  }

  const { service:data } = state

  switch(action.type){
    case 'SET_SERVICE_API':
      return {...data, Api:action.payload};
    default:
      return data;
  }
}

export default updateService;
