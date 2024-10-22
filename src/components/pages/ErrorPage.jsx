import React from "react";
import { FaFlag, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function ErrorPage() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    // Scroll to the top before navigating
    window.scrollTo(0, 0);
    navigate("/"); // Navigates back to the home page
  };

  return (
    <div className="h-screen bg-[#f8fafc] flex flex-col justify-center items-center px-6 text-center">
      <div className="flex flex-col items-center">
        <FaFlag className="text-[#3B82F6] w-16 h-16" />
        <h1 className="mt-8 text-3xl font-bold text-gray-800 md:text-4xl">
          Error 404
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          It looks like something went wrong.
        </p>
        <p className="mt-2 text-sm text-gray-500 max-w-md">
          Don&apos;t worry, our team is already on it. Please try refreshing the page or come back later.
        </p>
        <button
          onClick={handleBackHome}
          className="mt-8 flex items-center justify-center gap-2 px-6 py-2 bg-[#2f75e6] text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          <FaHome className="text-white" />
          Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
