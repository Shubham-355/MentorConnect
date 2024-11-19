import React, { useState, useContext } from 'react'
import { UserContext } from '../UserContext'
import Button from '../components/common/Button'

const MentorAvailability = () => {
  const { user, updateUser } = useContext(UserContext);
  const [availability, setAvailability] = useState(user.availability || {});

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleAvailabilityChange = (day, time) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...(prev[day] || {}),
        [time]: !(prev[day] && prev[day][time])
      }
    }));
  };

  const saveAvailability = () => {
    updateUser({ availability });
    // Here you would typically also send this data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Set Your Availability</h1>
      <div className="grid grid-cols-8 gap-4">
        <div></div>
        {timeSlots.map(time => (
          <div key={time} className="text-center text-sm font-medium">{time}</div>
        ))}
        {days.map(day => (
          <React.Fragment key={day}>
            <div className="font-medium">{day}</div>
            {timeSlots.map(time => (
              <div key={`${day}-${time}`} className="text-center">
                <input
                  type="checkbox"
                  checked={availability[day] && availability[day][time]}
                  onChange={() => handleAvailabilityChange(day, time)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <Button onClick={saveAvailability} className="mt-6">Save Availability</Button>
    </div>
  )
}

export default MentorAvailability