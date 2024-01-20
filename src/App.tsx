import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import styled from "styled-components";
import { WeatherDataProvider } from "./context/WeatherDataContext";
import Details from "./pages/Details";
import Home from "./pages/Home";
import ChangePlace from "./pages/ChangePlace";
import { CoordinateDataProvider } from "./context/CoordinateDataContext";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <WeatherDataProvider>
        <CoordinateDataProvider>
        {" "}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/changePlace" element={<ChangePlace />} />
          </Routes>
        </Router>
        </CoordinateDataProvider>
      </WeatherDataProvider>
    </AppContainer>
  );
};

export default App;
