import React, { useState, useEffect } from 'react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../images/logo.png';
import ScrollToTop from './ScrollToTop';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [isSticky, setIsSticky] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setOpenNav(false);
  }

  const navItems = [
    { title: "HOME", href: "/" },
    { title: "COURSES", href: "/courses" },
    { title: "SERVICES", href: "/services" },
    { title: "TESTIMONIAL", href: "#testimonial" },
    { title: "", href: "#footer" },
    { title: "ABOUT", href: "#about" },
  ];

  const handleDropdownToggle = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-[#fafafc] shadow-md ${isSticky ? 'sticky top-0 z-50 transition-all  duration-300' : ''}`}>
      <div className="container mx-auto flex items-center  justify-between py-4 px-6 md:px-24">
        <div onClick={() => handleNavigation('/')} className="text-xl hover:cursor-pointer font-semibold flex items-center gap-2 text-[#272727]">
          <img src={Logo} alt="Divine Infotech Logo" className='h-14 md:h-16' />
          Divine Infotech
        </div>
        <div className="hidden lg:flex space-x-6 text-[#212832]">
          {navItems.slice(0, 5).map((item, index) => (
            item.items ? (
              <div key={index} className="relative">
                <button onClick={() => handleDropdownToggle(index)} className={`flex items-center transition-all ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-600'}`}>
                  {item.title}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === index ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === index && (
                  <div className="absolute mt-2 w-96 bg-white shadow-lg rounded-lg p-4 z-50">
                    <div className="grid grid-cols-2 gap-4">
                      {item.items.map((subItem, subIndex) => (
                        <a key={subIndex} href={subItem.href} className="block px-4 py-2 hover:bg-gray-100 text-gray-600 hover:text-black transition-all">
                          {subItem.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <a key={index} href={item.href} className={`transition-all ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
                {item.title}
              </a>
            )
          ))}
        </div>
        <div className="hidden lg:flex space-x-6 items-center">
          {navItems.slice(5).map((item, index) => (
            <a key={index} href={item.href} className={`transition-all ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}>
              {item.title}
            </a>
          ))}
         <button onClick={() => handleNavigation('/contact')} className="bg-blue-700 hover:bg-blue-800 py-2 px-4 rounded-md text-[#f8f8fd]">Contact</button>
        </div>
        <button className="lg:hidden" onClick={() => setOpenNav(!openNav)}>
          <MenuIcon className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>
      {openNav && (
        <div className="lg:hidden flex flex-col space-y-2 px-6 pb-4">
          {navItems.map((item, index) => (
            item.items ? (
              <div key={index}>
                <button onClick={() => handleDropdownToggle(index)} className={`flex items-center transition-all ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-500'}`}>
                  {item.title}
                  <ChevronDownIcon className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === index ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === index && (
                  <ul className="mt-2 bg-white shadow-lg rounded-lg">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex} className="hover:bg-gray-100">
                        <a href={subItem.href} className="block px-4 py-2 text-gray-900 hover:text-blue-500 transition-all">
                          {subItem.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a key={index} href={item.href} className={`transition-all ${location.pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-500'}`}>
                {item.title}
              </a>
            )
          ))}
        </div>
      )}
      <ScrollToTop />
    </nav>
  );
};

export default Navbar;
