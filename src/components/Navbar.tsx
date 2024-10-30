import { IoCartOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosHeartEmpty } from "react-icons/io";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DropDownMenu from "./DropDownMenu";
import { useCart } from "@/contexts/CartContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { useAuth } from "@/hooks/useAuth";
import { navLinks } from "@/data";
import { FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePath, setActivePath] = useState('');
  const location = useLocation();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const { currentUser } = useAuth();

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white border border-b">
      <div className="container">
        <nav className="flex justify-between items-center py-4 sm:py-6 px-3 sm:px-5">
          {/* Brand/Logo */}
          <Link className="text-2xl sm:text-3xl font-bold" to="/">
            Exclusive
          </Link>

          {/* Nav Links */}
          <div className={`fixed md:relative top-0 left-0 md:top-auto md:left-auto h-screen md:h-auto w-full md:w-auto 
            bg-white md:bg-transparent transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'} 
            transition-transform duration-300 ease-in-out z-50`}>
            <ul className="flex flex-col md:flex-row items-center justify-center h-full md:h-auto 
              space-y-6 md:space-y-0 md:space-x-8 font-semibold md:px-4">
              {navLinks.map((link) => (
                <li key={link.path} className="w-full md:w-auto text-center">
                  <Link
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block md:inline-block hover:text-gray-900 relative group px-4 py-2 md:px-0 md:py-0
                      ${activePath === link.path ? 'text-black bg-gray-200 md:bg-transparent' : 'text-gray-500'}`}
                  >
                    {link.label}
                    <span
                      className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gray-400 transform origin-left 
                        transition-transform duration-300 hidden md:block
                        ${activePath === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    ></span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Input */}
            <div className="hidden lg:block relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pr-8 pl-4 py-2 bg-[#F5F5F5] h-[38px] border rounded-md focus:outline-none 
                  placeholder:text-xs placeholder:font-normal"
              />
              <FiSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Search Icon (visible only on sm and md screens) */}
            <Link to="/search" className="block lg:hidden">
              <FiSearch className="h-6 w-6 text-gray-600 hover:text-gray-800" />
            </Link>

            {/* Conditional Icons - only shown when logged in */}
            {currentUser && (
              <>
                <Link className="flex items-center hover:text-gray-600" to="wishlist">
                  <IoIosHeartEmpty className="h-6 w-6 sm:h-6 sm:w-6" />
                  {wishlistItems.length > 0 && (
                    <div className="flex absolute -mt-4 sm:-mt-5 ml-3 sm:ml-4">
                      <div className="relative flex items-center justify-center rounded-full h-5 w-5 
                        bg-[#DB4444] text-xs text-white">
                        {wishlistItems.length}
                      </div>
                    </div>
                  )}
                </Link>

                <Link className="flex items-center hover:text-gray-600" to="cart">
                  <IoCartOutline className="h-6 w-6 sm:h-6 sm:w-6" />
                  {cartItems.length > 0 && (
                    <div className="flex absolute -mt-4 sm:-mt-5 ml-3 sm:ml-4">
                      <div className="relative flex items-center justify-center rounded-full h-5 w-5 
                        bg-[#DB4444] text-xs text-white">
                        {cartItems.length}
                      </div>
                    </div>
                  )}
                </Link>

                <span className="flex items-center justify-center bg-[#DB4444] w-7 h-7 rounded-full mb-[1px]">
                  <DropDownMenu />
                </span>
              </>
            )}
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden z-50"
          >
           {isMenuOpen ? <FaRegWindowClose className="h-6 w-6"/> : <RxHamburgerMenu className="h-6 w-6" />} 
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;