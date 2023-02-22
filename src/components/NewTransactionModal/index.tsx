import { FormEvent, useState } from 'react';
import { api } from '../../service/api';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/Income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles';



interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
 const [title, setTitle] = useState('')
 const [value, setValue] = useState(0)
 const [category, setCategory] = useState('')
 const [type, setType] = useState('deposit');

 function handleCreateTransaction(event: FormEvent) {
  event.preventDefault();

  const data = {
    title,
    value,
    category,
    type,
  }

  api.post('/transactions', data)
 }

  return (
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'>

  <button type='button'
          onClick={onRequestClose}>
    <img src={closeImg} className='react-modal-close'/>
  </button>
   <Container  onSubmit={handleCreateTransaction}>
     <h2> Cadastrar transação</h2>

     <input 
       placeholder='Título'
       value={title}
       onChange={event => setTitle(event.target.value)}
     />

     <input 
       type='number'
       placeholder='Valor'
       value={value}
       onChange={event => setValue(Number(event.target.value))}
     />

     <TransactionTypeContainer>
      <RadioBox 
          type='button'
          onClick={() => {setType('deposit')}}
          isActive={type === 'deposit'}
          activeColor='green'
      >
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </RadioBox>

      <RadioBox 
          type='button'
          onClick={() => {setType('withdraw')}}
          isActive={type === 'withdraw'}
          activeColor='red'
      >  
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </RadioBox>
     </TransactionTypeContainer>

     <input 
       placeholder='Categoria'
       value={category}
       onChange={event => setCategory(event.target.value)}
     />

     <button type="submit">
       Cadastrar
     </button>
    </Container>
  </Modal>
  )
}

