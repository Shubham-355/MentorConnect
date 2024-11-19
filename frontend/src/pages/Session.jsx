import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Video } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Button from '../components/common/Button'

const sessions = [
  {
    id: 1,
    title: 'Building your career in tech',
    mentor: 'John Doe',
    date: new Date(2024, 0, 9, 10, 50),
    type: 'Career coaching',
    status: 'upcoming',
    avatar: '/placeholder.svg',
  },
  {
    id: 2,
    title: 'Resume review & interview prep',
    mentor: 'Jane Smith',
    date: new Date(2024, 0, 14, 10, 50),
    type: 'Career coaching',
    status: 'upcoming',
    avatar: '/placeholder.svg',
  },
  {
    id: 3,
    title: 'Leadership skills development',
    mentor: 'Sarah Johnson',
    date: new Date(2023, 11, 20, 14, 30),
    type: 'Career coaching',
    status: 'past',
    avatar: '/placeholder.svg',
  },
]

const Sessions = () => {
  const [activeTab, setActiveTab] = useState('upcoming')

  const filteredSessions = sessions.filter(session => session.status === activeTab)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Sessions</h1>
          <Button variant="primary">Schedule</Button>
        </div>

        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {['upcoming', 'past', 'cancelled'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm capitalize`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <div
              key={session.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={session.avatar}
                    alt={session.mentor}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{session.title}</h3>
                    <p className="text-sm text-gray-500">with {session.mentor}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-gray-500">{session.type}</p>
                    <p className="font-medium">
                      {session.date.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric',
                      })}
                    </p>
                  </div>
                  {session.status === 'upcoming' ? (
                    <Link to={`/session/${session.id}`}>
                      <Button variant="primary">
                        <Video className="w-4 h-4 mr-2" />
                        Join Session
                      </Button>
                    </Link>
                  ) : (
                    <Link to={`/feedback/${session.id}`}>
                      <Button variant="secondary">Leave Feedback</Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filteredSessions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No {activeTab} sessions</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sessions