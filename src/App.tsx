import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";

import Details from "./pages/Details";
import Home from "./pages/Home";
import Idontknowyet from "./pages/Idontknowyet";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<Details />} />
          <Route path="/Idontknowyet" element={<Idontknowyet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
