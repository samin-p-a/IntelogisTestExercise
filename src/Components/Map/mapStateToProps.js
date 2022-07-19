const mapStateToProps = (state) =>{
  const {
    ui:{
      paletteWidth,
    },
    api:{
      route,
      points,
      deliveryRequests=[],
    },
    map:{
      selectedDeliveryRequest,
    },
    service:{
      Api:{
        getRoute,
      },
    },
  } = state;
  //выбираем только нужные нам данные
  const start = deliveryRequests?.[selectedDeliveryRequest]?.from;
  const end = deliveryRequests?.[selectedDeliveryRequest]?.to;
  return {
    paletteWidth,
    route,
    points,
    start,
    end,
    getRoute,
  }
}

export default mapStateToProps;
