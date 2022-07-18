import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  const {minHeight:space} = theme.mixins.toolbar;
  return {
    map: {
      position: "absolute",
      right:0,
      "&>.mapContainer":{
        position: "absolute",
        right:0,
        width:"100%",
        height: `calc(100vh - ${space}px)`,
        top:`${space}px`,

      }
    },
  }
});

export default useStyles;
