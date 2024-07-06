import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import MernStack from './components/pages/MernStack';
import Footer from './components/Footer';
import CoursesPage from './components/pages/Courses';
import CompletefullStack from './components/pages/CompletefullStack';


//app dev
import Androidappdev from './components/pages/Androidappdev';

//game dev
import FundamentalsofgameDev from './components/pages/FundamentalsofgameDev';

//Tally 
import MasteringtallyprimewithGst from './components/pages/MasteringtallyprimewithGst';


//Stock market 
import AdvancestockTrading from './components/pages/AdvancestockTrading';

//UiUx  
import AdvanceUiux from './components/pages/AdvanceUiux';

//Python 
import DataanalysisPython from './components/pages/DataanalysisPython';
import FullstackPython from './components/pages/FullstackPython';

//Java Programming 

import AdvanceJava from './components/pages/AdvanceJava';

import ProgrammingFundamentals from './components/pages/ProgrammingFundamentals';
import Digitalmarketing from './components/pages/Digitalmarketing';
import PromptEngineering from './components/pages/PromptEngineering';
import Gitgithub from './components/pages/Gitgithub';
import Aptitude from './components/pages/Aptitude';
import Services from './components/Services';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ContactServices from './components/ContactFormServices';
import Tallyfundamentals from './components/pages/Tallyfundamentals';



const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/tally" element={<Tallyfundamentals />} />
        <Route path="/MernStack" element={<MernStack />} />
        <Route path='/courses' element={<CoursesPage />} />
        <Route path='/CompletefullStack' element={<CompletefullStack />} />
        <Route path='/Androidappdev' element={<Androidappdev />} />
        <Route path='/FundamentalsofgameDev' element={<FundamentalsofgameDev />} />
        <Route path='/MasteringtallyprimewithGst' element={<MasteringtallyprimewithGst />} />
        <Route path='/AdvancestockTrading' element={<AdvancestockTrading />} />
        <Route path='/AdvanceUiux' element={<AdvanceUiux />} />
        <Route path='/DataanalysisPython' element={<DataanalysisPython />} />
        <Route path='/FullstackPython' element={<FullstackPython />} />
        <Route path='/AdvanceJava' element={<AdvanceJava />} />
        <Route path='/ProgrammingFundamentals' element={<ProgrammingFundamentals />} />
        <Route path='/Digitalmarketing' element={<Digitalmarketing />} />
        <Route path='/PromptEngineering' element={<PromptEngineering />} />
        <Route path='/Gitgithub' element={<Gitgithub />} />
        <Route path='/Aptitude' element={<Aptitude />} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='/terms' element={<TermsAndConditions/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/RefundPolicy' element={<RefundPolicy/>}/>
        <Route path='/contact' element={<ContactServices/>}/>


      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
