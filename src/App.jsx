import "./App.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button'

function App() {
  return (
    <>
      <Box sx={{ backgroundColor: "#fff", display: 'flex', flexDirection: 'column' }}>
        <Typography color="#222">Formulário</Typography>
        <TextField />
        <TextField />
        <TextField />
        <Button variant="contained">Botão</Button>
      </Box>
    </>
  );
}

export default App;
