const mapStateToProps = (state) =>{
  const {
    ui:{
      paletteWidth,
    }
  } = state;
  return {
    paletteWidth,
  }
}

export default mapStateToProps;
