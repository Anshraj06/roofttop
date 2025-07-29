import React from 'react';
import Ansh from './components/Ansh';
import Requestform from './components/Requestform';
import Navbar from './components/Navbar';
import About from './components/About';
import Contacts from './components/Contacts';
import Products from './components/Products';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './index.css';

function App() {
 
  return (
    
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Ansh />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Requestform />} />
         <Route path="/contacts" element={<Contacts />} />
         <Route path="/Products" element={<Products />} />
        
      </Routes>
    </Router>
      );
}

export default App;



