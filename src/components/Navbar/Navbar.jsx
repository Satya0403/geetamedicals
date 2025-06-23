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
import Logo from "../../assets/geetamedicals.png";

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
              <Youtube />
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
                <img
                  src={Logo}
                  alt="Geeta Medicals"
                  className="h-8 w-8 object-contain"
                />
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
    </>
  );
};

export default Navbar;
