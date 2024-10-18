import React, { useRef, useEffect, useState } from 'react';
import aws from './img/aws.webp'
import bootstrap from './img/bootstrap.webp'
import css from './img/css.webp'
import express from './img/express.webp'
import html from './img/html.webp'
import javascript from './img/js.webp'
import mongodb from './img/mongodb.webp'
import mongoose from './img/mongoose.webp'
import mysql from './img/mysql.webp'
import nodejs from './img/node.webp'
import postman from './img/postman.webp'
import react from './img/react.webp'
import tailwind from './img/tailwind.webp'
import vscode from './img/vscode.webp'


const tools = [
    { name: "AWS", logo: aws },
    { name: "Bootstrap", logo: bootstrap },
    { name: "CSS", logo: css },
    { name: "Express JS", logo: express },
    { name: "HTML", logo: html },
    { name: "JavaScript", logo: javascript },
    { name: "MongoDB", logo: mongodb },
    { name: "Mongoose", logo: mongoose },
    { name: "MySQL", logo: mysql },
    { name: "Node JS", logo: nodejs },
    { name: "Postman", logo: postman },
    { name: "React", logo: react },
    { name: "Tailwind", logo: tailwind },
    { name: "VS Code", logo: vscode },
];

const ToolsCovered = () => {
    const scrollRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollAmount = 150; // Adjust this value based on your card width

    const scrollToNext = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth',
            });
            setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
        }
    };

    const scrollToIndex = (index) => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: scrollAmount * index,
                behavior: 'smooth',
            });
            setCurrentIndex(index);
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scrollToNext();
        }, 3000); // Adjust the delay for automatic scrolling

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-white lg:px-32 mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-6">Tools Covered</h2>
            <div className="flex overflow-hidden space-x-4 pb-4" ref={scrollRef}>
                {tools.map((tool, index) => (
                    <div key={index} className="flex-shrink-0 h-32 w-32 flex flex-col items-center justify-center">
                        <img src={tool.logo} alt={tool.name} className="mb-2 " />
                       
                    </div>
                ))}
            </div>
            <div className="flex justify-center space-x-2 mt-4">
                {tools.slice(0, 4).map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'} hover:bg-gray-400 focus:outline-none`}
                        onClick={() => scrollToIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToolsCovered;
