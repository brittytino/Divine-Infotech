import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Fullstack from './components/pages/FullStackCoursePage';
import Footer from './components/Footer';
import PythonFullstack from './components/pages/PythonFullstack';
import DigitalMarketing from './components/pages/DigitalMarketing';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullstack" element={<Fullstack />} />
        <Route path="/pythondev" element={<PythonFullstack />} />
        <Route path="/digitalmarketing" element={<DigitalMarketing />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
