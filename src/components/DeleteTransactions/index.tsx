import {DeleteTransactions} from './styles'

import { Trash } from "phosphor-react";

export function DeleteTransaction() {
  return (
    <DeleteTransactions title="Deletar transação">
      <Trash size={25} onClick={DeleteTransactions} />
   </DeleteTransactions>
  )
}