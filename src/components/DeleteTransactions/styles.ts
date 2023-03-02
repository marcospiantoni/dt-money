import styled from "styled-components"

export const DeleteTransactions = styled.button`
color: var(--text-body);
background: transparent;
border: 0;
transition: 0.2s;

cursor: pointer;

&:hover {
  color: var(--red);
  padding: 5px;
  transition: 0.5s;
}
`