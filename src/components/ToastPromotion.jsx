import React, { useEffect } from 'react';
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaCheckCircle } from 'react-icons/fa';

const names = ['Priya', 'Pravin', 'Tharun Sanjay', 'Vijay Kumar', 'Shivakumar'];
const courses = ['Full Stack Development', 'Tally', 'Azure Fundamentals', 'Advanced Stock Trading', 'Programming Fundamentals'];
const times = ['5 minutes ago', '30 minutes ago', '1 hour ago', '2 hours ago', '3 hours ago'];

const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

const ToastPromotion = () => {
  useEffect(() => {
    const showToast = () => {
      const name = getRandomElement(names);
      const course = getRandomElement(courses);
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
        }
      );
    };

    const initialDelay = setTimeout(showToast, 5000); // 5 seconds initial delay
    const intervalId = setInterval(showToast, 10000); // Show every 10 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, []);

  return <ToastContainer />;
};

export default ToastPromotion;
