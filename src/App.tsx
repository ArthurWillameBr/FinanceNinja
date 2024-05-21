import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./themes/default";
import { GlobalStyle } from "./styles/global";
import { Transactions } from "./pages/transactions";
import { TransactionsProvider } from "./contexts/transactionsContext";

export function App() {
  return (
    <>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <TransactionsProvider>
        <Transactions/>
      </TransactionsProvider>
      </ThemeProvider>
    </>
  );
}
