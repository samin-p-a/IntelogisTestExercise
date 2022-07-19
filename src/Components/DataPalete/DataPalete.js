import { useEffect } from 'react';
import { CircularProgress, Box, Tooltip, IconButton, } from '@mui/material';
// import Box from '@mui/material/Box';

import PinDropIcon from '@mui/icons-material/PinDrop'; //иконка для кнопки "показать на карте"
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'; //иконка для кнопки добавить строку
import EngineeringIcon from '@mui/icons-material/Engineering'; //иконка для столбца "действия"
import StartIcon from '@mui/icons-material/Start'; //иконка для столбца пункта from
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab'; //иконка для столбца пункта from

import BasicSelect from '../../UIComponents/BasicSelect'
import BasicTable from '../../UIComponents/BasicTable'
import ResizebleDrawer from '../../UIComponents/ResizebleDrawer'

import useStyles from './useStyles'


const columns=[
  {name:<Tooltip title="Откуда"><StartIcon/></Tooltip>, objectField:"from"},
  {name:<Tooltip title="Куда"><KeyboardTabIcon/></Tooltip>, objectField:"to"},
  {name:<Tooltip title="Действия"><EngineeringIcon/></Tooltip>, objectField:"action"}
];

function DataPalete(props) {
  const {

    //dispatch
    setDeliveryRequests,
    setSelectedDeliveryRequest,
    //redux
    getPoints=()=>{},
    getDeliveryRequests=()=>{},
    points,
    deliveryRequests,
    selectedDeliveryRequest:sDR,
  } = props;

  useEffect(()=>{
    //запрашиваем данные для построения таблицы
    getPoints();
    getDeliveryRequests();
  },[])

  const setStartPoint=(index,value)=>{
    //обновляет в редаксе в массиве маршрутов значения пункта отправления у элемента index
    const updatedDeliveryRequests=deliveryRequests.map((item, i)=>(i===index?{...item, from:value}:item))
    setDeliveryRequests(updatedDeliveryRequests);
  }

  const setEndPoint=(index,value)=>{
    //обновляет в редаксе в массиве маршрутов значения пункта назначения у элемента index
    const updatedDeliveryRequests=deliveryRequests.map((item, i)=>(i===index?{...item, to:value}:item))
    setDeliveryRequests(updatedDeliveryRequests);
  }

  const addNewRequest=()=>{
    //Добавляет новую строку в таблицу
    const updatedDeliveryRequests=[...deliveryRequests, {from:'',to:''}];
    setDeliveryRequests(updatedDeliveryRequests);
  }

  const showOnMap=(index)=>{
    //Проверяем что уже показана эта заявка
    if(index===sDR){
      //в этом случае отменяем ее показ
      setSelectedDeliveryRequest(undefined);
    }else{
      //иначе показываем ее
      setSelectedDeliveryRequest(index);
    }
  }

  let content;
  if(points && deliveryRequests){
    //данные есть - отдаем таблицу с ними
    //преобразуем массив заявок в данные для строки
    const data = deliveryRequests.map(({from, to}, i)=>(
      {
        from:(
          <BasicSelect
            label="Из"
            options={points}
            value={from}
            onChange={(val)=>setStartPoint(i,val)}
            />
        ),
        to:(
          <BasicSelect
            label="В"
            options={points}
            value={to}
            onChange={(val)=>setEndPoint(i,val)}
            />
        ),
        action:(
          <Tooltip title={i===sDR?"Скрыть на карте":"Показать на карте"}>
            <IconButton onClick={()=>showOnMap(i)} color={i===sDR?"secondary":"default"}>
              <PinDropIcon/>
            </IconButton>
          </Tooltip>
        ),
      }
    ))
    //отдельным пунктом создаем строку для добавления новой заявки
    const addString = {
      from:'',
      to:'',
      action:(
        <Tooltip title="Новая заявка">
          <IconButton onClick={addNewRequest} color="primary">
            <AddCircleOutlineIcon/>
          </IconButton>
        </Tooltip>
      ),
    }
    //Ну и формируем правильную таблицу
    content=<BasicTable columns={columns} data={[...data, addString]}/>

  }else{
    //Данных еще нет - отдаем спиннер
    content = (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <ResizebleDrawer
    content={content}
    />
  );
}

export default DataPalete;
