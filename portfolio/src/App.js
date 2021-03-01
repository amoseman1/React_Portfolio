import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/pages/Home";
import Resume from "./components/pages/Resume";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/resume" component={Resume} />

      </div>
    </Router>
  );
}

export default App;