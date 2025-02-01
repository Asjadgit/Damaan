import React, { useEffect } from "react";
import   { handleMobileNavToggle, homeImage, setupMobileNavLinks, toggleScrolled }  from "../../assets/main";
import { NavLink } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        const navMenuId = "navmenu";
        const toggleBtnId = "mobile-nav-toggle";
    
        // Scroll Event
        const scrollHandler = () => toggleScrolled();
        window.addEventListener("scroll", scrollHandler);
    
        // Mobile Nav Toggle
        handleMobileNavToggle(navMenuId, toggleBtnId);
    
        // Setup Mobile Nav Links
        setupMobileNavLinks(navMenuId, toggleBtnId);
    
        return () => {
          window.removeEventListener("scroll", scrollHandler);
        };
      }, []);
    
  return (
    <header className="fixed top-5 px-3  mx-5 rounded-full w-[95%] bg-white shadow-md z-50 transition-all">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="index.html" className="flex items-center">
          <img className="text-xl font-medium text-gray-800 w-16 h-16"    src={homeImage.logo} />
        </a>

        <nav id="navmenu" className="hidden md:flex space-x-6">
          <ul className="flex space-x-4 ">
          <li>
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    Home
  </NavLink>
</li>
<li>
  <NavLink
    to="/About"
    className={({ isActive }) =>
      isActive
        ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
        : "text-gray-700 hover:text-blue-600"
    }
  >
    About
  </NavLink>
</li>

            {/* <li>
              <a href="#features" className="text-gray-700 hover:text-gray-900">
                Features
              </a>
            </li> */}
            {/* <li>
              <a href="#services" className="text-gray-700 hover:text-gray-900">
                Services
              </a>
            </li> */}
            <li>
              <a href="#pricing" className="text-gray-700 hover:text-gray-900">
                Branches
              </a>
            </li>
            <li className="relative group">
              <a
                href="#"
                className="flex items-center text-gray-700 hover:text-gray-900"
              >
                Courses <i className="ml-2 bi bi-chevron-down"></i>
              </a>
              
            </li>
            <li>
              <NavLink to="/Contact" className="text-gray-700 hover:text-gray-900">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="md:hidden bi bi-list text-2xl text-gray-700"
          id="mobile-nav-toggle"
        ></button>

        <NavLink
          to='Login'
          className="hidden md:inline-block px-4 py-2 mr-6 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          Get Started
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
