import styled from 'styled-components'

export const Container = styled.div`
 margin-top: 4rem;

 table {
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--white);
    color: var(--text-body);
    border-radius: 0.25rem;

    &:first-child {
      color: var(--text-title);
    }

    &.deposit {
      color: var(--green);
    }

    &.withdraw {
      color: var(--red);
    }
  }
 }
`

export const DeleteTranslations = styled.button`
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
