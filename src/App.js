import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Search from "./components/Search";
import About from "./components/About";
import Item from "./components/Item";

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

export default App;
