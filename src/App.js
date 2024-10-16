import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import CoursesPage from './components/pages/Courses';
import CompletefullStack from './components/pages/CompletefullStack';
import AdvancestockTrading from './components/pages/AdvancestockTrading';
import ProgrammingFundamentals from './components/pages/ProgrammingFundamentals';
import Services from './components/Services';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ContactServices from './components/ContactFormServices';
import Tallyfundamentals from './components/pages/Tallyfundamentals';
import CouponToast from './components/CouponToast';
import ReferralModal from './components/pages/ReferralModal';
import ToastPromotion from './components/ToastPromotion';

import WhatsAppWidget from './components/WhatsAppWidget';
import ServiceModal from './components/pages/ServiceModal';

// Initialize Google Analytics
import ReactGA from "react-ga4";
import Aptitude from './components/pages/Aptitude';
import Digitalmarketing from './components/pages/Digitalmarketing';

import ResumeBuildingPage from './components/pages/ResumeBuilding';
import ReferAndEarnToast from './components/ReferAndEarnToast';
import ContactForm from './components/ContactForm';
import CodeMasterBootcamp from './components/CodeMasterBootcamp';
import Fullstack from './components/pages/Fullstack';

ReactGA.initialize("G-YLX8WB7CZ2");

const AppContent = () => {
    const location = useLocation();

    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname
        });
    }, [location]);

    // Function to determine if CouponToast should be displayed
    const shouldDisplayCouponToast = () => {
        return location.pathname !== '/services';
    };

    // Function to determine if ReferralModal should be displayed
    const shouldDisplayReferralModal = () => {
        return location.pathname !== '/services';
    };

    // Function to determine if ToastPromotion should be displayed
    const shouldDisplayToastPromotion = () => {
        return location.pathname !== '/services';
    };

    // Function to determine if ServiceModal should be displayed on the home page
    const shouldDisplayServiceModal = () => {
        return location.pathname === '/';
    };

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume-building" element={<ResumeBuildingPage />} />
                <Route path="/Fullstack" element={<Fullstack />} />
              
                <Route path="/codemaster-bootcamp" element={<CodeMasterBootcamp />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/tally" element={<Tallyfundamentals />} />
                <Route path="/AdvancestockTrading" element={<AdvancestockTrading />} />
                <Route path="/CompletefullStack" element={<CompletefullStack />} />
                <Route path="/ProgrammingFundamentals" element={<ProgrammingFundamentals />} />
                <Route path="/digital-marketing" element={<Digitalmarketing />} />

                <Route path="/Aptitude" element={<Aptitude />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                <Route path="/contact" element={<ContactServices />} />
            </Routes>
            <ReferAndEarnToast/>
            {/* {shouldDisplayCouponToast() && <CouponToast />}
            {shouldDisplayReferralModal() && <ReferralModal />}
            {shouldDisplayToastPromotion() && <ToastPromotion />}
            {shouldDisplayServiceModal() && <ServiceModal />} */}
            <WhatsAppWidget />
            <Footer />
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
};

export default App;
