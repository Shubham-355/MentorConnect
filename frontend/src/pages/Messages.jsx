import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Input from '../components/common/Input'

const chats = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: '/placeholder.svg',
    lastMessage: "Hi, I'm looking forward to our session!",
    timestamp: new Date(),
    unread: true,
  },
  {
    id: '2',
    name: 'Michael Chen',
    avatar: '/placeholder.svg',
    lastMessage: 'Thank you for the great session!',
    timestamp: new Date(Date.now() - 3600000),
    unread: false,
  },
]

const Messages = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border-b border-gray-200">
          <div className="px-4 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </div>

        <div className="divide-y divide-gray-200">
          {filteredChats.map((chat) => (
            <Link
              key={chat.id}
              to={`/chat/${chat.id}`}
              className="block hover:bg-gray-50"
            >
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      className="h-12 w-12 rounded-full"
                      src={chat.avatar}
                      alt={chat.name}
                    />
                    <div className="ml-4">
                      <p className={`text-sm font-medium ${
                        chat.unread ? 'text-blue-600' : 'text-gray-900'
                      }`}>
                        {chat.name}
                      </p>
                      <p className={`text-sm ${
                        chat.unread ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {chat.lastMessage}
                      </p>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <p className="text-sm text-gray-500">
                      {chat.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Messages