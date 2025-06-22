<<<<<<< HEAD
import react from "react";
import { NavbarMenu } from "../../MockData/data";

import { MdMenu } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div className="flex items-center">
          <img
            src="https://via.placeholder.com/50"
            alt="Logo"
            className="h-10 w-10 mr-2"
          />
          <span className="font-bold text-lg">Geeta Medicals</span>
        </div>
        <div className="hidden md:flex space-x-4">
          {NavbarMenu.map((item) => (
            <a key={item.id} href={item.url} className="hover:underline">
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <CiSearch className="text-2xl" />
          <MdMenu className="text-2xl md:hidden" />
          <PiShoppingCartThin className="text-2xl" />
        </div>
      </div>
=======
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Search,
  TruckIcon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-slate-200">
        <ul className="flex flex-wrap items-center justify-center gap-4 p-3 text-gray-700">
          <li>
            <a href="#">
              <Instagram />
            </a>
          </li>
          <li>
            <a href="#">
              <Facebook />
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter />
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin />
            </a>
          </li>
          <li>
            <a href="#">
              <Youtube />
            </a>
          </li>
          <p className="font-semibold">
            India's Largest: Stationery | Art & Craft Store —{" "}
            <a href="#">Explore Now</a>
          </p>
        </ul>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Left Side */}
            <div className="flex items-center space-x-9">
              <Link to="/" className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="none"
                  stroke="#2970ff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="10" r="3" />
                  <path d="M7 20.662V19a2 2 0 012-2h6a2 2 0 012 2v1.662" />
                </svg>
                <span className="font-semibold text-gray-500 text-lg">
                  My Logo
                </span>
              </Link>

              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/dashboard" className="nav-link">
                  Dashboard
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </div>
            </div>

            {/* Right Side */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="border rounded-full pl-10 pr-4 py-1 text-sm focus:outline-none"
                />
                <Search className="absolute left-3 top-1.5 h-4 w-4 text-gray-400" />
              </div>

              {/* Buttons */}
              <Link to="/login" className="btn-outline">
                Log In
              </Link>
              <Link to="/signup" className="btn-filled">
                Sign Up
              </Link>
              <Link
                to="/tracking"
                className="flex items-center gap-1 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                <TruckIcon className="h-4 w-4" /> Track Order
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? "block" : "hidden"} md:hidden px-4 pb-4`}>
          {["/", "/about", "/services", "/contact", "/login", "/signup"].map(
            (path, i) => (
              <Link
                key={i}
                to={path}
                className="block py-2 px-4 text-sm hover:bg-blue-500 hover:text-white transition duration-300"
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() +
                    path.slice(2)}
              </Link>
            )
          )}
        </div>
      </nav>
>>>>>>> c05d59a596023de88749dcedfd0c5f094aec2be9
    </>
  );
  
};

export default Navbar;
