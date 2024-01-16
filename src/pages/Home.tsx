import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/card";

const Pages = styled.button`
  color: #363535;
  margin-top: 5%;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
`;

const Home = () => {
    return (
      <>
        <Card> <h1>This is the card</h1>        
		<Link to="/details">
          <Pages>Details</Pages>
        </Link>
        <Link to="/Idontknowyet">
          <Pages>I don't know yet</Pages>
        </Link>
		</Card>

        <Outlet />
      </>
    );
  };

export default Home;  