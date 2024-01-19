import React, { ReactNode } from "react";
import styled from "styled-components";

// styled component
const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  padding: 1rem;
  width: 30rem;
  height: 35rem;
  color: #363535;
`;

interface ICard {
  children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

export default Card;
