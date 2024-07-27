import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';

// Fixed names, courses, and times
const toastMessages = [
  { name: 'Sudharshini', course: 'Advanced Stock Trading', time: '20 minutes ago' },
  { name: 'Vishal', course: 'Full Stack Development', time: '30 minutes ago' },
  { name: 'Raghul', course: 'Python for Beginners', time: '10 minutes ago' },
  { name: 'Arun Kumar', course: 'Full Stack Development', time: '2 days ago' }
];

const ToastPromotion = () => {
  const [toastIndex, setToastIndex] = useState(0);
  const isToastVisible = useRef(false);

  const showToast = () => {
    const { name, course, time } = toastMessages[toastIndex];

    toast(
      <div className="flex items-center">
        <FaCheckCircle className="text-green-500 mr-2" />
        <div>
          <p className="font-semibold">{name} purchased {course}</p>
          <p className="text-sm text-gray-500">{time}</p>
        </div>
      </div>,
      {
        className: 'bg-white text-black border border-gray-300 shadow-lg',
        position: "bottom-left",
        autoClose: 5000,
        transition: Slide,
        onClose: handleToastClose,
      }
    );

    isToastVisible.current = true;
  };

  const handleToastClose = () => {
    isToastVisible.current = false;
    setToastIndex(prevIndex => (prevIndex + 1) % toastMessages.length);
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      if (!isToastVisible.current) {
        showToast();
      }
    }, 5000); // 5 seconds initial delay

    const intervalId = setInterval(() => {
      if (!isToastVisible.current) {
        showToast();
      }
    }, 10000); // 10 seconds interval

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, [toastIndex]);

  return <ToastContainer />;
};

export default ToastPromotion;
