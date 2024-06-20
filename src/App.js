import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import MernStack from './components/pages/MernStack';
import Footer from './components/Footer';
import PythonFullstack from './components/pages/PythonFullstack';
import DigitalMarketing from './components/pages/DigitalMarketing';
import FrontendEssentials from './components/pages/FrontendEssentials';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MernStack" element={<MernStack />} />
        <Route path="/pythondev" element={<PythonFullstack />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
        <Route path='/frontend' element={<FrontendEssentials/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
