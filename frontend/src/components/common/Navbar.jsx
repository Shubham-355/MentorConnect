import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Bell, User } from 'lucide-react';
import { UserContext } from '../../UserContext';

const Navbar = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');

  const renderLandingNav = () => {
    return (
      <nav className="bg-slate-50">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img className="h-8 w-auto" src="/MentorConnect.svg" alt="MentorConnect" />
              </Link>
            </div>
            <div className="flex-1 flex justify-center space-x-4">
              <Link to="/about" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition transition-75">
                About
              </Link>
              <Link to="/mentors" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition transition-75">
                Find Mentors
              </Link>
              <Link to="/become-mentor" className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium transition transition-75">
                Become a Mentor
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="text-black bg-transparent hover:bg-gray-200 px-4 py-2 rounded-md text-sm font-medium">
                  Log in
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
                  Sign up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  const renderDashboardNav = () => {
    return (
      <nav className="bg-white border-b">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="flex items-center">
                  <img className="h-8 w-auto" src="/MentorConnect.svg" alt="MentorConnect" />
                </Link>
              </div>
              <div className="ml-10 relative flex-1 max-w-xl">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-gray-50 placeholder-gray-500 focus:outline-none focus:bg-white focus:border-blue-500"
                  placeholder="Search mentors, sessions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <button className="text-gray-500 hover:text-gray-700">
                <Bell className="h-6 w-6" />
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <span className="text-sm font-medium">{user?.name}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // Return different navbar based on route
  if (location.pathname === '/') {
    return renderLandingNav();
  } else if (user) {
    return renderDashboardNav();
  } else {
    return renderLandingNav();
  }
};

export default Navbar;