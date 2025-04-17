import React from "react";

const Navbar = () => {
  return (
    <nav >
      <ul className='flex flex-roww justify-around h-15 items-center bg-teal-600 sticky'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
