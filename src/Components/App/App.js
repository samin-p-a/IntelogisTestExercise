import { ThemeProvider } from '@mui/material/styles';

import Panel from '../../UIComponents/Panel'
import DataPalete from '../DataPalete'
import Map from '../Map'

import theme from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Panel/>
      <Map/>
      <DataPalete/>
    </ThemeProvider>
  );
}

export default App;
