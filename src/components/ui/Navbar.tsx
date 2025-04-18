import React from "react";

const Navbar = () => {
  return (
    <nav >
      <ul className='flex flex-roww justify-around h-15 w-full items-center bg-red-600 fixed'>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
