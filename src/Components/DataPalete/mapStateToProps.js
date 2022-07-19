const mapStateToProps = (state) =>{
  const {
    api:{
      points,
      deliveryRequests,
    },
    map:{
      selectedDeliveryRequest,
    },
    service:{
      Api:{
        getPoints,
        getDeliveryRequests,
      },
    },
  } = state;
  return {
    getPoints,
    getDeliveryRequests,
    points,
    deliveryRequests,
    selectedDeliveryRequest,
  }
}

export default mapStateToProps;
