import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useContext } from "react";
import { TransactionsContext } from '../../TransactionsContext';


export function Summary() {
  const transaction = useContext(TransactionsContext);
  console.log(transaction)
  
  return (
   <Container>
    <div>
      <header>
        <p>Entradas</p>
        <img src={incomeImg} alt="Entradas" />
      </header>
      <strong> R$1.000,00</strong>
    </div>
    <div>
      <header>
        <p>Saídas</p>
        <img src={outcomeImg} alt="Saídas" />
      </header>
      <strong>- R$500,00</strong>
    </div>
    <div className="highlight-background">
      <header>
        <p>Saldo</p>
        <img src={totalImg} alt="Total" />
      </header>
      <strong> R$500,00</strong>
    </div>
   </Container>
  )
}