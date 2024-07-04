import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Stats = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const stats = [
        { label: 'Clients', value: 200 },
        { label: 'Projects', value: 431 },
        { label: 'Hours of Support', value: 1263 },
        { label: 'Trainers', value: 16 }
    ];

    return (
        <div className=' px-4 mb-16 md:px-20'>        
        <div ref={ref} className="bg-gradient-to-r from-blue-600 to-blue-800     rounded-lg mt-10 py-14 px-10 md:px-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6  text-center text-white">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <h3 className="text-4xl font-bold">
                                {inView && <CountUp end={stat.value}  duration={3} />}
                            </h3>
                            <p className="mt-2 text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div></div> 
    );
}

export default Stats;
