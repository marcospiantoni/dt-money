import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/Income.svg';
import outcomeImg from '../../assets/outcome.svg';
import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
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
   <Container>
     <h2> Cadastrar transação</h2>

     <input 
       placeholder='Título'
     />

     <input 
       type='number'
       placeholder='Valor'
     />

     <TransactionTypeContainer>
      <button 
          type='button'
      >
        <img src={incomeImg} alt="Entrada" />
        <span>Entrada</span>
      </button>

      <button 
          type='button'
      >  
        <img src={outcomeImg} alt="Saída" />
        <span>Saída</span>
      </button>
     </TransactionTypeContainer>

     <input 
       placeholder='Categoria'
     />

     <button type="submit">
       Cadastrar
     </button>
    </Container>
  </Modal>
  )
}

