const updateMap = (state, action) => {
  if(state===undefined){
    return {

    }
  }

  const { map:data } = state

  switch(action.type){
    // case 'SET_MAP_что-то-там-такое':
    //   return {...data, status:action.payload};

    default:
      return data;
  }
}

export default updateMap;
