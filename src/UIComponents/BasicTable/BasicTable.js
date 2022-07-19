import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const BasicTable=(props)=>{
  const {
    columns=[],     //Массив заголовков столбцов, с указанием какое поле из массива строк надо использовать
                    //Формат данных [{name:"Заголовок", objectField:"НазваниеПолеВОбъектеДанных"},...]
                    //Например:
                    //[{name:"Откуда", objectField:"from"}, {name:"Куда", objectField:"to"}, {name:<StraightenIcon/>, objectField:"distance"}]
    data=[],        //Набор данных для наполнения таблицы
                    //Формат данных [{someField:ПроизвольноеЗначение>,someField2:ПроизвольноеЗначение2>,...},...]
                    //Например:
                    //[{from:"ООО Ромашка", to:"ООО Рюмашка",distance:"904м"}, {from:"ООО Рога", to:"АОЗТ Копыта",distance:"9.8км"}]
    ...other
  }=props;

  return (
    <TableContainer component={Paper}>
      <Table {...other}>
        <TableHead>
          <TableRow>
            {columns.map(({name},i)=>(<TableCell key={i}>{name}</TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {columns.map(({objectField},j)=>(
                <TableCell key={`${i}_${j}`}>
                  {row[objectField]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BasicTable;
