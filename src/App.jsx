import CssBaseline from "@mui/material/CssBaseline";
import { Board } from "./Pages/Board";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { Form } from "./Pages/Form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Board />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
