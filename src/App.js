// App.js

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import MernStack from './components/pages/MernStack';
import Footer from './components/Footer';
import CoursesPage from './components/pages/Courses';
import CompletefullStack from './components/pages/CompletefullStack';
import Androidappdev from './components/pages/Androidappdev';
import FundamentalsofgameDev from './components/pages/FundamentalsofgameDev';
import MasteringtallyprimewithGst from './components/pages/MasteringtallyprimewithGst';
import AdvancestockTrading from './components/pages/AdvancestockTrading';
import AdvanceUiux from './components/pages/AdvanceUiux';
import DataanalysisPython from './components/pages/DataanalysisPython';
import FullstackPython from './components/pages/FullstackPython';
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
import CouponToast from './components/CouponToast';
import Azurecloud from './components/pages/Azurecloud';

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tally" element={<Tallyfundamentals />} />
                <Route path='/CompletefullStack' element={<CompletefullStack />} />
                <Route path='/azurecloud' element={<Azurecloud />} />
                <Route path="/MernStack" element={<MernStack />} />
                <Route path='/courses' element={<CoursesPage />} />

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
                <Route path='/Services' element={<Services />} />
                <Route path='/terms' element={<TermsAndConditions />} />
                <Route path='/privacypolicy' element={<PrivacyPolicy />} />
                <Route path='/RefundPolicy' element={<RefundPolicy />} />
                <Route path='/contact' element={<ContactServices />} />
            </Routes>
            <CouponToast /> {/* Render CouponToast globally */}
            <Footer />
        </BrowserRouter>
    );
};

export default App;
