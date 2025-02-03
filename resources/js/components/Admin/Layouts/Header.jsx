import { useState } from "react";
import { FiSearch, FiBell, FiMessageCircle, FiChevronDown } from "react-icons/fi";
import { homeImage } from "../../../assets/main";
import Sidebar from "./Sidebar"; 
import { MdMenu } from "react-icons/md";


const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMessagesOpen, setIsMessagesOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);  // Sidebar state
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Pass sidebar state to Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <header className="bg-white shadow-md w-full p-4 flex justify-between items-center">
        {/* Logo */}
        <img src={homeImage.logo} className="w-14 h-14" alt="Logo" />

        {/* Toggle Sidebar Button */}
        <button onClick={toggleSidebar} className="text-blue-500 mb-4">
        <MdMenu />

        </button>
        
        {/* Search Bar */}
        <div className="relative w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 pl-10 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
        </div>

        {/* Icons (Bell, Messages, Profile) */}
        <div className="flex items-center space-x-6">
          {/* Notifications */}
          <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="relative">
            <FiBell className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">3</span>
          </button>
          {isNotificationsOpen && (
            <div className="absolute top-12 right-20 bg-white shadow-lg p-4 w-40 rounded-md">Notifications</div>
          )}

          {/* Messages */}
          <button onClick={() => setIsMessagesOpen(!isMessagesOpen)} className="relative">
            <FiMessageCircle className="text-xl" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">5</span>
          </button>
          {isMessagesOpen && (
            <div className="absolute top-12 right-10 bg-white shadow-lg p-4 w-40 rounded-md">Messages</div>
          )}

          {/* Profile Dropdown */}
          <div className="relative">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="flex items-center space-x-2">
              <img src={homeImage.avatar1} alt="Profile" className="w-10 h-10 rounded-full" />
              <FiChevronDown className="text-xl" />
            </button>
            {isProfileOpen && (
              <div className="absolute top-12 right-0 bg-white shadow-lg p-4 w-40 rounded-md">
                <ul>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="py-1 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
