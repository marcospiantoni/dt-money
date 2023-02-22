import { useEffect, useState } from "react";
import { api } from "../../service/api";
import { Container } from "./styles";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

export function TransactionTable() {
 const [transaction, setTransaction] = useState<Transaction[]>([]);
 
 useEffect(() => {
  api.get('/transactions')
  .then(response => setTransaction(response.data.transactions))
 }, []);

  return  (
   <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
      { transaction.map(transaction => {
        return (
          <tr key={transaction.id}>
          <td>{transaction.title}</td>
          <td className={transaction.type}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(transaction.amount)}
          </td>
          <td>{transaction.category}</td>
          <td>
          {new Intl.DateTimeFormat('pt-BR').format(
             new Date(transaction.createdAt)
            )}
          </td>
        </tr>
        )
      })

      }
      </tbody>
    </table>
   </Container>
  );
}