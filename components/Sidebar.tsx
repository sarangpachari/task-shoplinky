"use client";
import React from 'react';
import {
  FaHome,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaUsers,
  FaCalendarAlt,
  FaCog,
} from 'react-icons/fa';

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar }) => {
  return (
    <aside
      className={`bg-gray-800 text-white h-screen flex flex-col transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="bg-gray-900 text-white p-4 focus:outline-none md:hidden"
      >
        {isCollapsed ? '→' : '←'}
      </button>

      {/* Sidebar Items */}
      <div className="flex-1 p-4">
        <div className="space-y-4">
          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaHome className="text-lg" />
            {!isCollapsed && <span>Dashboard</span>}
          </button>

          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaUserGraduate className="text-lg" />
            {!isCollapsed && <span>Students</span>}
          </button>

          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaChalkboardTeacher className="text-lg" />
            {!isCollapsed && <span>Teachers</span>}
          </button>

          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaUsers className="text-lg" />
            {!isCollapsed && <span>Classes</span>}
          </button>

          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaCalendarAlt className="text-lg" />
            {!isCollapsed && <span>Events</span>}
          </button>

          <button
            className="flex items-center space-x-4 w-full px-2 py-3 rounded-md hover:bg-gray-700"
          >
            <FaCog className="text-lg" />
            {!isCollapsed && <span>Settings</span>}
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 text-center text-sm text-gray-400">
        {!isCollapsed && <span>&copy; 2024 School Manager</span>}
      </div>
    </aside>
  );
};

export default Sidebar;
