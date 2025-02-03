import React from "react";
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300  gap-10 z-10">
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <a
              href="index.html"
              className="flex items-center text-white font-bold text-2xl"
            >
              Damman College of IT
            </a>
            <p>Address: 2nd Floor Ashiyana Shoping Center </p>
            <p>Der Ismail khan</p>
            <p className="mt-3">
              <strong>Phone:</strong> +92 33 24643642
            </p>
            <p>
              <strong>Email:</strong> Damaan@info.gmail.com
            </p>
            <div className="flex space-x-3 mt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:text-white hover:border-white transition"
              >
                <FaTwitter />

              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:text-white hover:border-white transition"
              >
               <FaFacebook />

              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:text-white hover:border-white transition"
              >
                <FaInstagramSquare />

              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-500 hover:text-white hover:border-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Web Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Product Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Graphic Design
                </a>
              </li>
            </ul>
          </div>

          {/* Custom Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Molestiae accusamus iure
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Excepturi dignissimos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Suscipit distinctio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dilecta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Sit quas consectetur
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">More</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">
                  Ipsam
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Laudantium dolorum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dinera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Trodelas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Flexo
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-gray-800 text-center py-4">
        <p className="text-sm">
          &copy;{" "}
          <strong className="text-white">Damman College of IT</strong> All
          Rights Reserved.
        </p>
        <p className="text-xs mt-2">
          Designed by{" "}
          <a
            href="https://itlinked.tech/"
            target="_blank"
            className="text-blue-400 hover:underline"
            rel="noreferrer"
          >
            IT-Linked
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
