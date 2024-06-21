import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import MernStack from './components/pages/MernStack';
import Footer from './components/Footer';
import FrontendEssentials from './components/pages/FrontendEssentials';
import CoursesPage from './components/pages/Courses';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MernStack" element={<MernStack />} />
        <Route path='/frontend' element={<FrontendEssentials />} />
        <Route path='/courses' element={<CoursesPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
