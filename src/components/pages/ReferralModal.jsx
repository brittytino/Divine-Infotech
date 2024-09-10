import React, { useState, useEffect } from 'react';
import { FaTimes, FaGift } from 'react-icons/fa';

const ReferralModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 6000); // Show modal after 6 seconds
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          onClick={closeModal}
        >
          <FaTimes size={24} />
        </button>
        <div className="flex items-center mb-4">
          <FaGift className="text-blue-600 text-3xl mr-3" />
          <h2 className="text-2xl font-semibold">Refer a Friend & Get 25% Cashback!</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Refer your friends to purchase our courses and enjoy a 25% cashback !
           It's a win-win for both of you!
        </p>
        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={closeModal}
        >
          Got it!
        </button>
      </div>
    </div>
  );
};

export default ReferralModal;
