import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="about" element={<About />} />
        <Route path="item/:id" element={<Item />} />
      </Routes>
    </BrowserRouter>
  );
}

function Search() {
  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}

function Item() {
  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

export default App;
