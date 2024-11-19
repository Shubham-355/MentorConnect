import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { UserContext } from '../UserContext'
import CircleChart from '../components/common/CircleChart'

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 rounded ${className}`} />
)

const DashboardPage = () => {
  const { user } = useContext(UserContext)

  const upcomingSessions = [
    {
      id: 1,
      mentee: 'Sarah Johnson',
      type: 'Career coaching',
      time: '7:00 PM PST, 10/25',
      duration: '1 hour',
      price: 90,
      avatar: '/placeholder.svg',
    },
  ]

  const feedbackRequests = [
    {
      id: 1,
      mentee: 'Sarah Johnson',
      type: 'Career coaching',
      time: '1 hour • 7:00 PM PST, 10/25',
      avatar: '/placeholder.svg',
    },
  ]

  const chartData = [
    { name: 'airfare', value: 20 },
    { name: 'food', value: 24 },
    { name: 'accommodation', value: 20 },
    { name: 'transportation', value: 14 },
    { name: 'activities', value: 12 },
    { name: 'misc', value: 10 },
  ]

  return (
    <div className='mt-5 font-[manrope] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
      {/* User Info */}
      <div className='flex items-center mb-6'>
        <div className='mr-4'>
          <img src={user?.avatar || "/placeholder.svg"} alt="" className="w-16 h-16 rounded-full" />
        </div>
        <div className='text-2xl sm:text-3xl md:text-4xl font-bold'>
          Welcome back, {user?.name}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">5</h3>
          <p className="text-gray-500">Upcoming sessions</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">2</h3>
          <p className="text-gray-500">Message requests</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-2">2</h3>
          <p className="text-gray-500">Feedback requests</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Upcoming Sessions */}
        <div className="bg-white rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                Your upcoming sessions
              </h2>
              <Link
                to="/dashboard/session"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                View all
              </Link>
            </div>
            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img
                      src={session.avatar}
                      alt={session.mentee}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-900 text-sm sm:text-base">
                        {session.type}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">{session.time}</p>
                    </div>
                  </div>
                  <span className="font-medium text-gray-900 text-sm sm:text-base">
                    ${session.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Session Stats */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
            Progress Stats
          </h2>
          <CircleChart data={chartData}/>
        </div>

        {/* Feedback Requests */}
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Feedback requests
            </h2>
            <Link
              to="/dashboard/feedback"
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {feedbackRequests.map((request) => (
              <div
                key={request.id}
                className="flex items-center justify-between p-3 sm:p-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={request.avatar}
                    alt={request.mentee}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                  />
                  <div>
                    <p className="font-medium text-gray-900 text-sm sm:text-base">
                      {request.type}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">{request.time}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      className="text-gray-300 hover:text-yellow-400 transition-colors"
                      aria-label={`Rate ${star} stars`}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage