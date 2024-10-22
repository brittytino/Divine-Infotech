// Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ initialTime, onExpire }) => {
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        let interval;
        if (time > 0) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 1) {
                        clearInterval(interval);
                        onExpire();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [time, onExpire]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div>
            <p className="text-2xl font-bold text-red-600">{formatTime(time)}</p>
        </div>
    );
};

export default Timer;
