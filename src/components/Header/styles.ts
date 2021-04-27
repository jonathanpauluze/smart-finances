import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: var(--blue);
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    height: 3rem;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    font-size: 1rem;
    color: #FFF;
    background-color: var(--blue-light);
    transition: filter .2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;