import {DeleteTransaction } from './styles'

import { Trash } from "phosphor-react";

export function DeleteTransactions() {
  function DeleteTransactions() {
    console.log('deletar')
   }

  return(
    <DeleteTransaction title="Deletar transação">
      <Trash size={25} onClick={DeleteTransactions} />
   </DeleteTransaction>
  )
}