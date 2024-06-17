import React, { useState } from 'react';
import { Menu, MenuHandler, MenuList, MenuItem, Typography } from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const NavDropdown = ({ title, items }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-start" allowHover={true}>
        <MenuHandler>
          <Typography as="div" className="cursor-pointer text-gray-900 hover:text-blue-500 transition-all flex items-center">
            {title}
            <ChevronDownIcon className={`ml-1 h-4 w-4 ${isMenuOpen ? "rotate-180" : ""}`} />
          </Typography>
        </MenuHandler>
        <MenuList className="p-2 shadow-lg rounded-lg bg-white">
          {items.map((item, index) => (
            <MenuItem key={index} className="hover:bg-gray-100">
              <Typography as="a" href="#" className="text-gray-900 hover:text-blue-500 transition-all">
                {item}
              </Typography>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavDropdown;
