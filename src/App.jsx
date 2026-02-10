import CssBaseline from '@mui/material/CssBaseline';
import { Board } from "./Pages/Board";
import { ThemeProvider } from '@mui/material'
import theme from './theme'

function App() {
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Board />
    </ThemeProvider>
  );
}

export default App;
