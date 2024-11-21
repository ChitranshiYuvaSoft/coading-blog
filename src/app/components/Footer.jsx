import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import icons from react-icons

const Footer = () => {
  return (
    <footer className="w-full h-[15xrem] bg-slate-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Footer content section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold mb-2">Coding Blog</h1>
            <p className="text-sm">Your go-to blog for insightful articles!</p>
          </div>

          {/* Social Media Links */}
          <div className="mt-6 sm:mt-0 flex justify-center gap-6 ">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-pink-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-700"
            >
              <FaLinkedin/>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-slate-600 pt-6 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} My Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
