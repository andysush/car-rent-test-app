import styled from '@emotion/styled';

export const GridContainer = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0;
  margin-bottom: 100px;
`;

export const LoadBtn = styled.button`
  display: flex;
  width: 140px;
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  color: #3470ff;
  border-radius: 12px;
  background-color: transparent;
  border-color: transparent;
  margin: 0 auto;
  cursor: pointer;
  margin-bottom: 40px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    color: white;
    background-color: #3470ff;
  }

  :disabled {
    display: none;
  }
`;
