import closeImg from '../../assets/close.svg';
import styled from "styled-components";
import { darken } from 'polished';

export const Container = styled.form`
h2 {
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

input {
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border-radius: 0.25rem;

  border: 1px solid var(--input-border);
  background: var(--input-background);

  font-weight: 400;
  font-size: 1rem;

  &::placeholder {
    color: var(--text-body);
  }

  & + input {
    margin-top: 1rem;
  }
}

  button[type='submit'] {
   width: 100%;
   padding: 0 1.5rem;
   height: 4rem;
   background: var(--green);
   color: var(--white);
   border-radius: 0.25rem;
   border: 0;
   font-size: 1rem;
   margin-top: 1.5rem;
   font-weight: 600;

   transition: filter 0.3;

   &:hover {
    filter: brightness(0.8);
   }
}
`

export const TransactionTypeContainer = styled.div`
 margin: 1rem;
 display: grid;
 grid-template-columns: 1fr 1fr;
 gap: 0.5rem;

 button {
  height: 4rem;
  border: 1px solid #D7D7D7;
  
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.3;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')} ;
  }
 }

 img {
  width: 20px;
  height: 20px;
 }

 span {
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--text-title);
 }
`
