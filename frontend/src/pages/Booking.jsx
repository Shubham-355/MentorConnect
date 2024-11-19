import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../UserContext'
import Button from '../components/common/Button'

const Booking = () => {
  const { mentorId } = useParams()
  const { user } = useContext(UserContext)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [mentor, setMentor] = useState(null)

  useEffect(() => {
    // In a real app, you would fetch the mentor data from your API
    // For now, we'll use mock data
    setMentor({
      id: mentorId,
      name: 'Sarah Johnson',
      role: 'Senior Product Manager at Google',
      availability: {
        Mon: { '10:00 AM': true, '02:00 PM': true },
        Wed: { '11:00 AM': true, '03:00 PM': true },
        Fri: { '09:00 AM': true, '01:00 PM': true },
      }
    })
  }, [mentorId])

  const handleDateSelect = (date) => {
    setSelectedDate(date)
    setSelectedTime(null)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time)
  }

  const handleBooking = () => {
    // Here you would send the booking data to your backend
    console.log('Booking:', { mentorId, selectedDate, selectedTime })
    // Then redirect to a confirmation page or show a success message
  }

  if (!mentor) return <div>Loading...</div>

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8 flex items-center gap-4">
        <img
          src="/placeholder.svg"
          alt={mentor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Book a Session with {mentor.name}</h1>
          <p className="text-gray-500">{mentor.role}</p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
          <div className="mb-6">
            <div className="grid grid-cols-7 gap-1 mb-4">
              {Object.keys(mentor.availability).map((day, index) => {
                const date = new Date()
                date.setDate(date.getDate() + index)
                return (
                  <button
                    key={day}
                    onClick={() => handleDateSelect(date)}
                    className={`p-2 text-center rounded-lg ${
                      selectedDate?.toDateString() === date.toDateString()
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div className="text-xs">{day}</div>
                    <div className="font-semibold">{date.getDate()}</div>
                  </button>
                )
              })}
            </div>
          </div>

          {selectedDate && (
            <div>
              <h3 className="font-medium mb-4">Available Time Slots</h3>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(mentor.availability[Object.keys(mentor.availability)[selectedDate.getDay()]]).map((time) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? 'primary' : 'secondary'}
                    onClick={() => handleTimeSelect(time)}
                    className="w-full"
                  >
                    {time}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Session Details</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Session Type</h3>
              <p className="text-gray-600">1-on-1 Career Coaching</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Duration</h3>
              <p className="text-gray-600">60 minutes</p>
            </div>
            <div>
              <h3 className="font-medium mb-2">Price</h3>
              <p className="text-2xl font-bold text-gray-900">$120</p>
            </div>
            <Button
              variant="primary"
              className="w-full mt-6"
              disabled={!selectedDate || !selectedTime}
              onClick={handleBooking}
            >
              Confirm Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking