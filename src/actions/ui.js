//Экшны для интерфейса

//Ширина палитры
export const setPaletteWidth = (width) => {
  //Переменная ui.paletteWidth
  return {type: 'SET_UI_PALETTE_WIDTH', payload:width};
};
