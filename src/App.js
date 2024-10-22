import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import CoursesPage from './components/pages/Courses';
import Services from './components/Services';
import TermsAndConditions from './TermsAndConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import ContactServices from './components/ContactFormServices';

import CouponToast from './components/CouponToast';
import ReferralModal from './components/pages/ReferralModal';
import ToastPromotion from './components/ToastPromotion';

import WhatsAppWidget from './components/WhatsAppWidget';
import ServiceModal from './components/pages/ServiceModal';

// Initialize Google Analytics
import ReactGA from "react-ga4";

import ResumeBuildingPage from './components/pages/ResumeBuilding';
import ReferAndEarnToast from './components/ReferAndEarnToast';
import ContactForm from './components/ContactForm';
import CodeMasterBootcamp from './components/CodeMasterBootcamp';
import Fullstack from './components/pages/Fullstack';
import PythonDataScience from './components/pages/PythonDataScience';
import FlutterDev from './components/pages/FlutterDev';
import ErrorPage from './components/pages/ErrorPage'; // Import the ErrorPage component

ReactGA.initialize("G-YLX8WB7CZ2");

const AppContent = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Redirect to lowercase URL if needed
    useEffect(() => {
        const currentPath = location.pathname;
        const lowerCasePath = currentPath.toLowerCase();

        if (currentPath !== lowerCasePath) {
            navigate(lowerCasePath, { replace: true });
        }
    }, [location, navigate]);

    // Track page views for Google Analytics
    useEffect(() => {
        ReactGA.send({
            hitType: "pageview",
            page: location.pathname
        });
    }, [location]);

    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume-building" element={<ResumeBuildingPage />} />
                <Route path="/courses/fullstack" element={<Fullstack />} />
                <Route path="/courses/python-data-science" element={<PythonDataScience />} />
                <Route path="/courses/flutter-developer" element={<FlutterDev />} />
                <Route path="/codemaster-bootcamp" element={<CodeMasterBootcamp />} />
                <Route path="/contactform" element={<ContactForm />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/services" element={<Services />} />
                <Route path="/terms" element={<TermsAndConditions />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
                <Route path="/RefundPolicy" element={<RefundPolicy />} />
                <Route path="/contact" element={<ContactServices />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <ReferAndEarnToast />
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
