import React from 'react'
import { useParams } from 'react-router-dom'
import { MessageSquare } from 'lucide-react'
import Navbar from '../components/common/Navbar'
import Button from '../components/common/Button'

const expertise = [
  'Product Management',
  'Career Advice',
  'Interview Prep',
  'Resume Review',
  'Salary Negotiation',
  'Startups',
  'Leadership',
  'Personal Development',
  'Work-Life Balance',
]

const industries = [
  'Tech',
  'Finance',
  'Consulting',
  'Healthcare',
  'Retail',
  'E-Commerce',
  'Education',
  'Non-Profit',
  'Government',
]

const Profile = () => {
  const { userId } = useParams()

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Balaji"
                  className="w-20 h-20 rounded-full"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">Balaji</h1>
                  <p className="text-gray-500">Product Manager at Stripe</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Button variant="secondary">Request Mentorship</Button>
                <Button variant="primary">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Industry</h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">
                Product Manager with 10+ years of experience in tech. Passionate about helping others
                grow in their careers and achieve their professional goals. Expertise in product
                strategy, team leadership, and career development.
              </p>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Stripe"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Product Manager</h3>
                    <p className="text-sm text-gray-500">Stripe • 2020 - Present</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/placeholder.svg"
                    alt="Google"
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">Senior Product Manager</h3>
                    <p className="text-sm text-gray-500">Google • 2015 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile