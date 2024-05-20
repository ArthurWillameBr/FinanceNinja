import { Header } from "../../components/Header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./components/SearchForm";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <>
      <Header />
      <Summary />
      
      <TransactionsContainer>
      <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>

              <td>Venda</td>
              <td>20/05/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>20/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </>
  );
}
