import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai'; // Import React icon for close button
import { FaGift } from 'react-icons/fa6'; // Gift Icon
import { useNavigate } from 'react-router-dom';

const ReferAndEarnToast = () => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        navigate(path)
    }
    
    const [isVisible, setIsVisible] = useState(false);
    const [hasClosed, setHasClosed] = useState(false); // Track if the toast has been closed

    // Show the toast after a delay of 6 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!hasClosed) {
                setIsVisible(true);
            }
        }, 6000); // 6 seconds

        return () => clearTimeout(timer); // Clear timer on unmount
    }, [hasClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setHasClosed(true); // Mark the toast as closed
    };

    // Return null if the toast is closed
    if (hasClosed) return null;

    return (
        <div className={`fixed bottom-5 left-5 z-50 ${isVisible ? 'block' : 'hidden'}`}>
            <div className="bg-[#ffdf7f] hover:bg-[#ffdf6f] text-black p-3 md:p-4 pr-8 md:pr-10 rounded-lg shadow-lg flex items-center justify-between w-full max-w-md relative">
                
                {/* Close Button in the top-right corner */}
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 hover:text-gray-300 transition duration-200"
                >
                    <AiOutlineClose className="md:w-5 md:h-5 w-4 h-4 text-gray-800 hover:text-black " />
                </button>
                
                <div className="flex items-center space-x-4">
                    {/* Gift Box Icon with Bounce Effect */}
                    <div className="relative flex justify-center items-center animate-bounce text-blue-600">
                        <FaGift className="md:w-10 md:h-10 w-6 h-6" />
                    </div>

                    {/* Text Content */}
                    <div  onClick={() => handleNavigation('/contact')} className=' hover:cursor-pointer'>
                        <h3 className="text-sm md:text-lg font-semibold text-[#004da5]">Refer & Win <span>&gt;</span></h3>
                        <p className="text-xs md:text-sm">Premium Course</p>
                        <p className='text-xs md:text-sm'> worth <span className=' font-medium'> ₹15,000/-</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferAndEarnToast;
