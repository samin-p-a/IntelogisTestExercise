const mapStateToProps = (state) =>{
  const {
    ui:{
      paletteWidth,
    },
    api:{
      route,
    },
    service:{
      Api:{
        getRoute,
      },
    },
  } = state;
  return {
    paletteWidth,
    route,
    getRoute,
  }
}

export default mapStateToProps;
