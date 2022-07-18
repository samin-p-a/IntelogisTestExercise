import React, { useCallback } from "react";

import { Drawer, List, Divider, ListItem, ListItemIcon, ListItemText, } from '@mui/material';

import useStyles from './useStyles';

const ResizebleDrawer=(props)=>{
  const {
    minWidth=100,
    maxWidth=1000,
    content,
    //redux
    paletteWidth=240,
    setPaletteWidth=()=>{},
  } = props

  const classes = useStyles();

  const handleMouseDown = useCallback(e => {
    document.onmouseup = handleMouseUp;
    document.onmousemove = handleMouseMove;
  }, []);

  const handleMouseUp = useCallback(e => {
    document.onmouseup = null;
    document.onmousemove = null;
  }, []);

  const handleMouseMove = useCallback(e => {
    const newWidth = e.clientX - document.body.offsetLeft;
    if(newWidth < minWidth){
      setPaletteWidth(minWidth);
    }else if(newWidth > maxWidth){
      setPaletteWidth(maxWidth);
    }else{
      setPaletteWidth(newWidth);
    }
  }, []);

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      PaperProps={{ style: { width: paletteWidth } }}
    >
      <div className={classes.toolbar} />
      <div onMouseDown={e => handleMouseDown(e)} className={classes.dragger} />
      {content}
      <Divider />
    </Drawer>
  );
}

export default ResizebleDrawer;
