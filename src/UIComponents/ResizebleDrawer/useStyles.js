import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  drawer: {
    flexShrink: 0,
    zIndex:theme.zIndex.drawer,
  },
  toolbar: theme.mixins.toolbar,
  dragger: {
    userSelect:"none",
    width: "5px",
    cursor: "ew-resize",
    padding: "4px 0 0",
    borderTop: "1px solid #ddd",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 100,
    backgroundColor: "#f5f5f5"
  }
}));

export default useStyles;
