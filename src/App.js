import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Search} />
        <Route path="/about" component={About} />
        <Route path="/item/:id" component={Item} />
      </Routes>
    </Router>
  );
};

function Search() {
  return (
    <div>
      <nav>
        <Link to="me">This is search</Link>
      </nav>
    </div>
  );
}

function About() {
  return (
    <div>
      <nav>
        <Link to="me">This is about</Link>
      </nav>
    </div>
  );
}

function Item() {
  return (
    <div>
      <nav>
        <Link to="me">This is item</Link>
      </nav>
    </div>
  );
}

export default App;
