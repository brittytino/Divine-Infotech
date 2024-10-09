// src/components/Breadcrumb.jsx
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ items }) => {
    return (
        <div className='flex items-center text-sm max-w-7xl mx-auto mb-4'>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <p className={`font-medium ${item.isActive ? 'text-red-500' : 'text-gray-600'}`}>
                        {item.label}
                    </p>
                    {index < items.length - 1 && <FaChevronRight className='mx-2 text-gray-500' />}
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumb;
