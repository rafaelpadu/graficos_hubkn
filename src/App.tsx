import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
