import "./App.css";
import Navi from "./layouts/NaviLayout/Navi";
import Dashboard from "./layouts/DashboardLayout/Dashboard";
import Footer from "./layouts/FooterLayout/Footer";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
        <Dashboard />
      </Container>
      <span>&nbsp;&nbsp;</span>
      <Footer />
    </div>
  );
}

export default App;
