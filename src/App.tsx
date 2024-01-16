import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import styled from "styled-components";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Idontknowyet from "./pages/Idontknowyet";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content:center;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Idontknowyet" element={<Idontknowyet />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

export default App;
