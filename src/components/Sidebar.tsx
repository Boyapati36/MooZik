import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 z-50 w-64 h-screen bg-gray-900 text-white shadow-lg">
      
      
      <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">MooZik</span></h1>
      

      
      <nav className="flex-1">
        <ul className="py-4 space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <span>Account</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <span>Genres</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <span>Settings</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center px-4 py-2 text-gray-300 rounded-lg hover:bg-gray-700"
            >
              <span>About</span>
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
