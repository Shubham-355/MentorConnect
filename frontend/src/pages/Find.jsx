'use client'

import React, { useState } from 'react'
import { Search } from 'lucide-react'
import { Link } from 'react-router-dom'

function Find() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedExpertise, setSelectedExpertise] = useState('all')

  const mentors = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Senior Product Manager',
      company: 'Google',
      expertise: ['Product Management', 'Career Development', 'Leadership'],
      rating: 4.8,
      price: 120,
      avatar: '/placeholder.svg?height=40&width=40',
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Engineering Director',
      company: 'Microsoft',
      expertise: ['Software Engineering', 'Team Management', 'System Design'],
      rating: 4.9,
      price: 150,
      avatar: '/placeholder.svg?height=40&width=40',
    },
    // Add more mentors as needed
  ]

  const filteredMentors = mentors.filter((mentor) => {
    const matchesSearch =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.company.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesExpertise =
      selectedExpertise === 'all' || mentor.expertise.includes(selectedExpertise)

    return matchesSearch && matchesExpertise
  })

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Find Your Mentor</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              className="w-full pl-10 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search by name, role, or company"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <select
            className="w-full md:w-[200px] p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedExpertise}
            onChange={(e) => setSelectedExpertise(e.target.value)}
          >
            <option value="all">All Expertise</option>
            <option value="Product Management">Product Management</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Career Development">Career Development</option>
            <option value="Leadership">Leadership</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredMentors.map((mentor) => (
          <div key={mentor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="h-full w-full rounded-full"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"><rect width="40" height="40" fill="%23cccccc"/><text x="50%" y="50%" font-size="20" text-anchor="middle" dy=".3em" fill="%23ffffff">' + mentor.name[0] + '</text></svg>';
                    }}
                  />
                </div>
                <div className="flex-1">
                  <Link to={`/mentors/${mentor.id}`} className="font-semibold hover:underline">
                    {mentor.name}
                  </Link>
                  <p className="text-sm text-gray-500">
                    {mentor.role} at {mentor.company}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-yellow-500">★</span>
                  <span className="font-medium">{mentor.rating}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold">${mentor.price}/hour</span>
                <Link to={`/book/${mentor.id}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Book Session
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Find