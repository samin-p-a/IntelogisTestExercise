const updateUi = (state, action) => {
  if(state===undefined){
    return {
      paletteWidth: 300,
    }
  }

  const { ui:data } = state

  switch(action.type){
    case 'SET_UI_PALETTE_WIDTH':
      return {...data, paletteWidth:action.payload};

    default:
      return data;
  }
}

export default updateUi;
