import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Logo from '../images/logo.png';
import ScrollToTop from './ScrollToTop'; // Assuming you have implemented ScrollToTop component

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const navItems = [
    { title: "Home", href: "#" },
    { title: "Courses", items: ["Fullstack Web Development", "Fullstack Python", "Game Development", "Digital Marketing", "Stock Market", "Java", "Fundamentals of Major Programming Languages", "Prompt Engineering", "Git and GitHub"] },
    { title: "Services", items: ["Web Development", "UI/UX Designing", "Data Analysis"] },
    { title: "Faculty", href: "#" },
    { title: "Support", href: "#" },
    { title: "About Us", href: "#about" },
    // { title: "Contact", href: "#" },
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#fafafc] shadow-md ${isSticky ? 'sticky top-0 z-50 transition-all duration-300' : ''}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 md:px-24">
        <a href="#" className="text-xl font-semibold flex items-center gap-2 text-[#272727]">
          <img src={Logo} alt="Divine Infotech Logo" className='h-14 md:h-16' />
          Divine Infotech
        </a>
        <div className="hidden lg:flex space-x-6 text-[#212832]">
          {navItems.slice(0, 5).map((item, index) => (
            item.items ? (
              <div key={index} className="relative">
                <button onClick={() => handleDropdownToggle(index)} className="flex items-center hover:text-[#453fe1] transition-all">
                  {item.title}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === index ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === index && (
                  <div className="absolute mt-2 w-72 bg-white shadow-lg rounded-lg p-4 z-50"> {/* Increased z-index */}
                    <div className="grid grid-cols-2 gap-4">
                      {item.items.map((subItem, subIndex) => (
                        <a key={subIndex} href="#" className="block px-4 py-2 text-gray-600 hover:text-[#453fe1] transition-all">
                          {subItem}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a key={index} href={item.href} className="text-gray-600 hover:text-[#453fe1] transition-all">
                {item.title}
              </a>
            )
          ))}
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          {navItems.slice(5).map((item, index) => (
            <a key={index} href={item.href} className="text-gray-600 hover:text-blue-500 transition-all">
              {item.title}
            </a>
          ))}
          <button className="bg-[#453fe1] py-2 px-4 rounded-md text-[#f8f8fd]">Contact</button>
        </div>
        <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          {openNav ? <XMarkIcon className="h-6 w-6" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6" strokeWidth={2} />}
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden flex flex-col space-y-2 px-6 pb-4">
          {navItems.map((item, index) => (
            item.items ? (
              <div key={index}>
                <button onClick={() => handleDropdownToggle(index)} className="flex items-center text-gray-900 hover:text-blue-500 transition-all">
                  {item.title}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === index ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === index && (
                  <ul className="mt-2 bg-white shadow-lg rounded-lg">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-100">
                        <a href="#" className="block px-4 py-2 text-gray-900 hover:text-blue-500 transition-all">
                          {subItem}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a key={index} href={item.href} className="text-gray-900 hover:text-blue-500 transition-all">
                {item.title}
              </a>
            )
          ))}
        </div>
      )}
      <ScrollToTop /> {/* Assuming you have implemented ScrollToTop component */}
    </nav>
  );
};

export default Navbar;
