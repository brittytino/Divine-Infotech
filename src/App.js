import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import MernStack from './components/pages/MernStack';
import Footer from './components/Footer';
import CoursesPage from './components/pages/Courses';
import FrontendEssentials from './components/pages/FrontendEssentials';
import HtmlCssJs from './components/pages/HtmlcssJs';
import CompletefullStack from './components/pages/CompletefullStack';
import MeanStack from './components/pages/MeanStack';

//app dev
import IntrotomobileappDev from './components/pages/IntrotomobileappDev';
import Androidappdev from './components/pages/Androidappdev';
import CrossplatformappDev from './components/pages/CrossplatformappDev';

//game dev
import FundamentalsofgameDev from './components/pages/FundamentalsofgameDev';
import GamePhysicsAI from './components/pages/GamephysicAi';
import MobilegamedevMastery from './components/pages/MobilegamedevMastery';

//Tally 
import Tallyfundamentals from './components/pages/Tallyfundamentals';
import MasteringtallyprimewithGst from './components/pages/MasteringtallyprimewithGst';


//Stock market 
import IntrotoStockmarketinvesting from './components/pages/IntrotoStockmarketinvesting';
import AnalysisforInvestor from './components/pages/Fundamental&Technicalanalysisforinvestor';
import AdvancestockTrading from './components/pages/AdvancestockTrading';



const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MernStack" element={<MernStack />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/FrontendEssentials' element={<FrontendEssentials />} />
        <Route path='/HtmlCssJs' element={<HtmlCssJs />} />
        <Route path='/CompletefullStack' element={<CompletefullStack />} />
        <Route path='/MeanStack' element={<MeanStack />} />
        <Route path='/IntrotomobileappDev' element={<IntrotomobileappDev />} />
        <Route path='/Androidappdev' element={<Androidappdev />} />
        <Route path='/CrossplatformappDev' element={<CrossplatformappDev />} />
        <Route path='/FundamentalsofgameDev' element={<FundamentalsofgameDev />} />
        <Route path='/GamePhysicsAI' element={<GamePhysicsAI />} />
        <Route path='/MobilegamedevMastery' element={<MobilegamedevMastery />} />
        <Route path='/Tallyfundamentals' element={<Tallyfundamentals />} />
        <Route path='/MasteringtallyprimewithGst' element={<MasteringtallyprimewithGst />} />
        <Route path='/IntrotoStockmarketinvesting' element={<IntrotoStockmarketinvesting />} />
        <Route path='/AnalysisforInvestor' element={<AnalysisforInvestor />} />
        <Route path='/AdvancestockTrading' element={<AdvancestockTrading />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
