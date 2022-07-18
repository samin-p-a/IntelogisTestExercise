import { ThemeProvider } from '@mui/material/styles';

import Panel from '../../UIComponents/Panel'
import Map from '../Map'
import Palette from '../../UIComponents/ResizebleDrawer'

import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Panel/>
      <Map/>
      <Palette/>
    </ThemeProvider>
  );
}

export default App;
