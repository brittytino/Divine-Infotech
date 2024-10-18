import React from 'react';
import CertificateImg from './img/certificate.png'
import { FaCaretRight } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const CertificateSection = () => {
    return (
        <div id='certificate' className="lg:w-3/4 py-12 px-4 sm:px-6 lg:px-40">
            {/* Heading Section */}
            <div className="py-5 pt-5">
                <h2 className="py-4 text-left font-bold text-black text-3xl md:text-4xl leading-tight">
                    Let Your
                    <span className="relative inline-block ml-2">
                        <span className="relative z-10 text-blue-600 mr-2">Certificates</span>
                        <span className="absolute inset-0 z-0 bg-blue-100 h-3 transform translate-y-2"></span>
                    </span>
                    Speak
                </h2>
            </div>

            {/* Certificate image and details section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side: Certificate image and shareable text */}
                <div>
                    <div className="flex justify-center">
                        <div className="border-2 border-gray-300 rounded-lg p-4 shadow-lg">
                            <img
                                src={CertificateImg}
                                alt="Certificate"
                                className="w-full  h-auto"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <p className="text-sm flex justify-center items-center text-gray-500">
                            Shareable on
                            <span className="ml-2 font-bold text-blue-700  text-xl">
                                <span className="flex items-center">
                                    LinkedIn <FaLinkedin className="inline-block text-2xl text-blue-700 ml-1" />
                                </span>
                            </span>
                        </p>
                    </div>
                </div>

                {/* Right side: Certificate details */}
                <div className="space-y-6 flex flex-col justify-center">
                    <div className="flex items-start">
                        <FaCaretRight className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-700">
                            Certificate Provided by MSME Verified Institution.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <FaCaretRight className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-700">
                            Certificates are globally recognized & they upgrade your programming profile.
                        </p>
                    </div>
                    <div className="flex items-start">
                        <FaCaretRight className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                        <p className="text-base text-gray-700">
                            Certificates are generated after the completion of course.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificateSection;
