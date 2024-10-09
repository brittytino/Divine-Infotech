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
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ContactServices from './components/ContactFormServices';
import Tallyfundamentals from './components/pages/Tallyfundamentals';
import CouponToast from './components/CouponToast';
import ReferralModal from './components/pages/ReferralModal';
import ToastPromotion from './components/ToastPromotion';
import Azurecloud from './components/pages/Azurecloud';
import WhatsAppWidget from './components/WhatsAppWidget';


// Initialize Google Analytics
import ReactGA from "react-ga4";
import Aptitude from './components/pages/Aptitude';
import Digitalmarketing from './components/pages/Digitalmarketing';
import PythonFullstack from './components/pages/PythonFullstack';
import ResumeBuildingPage from './components/pages/ResumeBuilding';
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

   

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tally" element={<Tallyfundamentals />} />
                <Route path="/resume-building" element={<ResumeBuildingPage />} />
                <Route path="/AdvancestockTrading" element={<AdvancestockTrading />} />
                <Route path="/CompletefullStack" element={<CompletefullStack />} />
                <Route path="/azurecloud" element={<Azurecloud />} />
                <Route path="/ProgrammingFundamentals" element={<ProgrammingFundamentals />} />
                <Route path="/digital-marketing" element={<Digitalmarketing />} />
                <Route path="/python-full-stack" element={<PythonFullstack />} />
                <Route path="/Aptitude" element={<Aptitude />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                <Route path="/contact" element={<ContactServices />} />
            </Routes>
            {/* {shouldDisplayCouponToast() && <CouponToast />} */}
            {/* {shouldDisplayReferralModal() && <ReferralModal />} */}
            {/* {shouldDisplayToastPromotion() && <ToastPromotion />} */}
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
