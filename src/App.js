import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';

import Nav from "./Components/Nav";
import Home from "./Views/Home";
import Products from './Views/Products';
import Contact from './Views/Contact';
import Footer from "./Components/Footer";
import Product from './Views/Product';
import Boards from './Products/Boards';
import ShortBoards from './Products/ShortBoards';
import LongBoards from './Products/LongBoards';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/boards" element={<Boards />} />
        <Route path="/short-boards" element={<ShortBoards />} />
        <Route path="/long-boards" element={<LongBoards />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
