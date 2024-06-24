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

//UiUx  
import IntrotoUiux from './components/pages/IntrotoUiux';
import AdvanceUiux from './components/pages/AdvanceUiux';

//Python 
import PythonBeginner from './components/pages/PythonBeginner';
import DataanalysisPython from './components/pages/DataanalysisPython';
import WebdevPython from './components/pages/WebdevPython';
import AdvancePython from './components/pages/AdvancePython';
import FullstackPython from './components/pages/FullstackPython';

//Java Programming 
import JavaBeginner from './components/pages/JavaBeginner';
import JavamobilewebDev from './components/pages/JavamobilewebDev';
import AdvanceJava from './components/pages/AdvanceJava';

import ProgrammingFundamentals from './components/pages/ProgrammingFundamentals';
import Digitalmarketing from './components/pages/Digitalmarketing';
import PromptEngineering from './components/pages/PromptEngineering';
import Gitgithub from './components/pages/Gitgithub';



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
        <Route path='/IntrotoUiux' element={<IntrotoUiux />} />
        <Route path='/AdvanceUiux' element={<AdvanceUiux />} />
        <Route path='/PythonBeginner' element={<PythonBeginner />} />
        <Route path='/DataanalysisPython' element={<DataanalysisPython />} />
        <Route path='/WebdevPython' element={<WebdevPython />} />
        <Route path='/AdvancePython' element={<AdvancePython />} />
        <Route path='/FullstackPython' element={<FullstackPython />} />
        <Route path='/JavaBeginner' element={<JavaBeginner />} />
        <Route path='/JavamobilewebDev' element={<JavamobilewebDev />} />
        <Route path='/AdvanceJava' element={<AdvanceJava />} />
        <Route path='/ProgrammingFundamentals' element={<ProgrammingFundamentals />} />
        <Route path='/Digitalmarketing' element={<Digitalmarketing />} />
        <Route path='/PromptEngineering' element={<PromptEngineering />} />
        <Route path='/Gitgithub' element={<Gitgithub />} />


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
