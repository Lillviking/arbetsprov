import React, { ReactNode } from "react";
import styled from "styled-components";

// styled component
const StyledCard = styled.div`
    background-color: #fff;
    border-radius: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    margin: 1rem;
    padding: 1rem;
    width: 50%;
    height: 70%;
    color: #363535;
`;

interface ICard {
    children: ReactNode;
}

const Card: React.FC<ICard> = ({ children }) => {
    return (
        <StyledCard>{children}</StyledCard>
    );
  };

export default Card;  