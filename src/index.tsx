import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model} from 'miragejs'
import { App } from './App'

createServer({
  models: {
    transaction: Model,
  },
  
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
        id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2023-02-20 11:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1500,
          createdAt: new Date('2023-02-22 09:00:00'),
        },
      ],
    })
  },

  routes() {
    this.namespace = 'api';

      this.get('/transactions', () => {
      return this.schema.all('transaction')
    })
      this.post('/transactions', (schama, request) => {
      const data = JSON.parse(request.requestBody)

      return schama.create('transaction', data)
   })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
