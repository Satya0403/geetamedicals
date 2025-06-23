import { useState, useEffect } from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="flex flex-col items-center font-bold bg-slate-200 ">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 justify-center items-center p-3">
            <div className="flex gap-8 items-center justify-center">
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
            </div>
            <p className="hidden md:block mt-2 md:mt-0">
              Copyright &copy; {new Date().getFullYear()} Geeta Medicals. All
              rights reserved.
            </p>
            <div className="text-center ">
              <p className="block md:hidden mt-2 md:mt-0">
                Copyright &copy; {new Date().getFullYear()} Geeta Medicals. All
                rights reserved.
              </p>
              <img src="https://asrsnews.in/wp-content/uploads/2025/02/payments1.png" />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
