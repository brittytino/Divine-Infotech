import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const modalShown = localStorage.getItem('modalShown');
    if (!modalShown) {
      setIsOpen(true);
      localStorage.setItem('modalShown', 'true');
    }
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
    document.getElementById('content').classList.remove('blurred-bg');
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementById('content').classList.add('blurred-bg');
    }
  }, [isOpen]);

  const content = [
    "Welcome to Divine Infotech. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions.",
    "We are committed to protecting your privacy. All personal data collected through our website will be processed in accordance with our Privacy Policy."
  ];

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-lg">
            <div className="flex items-center justify-between p-4 border-b rounded-t">
              <h3 className="text-xl font-semibold text-gray-900">Terms and Conditions</h3>
            </div>
            <div className="p-4 space-y-4">
              {content.map((text, index) => (
                <p key={index} className="text-base leading-relaxed text-gray-500">{text}</p>
              ))}
              <a href="/terms" target="_blank" className="text-blue-700 hover:underline">Read more</a>
            </div>
            <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
              <button onClick={handleAccept} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">I accept</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
