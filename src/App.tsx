import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/transactions";

export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
        <Transactions/>
      </ThemeProvider>
    </>
  );
}
