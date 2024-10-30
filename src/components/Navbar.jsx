import React from 'react';
import logo from "../assets/logo-dbz.png";

export const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white  flex items-center justify-center"> 
      <div className="flex items-center justify-center"> 
        <img src={logo} alt="img dbz" className="max-h-20 object-fit" />
      </div>
    </nav>
  );
};
