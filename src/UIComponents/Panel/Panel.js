import { AppBar, Toolbar, Typography, } from '@mui/material';

import useStyles from './useStyles'

const Panel=(props)=>{

  const classes = useStyles()

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} >
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          Тестовое задание для <a href="https://intelogis.ru/">intelogis.ru</a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Panel;
