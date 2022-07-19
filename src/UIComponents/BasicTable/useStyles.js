import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'block',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1323,
    display:'none',
  },
}));

export default useStyles;
