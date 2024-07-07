import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CouponToast = () => {
    useEffect(() => {
        // Display first coupon after component mounts
        setTimeout(() => {
            toast.info(
                <div>
                    Use coupon code <span className="text-green-500 font-semibold">"TRYNEW"</span> for a 12% discount! (Only for first 5 Enrolls)
                </div>,
                {
                    position: "top-right",
                    autoClose: 10000, // Close after 10 seconds
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    icon: <div className="text-green-500 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>,
                }
            );
        }, 2000); // Display after 2 seconds

        // Display second coupon after a delay
        // setTimeout(() => {
        //     toast.info(
        //         <div>
        //             Use coupon code <span className="text-purple-500 font-semibold">"DIVINE30"</span> for a 30% discount!
        //         </div>,
        //         {
        //             position: "top-right",
        //             autoClose: 10000, // Close after 10 seconds
        //             hideProgressBar: false,
        //             closeOnClick: true,
        //             pauseOnHover: true,
        //             draggable: true,
        //             progress: undefined,
        //             icon: <div className="text-purple-400 mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div>,
        //         }
        //     );
        // }, 13000); // Display after 13 seconds (slightly adjusted for better timing)

    }, []);

    return (
        <ToastContainer
            position="top-right"
            autoClose={10000} // Adjusted to 10 seconds for consistency
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            style={{ width: '350px', fontSize: '14px', marginTop: '20px' }} // Adjust width, font size, and add margin top
            bodyClassName="text-sm" // Improve readability by reducing font size
        />
    );
};

export default CouponToast;
