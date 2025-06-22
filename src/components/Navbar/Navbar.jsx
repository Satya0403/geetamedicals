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
            src="logo.png" 
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
    </>
  );
};

  export default Navbar;
