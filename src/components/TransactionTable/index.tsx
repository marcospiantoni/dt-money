import { useEffect } from "react";
import { api } from "../../service/api";
import { Container } from "./styles";

export function TransactionTable() {
 useEffect(() => {
  api.get('/transactions')
  .then(response => console.log(response.data))
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
        <tr>
          <td>Desenvolvimento de web site</td>
          <td className="deposit">12.000</td>
          <td>Desenvovimento</td>
          <td>20/02/2023</td>
        </tr>
        <tr>
          <td>Aluguel</td>
          <td className="withdraw">-1.200</td>
          <td>Casa</td>
          <td>17/02/2023</td>
        </tr>
      </tbody>
    </table>
   </Container>
  );
}