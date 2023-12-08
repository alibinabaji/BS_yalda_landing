import React from 'react';
import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import './tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './component/footer/Footer'
function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Routes>
          <Footer/>
        </Router>
  );
}

export default App;
