import { Trash } from "phosphor-react";
import CodeSimple from "phosphor-react/dist/icons/CodeSimple";
import { useTransactions } from "../../hooks/useTransactions";
import { Container, DeleteTranslations } from "./styles";

export function TransactionTable() {
 const { transactions } = useTransactions()

 function DeleteTranslation() {
  console.log('deletar')
 }

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
      { transactions.map(transaction => {
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
          <td>
          <DeleteTranslations title="Deletar transação">
              <Trash size={25} onClick={DeleteTranslation} />
          </DeleteTranslations>
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