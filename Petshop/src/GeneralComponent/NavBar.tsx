import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Group.svg';
import Search from '../assets/Icon+bg.svg';
import Heart from '../assets/heart (1).svg';
import Cart from '../assets/shopping-cart.svg';

const NavBar = () => {
  const location = useLocation(); // Get the current path

  // Function to check if a link is active
  const getNavLinkClass = (path: string) =>
    location.pathname === path
      ? "text-orange-500 border-b-2 border-orange-500 pb-1"
      : "text-gray-600 hover:text-black";

  return (
    <>
      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-around bg-white shadow-lg py-3 fixed bottom-0 w-full">
        <Link to="/" className={getNavLinkClass("/")}>Home</Link>
        <Link to="/shop" className={getNavLinkClass("/shop")}>Shop</Link>
        <Link to="/about-us" className={getNavLinkClass("/about-us")}>About Us</Link>
        <Link to="/contact-us" className={getNavLinkClass("/contact-us")}>Contact Us</Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center w-full max-w-6xl mx-auto bg-white shadow-lg rounded-full p-4">
        {/* Left Section - Logo */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="Logo" />
          <span className="font-bold text-lg">Pet Shop</span>
        </div>

        {/* Center Section - Navigation Links */}
        <nav className="flex space-x-6 font-medium">
          <Link to="/" className={getNavLinkClass("/")}>Home</Link>
          <Link to="/shop" className={getNavLinkClass("/shop")}>Shop</Link>
          <Link to="/about-us" className={getNavLinkClass("/about-us")}>About Us</Link>
          <Link to="/contact-us" className={getNavLinkClass("/contact-us")}>Contact Us</Link>
        </nav>

        {/* Right Section - Search Bar & Icons */}
        <div className="flex items-center space-x-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              className="bg-gray-100 text-sm px-4 py-2 rounded-full outline-none pr-10 w-full"
            />
            <img 
              src={Search} 
              alt="Search Icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
            />
          </div>
          <img src={Heart} alt="Wishlist" />
          <img src={Cart} alt="Cart" />
        </div>
      </div>
    </>
  );
};

export default NavBar;
