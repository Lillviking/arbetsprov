import styled from 'styled-components';

export const GlobalButton = styled.button`
  background-color: #333333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  margin: 1rem;

  &:hover {
    background-color: #1a1a1a;
  }
`;

export const FlexContainerRow = styled.div`
    display: flex;
    flex-direction: row;
`;