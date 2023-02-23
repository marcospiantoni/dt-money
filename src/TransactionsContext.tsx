import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './service/api';

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext<Transaction[]>([])

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transaction, setTransaction] = useState<Transaction[]>([]);
 
  useEffect(() => {
   api.get('/transactions')
   .then(response => setTransaction(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={transaction}>
      {children}
    </TransactionsContext.Provider>
  )
}