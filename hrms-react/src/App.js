import "./App.css";
import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import Navi from "./layouts/NaviLayout/Navi";
import Dashboard from "./layouts/DashboardLayout/Dashboard";
import Footer from "./layouts/FooterLayout/Footer";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
