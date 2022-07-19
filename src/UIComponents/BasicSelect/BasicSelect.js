import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const BasicSelect=(props)=>{
  const {
    label='',       //Выводимое название выпадающего списка
    minWidth=120,   //минимальная ширина
    options=[],     //Массив для наполнения выпадающего списка
                    //Формат данных [{name:"Выводимый текст", id:(Желательно число)},...]
                    //Например:
                    //[{id: 1, name: "ООО Рога"}, {id: 2, name: "ООО Копыта"}]
    value,          //Значение
    onChange=()=>{},//Обработчик изменения (получает значение id выбранного поля)
  }=props;

  const simplifiedOnChange=(event)=>{
    onChange(event?.target?.value)
  }

  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth }}>
        <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={simplifiedOnChange}
          label={label}
        >
          <MenuItem value="">
            <em>Не выбрано</em>
          </MenuItem>
          {options.map(({id, name})=>(<MenuItem value={id} key={id}>{name}</MenuItem>))}
        </Select>
      </FormControl>
  );
}

export default BasicSelect;
