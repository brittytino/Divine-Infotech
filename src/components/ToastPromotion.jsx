import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';

// Mapping names to specific courses
const nameCourseMap = {
  'Vishal': 'Full Stack Development',
  'Nithika': 'Tally',
  'Sivasudhan': 'Azure Fundamentals',
  'Sudharshini': 'Advanced Stock Trading',
  'Sathyasri': 'Programming Fundamentals',
  'Ranganathan': 'Data Science',
  'Anselm Jochim': 'Machine Learning',
  'Infant Andrew': 'Cyber Security',
  'Joyel': 'Cloud Computing',
  'Mohammad Muzzambil': 'Web Development',
  'Althaf': 'Data Analytics'
};

const times = ['10 minutes ago', '40 minutes ago', '1 day ago', '2 days ago', '3 hours ago'];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ToastPromotion = () => {
  const [toastQueue, setToastQueue] = useState([]);
  const isToastVisible = useRef(false);

  const showToast = () => {
    const name = getRandomElement(Object.keys(nameCourseMap));
    const course = nameCourseMap[name];
    const time = getRandomElement(times);

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
        onClose: () => handleToastClose(),
      }
    );

    isToastVisible.current = true;
  };

  const handleToastClose = () => {
    isToastVisible.current = false;
    if (toastQueue.length > 0) {
      setToastQueue(prevQueue => prevQueue.slice(1));
    }
  };

  useEffect(() => {
    if (!isToastVisible.current && toastQueue.length > 0) {
      showToast();
    }
  }, [toastQueue]);

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setToastQueue(prevQueue => [...prevQueue, {}]);
    }, 5000); // 5 seconds initial delay

    const intervalId = setInterval(() => {
      setToastQueue(prevQueue => [...prevQueue, {}]);
    }, 10000); // Add to queue every 10 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);

  return <ToastContainer />;
};

export default ToastPromotion;
