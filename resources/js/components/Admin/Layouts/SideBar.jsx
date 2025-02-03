import React from "react";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <aside className="p-4">
        <ul className="space-y-2">
          <li>
            <a href="index.html" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md">
              <i className="bi bi-grid"></i>
              <span>Dashboard</span>
            </a>
          </li>

          {/* Components Section */}
          <li>
            <a href="#" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md">
              <i className="bi bi-menu-button-wide"></i>
              <span>Components</span>
            </a>
            <ul className="pl-4 space-y-1">
              <li><a href="components-alerts.html" className="text-gray-600 p-2">Alerts</a></li>
              <li><a href="components-accordion.html" className="text-gray-600 p-2">Accordion</a></li>
            </ul>
          </li>

          {/* Forms Section */}
          <li>
            <a href="#" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md">
              <i className="bi bi-journal-text"></i>
              <span>Forms</span>
            </a>
            <ul className="pl-4 space-y-1">
              <li><a href="forms-elements.html" className="text-gray-600 p-2">Form Elements</a></li>
              <li><a href="forms-layouts.html" className="text-gray-600 p-2">Form Layouts</a></li>
            </ul>
          </li>

          {/* Tables Section */}
          <li>
            <a href="#" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md">
              <i className="bi bi-layout-text-window-reverse"></i>
              <span>Tables</span>
            </a>
            <ul className="pl-4 space-y-1">
              <li><a href="tables-general.html" className="text-gray-600 p-2">General Tables</a></li>
              <li><a href="tables-data.html" className="text-gray-600 p-2">Data Tables</a></li>
            </ul>
          </li>

          {/* Pages Section */}
          <li><a href="users-profile.html" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md"><i className="bi bi-person"></i><span>Profile</span></a></li>
          <li><a href="pages-faq.html" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md"><i className="bi bi-question-circle"></i><span>F.A.Q</span></a></li>
          <li><a href="pages-contact.html" className="flex items-center space-x-2 p-3 text-blue-500 bg-gray-100 rounded-md"><i className="bi bi-envelope"></i><span>Contact</span></a></li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
