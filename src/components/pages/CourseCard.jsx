import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CourseCard = ({ course, index, selectedCategory }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2
    });
    const [showCouponInput, setShowCouponInput] = useState(false);
    const [couponCode, setCouponCode] = useState('');
    const [price, setPrice] = useState(course.price === 'Free' ? 'Free' : parseFloat(course.price.replace(/₹|,/g, '')));
    const [notification, setNotification] = useState('');
    const [isCouponApplied, setIsCouponApplied] = useState(false);
    const [isValidCoupon, setIsValidCoupon] = useState(true);

    const handleCouponApply = () => {
        const coupons = {
            'TRYNEW': 0.88,  // 12% discount
            'trynew': 0.88,
        };

        const specificCoupons = {
            'VAGAYARA2024': 0.75,  // 25% discount
            'vagayara2024': 0.75,
        };

        let discount = coupons[couponCode];

        if (course.title === 'Complete Full Stack Development' && !discount) {
            discount = specificCoupons[couponCode];
        }

        if (discount) {
            const discountedPrice = (price * discount).toFixed(2);
            setPrice(discountedPrice);
            setNotification(`Coupon applied successfully! You got ${(1 - discount) * 100}% discount.`);
            setIsCouponApplied(true);
            setIsValidCoupon(true);
        } else {
            setNotification('Invalid Coupon Code');
            setIsValidCoupon(false);
        }
    };

    return (
        <motion.div
            ref={ref}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.1 * index }}
        >
            <img className="w-full md:h-60 h-52 object-fill object-center" src={course.img} alt="Course Image" />
            <div className="p-6">
                <h2 className="md:text-xl text-lg font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-700 mb-4 text-xs md:text-base leading-relaxed">{course.description}</p>
                <div className="flex justify-between items-center">
                    <div className='flex gap-4'>
                        {course.oldFees && course.price !== 'Free' && (
                            <span className="md:text-lg text-base font-semibold text-blue-600 decoration-red-700 line-through">{course.oldFees}</span>
                        )}
                        {course.price === 'Free' ? (
                            <span className="md:text-lg text-base font-semibold text-blue-600">
                                Free
                            </span>
                        ) : (
                            <span className="md:text-lg text-base font-semibold text-blue-600">
                                ₹{price}
                            </span>
                        )}
                    </div>
                    {selectedCategory === "Best Selling" && !course.availability ? (
                        <div>
                            <a href={course.url}>
                                <button className="bg-gray-300 text-gray-600 py-2 px-2 lg:py-2 lg:px-4 rounded-md transition-all duration-300 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                    Show Syllabus
                                </button>
                            </a>
                            <p className="text-xs text-gray-500 mt-2">Coming Soon</p>
                        </div>
                    ) : selectedCategory === "Free courses" ? (
                        <div>
                            <p className="text-lg font-semibold text-gray-600 mt-2">Coming Soon</p>
                        </div>
                    ) : (
                        <a href={course.url}>
                            <button className="bg-blue-600 text-white py-2 px-2 md:py-2 md:px-4 rounded-md transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                Enroll Now
                            </button>
                        </a>
                    )}
                </div>
                {course.price !== 'Free' && !isCouponApplied && (
                    <div className="mt-2">
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => setShowCouponInput(!showCouponInput)}
                        >
                            Have a coupon?
                        </span>
                        {showCouponInput && (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    className="border border-gray-300 p-2 rounded-md w-full"
                                    placeholder="Enter coupon code"
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                />
                                <button
                                    className="bg-green-600 text-white py-2 px-4 mt-2 rounded-md transition-all duration-300 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                                    onClick={handleCouponApply}
                                >
                                    Apply
                                </button>
                            </div>
                        )}
                    </div>
                )}
                {notification && (
                    <p className={`mt-2 ${isValidCoupon ? 'text-green-600' : 'text-red-600'}`}>
                        {notification}
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default CourseCard;
