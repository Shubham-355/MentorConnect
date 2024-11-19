import React, { useState, useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Bell, Book, Calendar, HelpCircle, LayoutDashboard, LogOut, Menu, MessageCircle, Search, Settings, Star, User, X } from 'lucide-react'
import { UserContext } from '../UserContext'
import Button from '../components/common/Button'
import Navbar from '../components/common/Navbar'

const DashboardLayout = () => {
  const { user, logout } = useContext(UserContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/dashboard/find', icon: Search, label: 'Find' },
    { path: '/dashboard/booking', icon: Book, label: 'Booking' },
    { path: '/dashboard/session', icon: Calendar, label: 'Sessions' },
    { path: '/dashboard/messages', icon: MessageCircle, label: 'Message' },
    { path: '/dashboard/feedback', icon: Star, label: 'Feedback' },
    { path: '/dashboard/settings', icon: Settings, label: 'Settings' },
  ];

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <nav className={`bg-white w-64 min-h-screen ${isSidebarOpen ? 'block' : 'hidden'} md:block`}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100 ${
                location.pathname === item.path ? 'bg-gray-100 text-gray-900' : ''
              }`}
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.label}
            </Link>
          ))}
          <button
            onClick={logout}
            className="flex items-center px-4 py-2 mt-2 text-gray-600 hover:bg-gray-100 w-full"
          >
            <LogOut className="h-5 w-5 mr-2" />
            Logout
          </button>
        </nav>

        {/* Main Content */}
        <div className="flex-1 p-10">
          <Button
            onClick={toggleSidebar}
            className="md:hidden mb-4"
          >
            {isSidebarOpen ? <X /> : <Menu />}
          </Button>
          <main className="container mx-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout