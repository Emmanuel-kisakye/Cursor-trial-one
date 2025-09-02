import React from 'react';
import { FiHome, FiUsers, FiUserCheck, FiCalendar, FiPackage, FiBarChart3, FiArchive } from 'react-icons/fi';

const LeftSidebar = () => {
  const menuItems = [
    { icon: FiHome, label: 'Dashboard', active: true },
    { icon: FiUsers, label: 'Patient', active: false },
    { icon: FiUserCheck, label: 'Doctors and Staff', active: false },
    { icon: FiCalendar, label: 'Room', active: false },
    { icon: FiPackage, label: 'Medicine', active: false },
    { icon: FiBarChart3, label: 'Analitik', active: false },
    { icon: FiArchive, label: 'Inventory', active: false },
  ];

  return (
    <aside className="w-64 bg-white shadow-lg h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-600">Hospital</h1>
        <p className="text-gray-500 text-sm">Management System</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href="#"
              className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                item.active
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default LeftSidebar;
