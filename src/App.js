import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
        <ScrollToTop/>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" exact component={Home} />
          </Routes>
          </BrowserRouter>
     
  );
};

export default App;
