import React, { useState } from 'react';
import { Star } from 'lucide-react';

function Feedback() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-6">Session Feedback</h1>
        
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-600 font-semibold">M</span>
              </div>
              <div>
                <h2 className="font-semibold">Career Coaching Session</h2>
                <p className="text-sm text-gray-500">with Sarah Johnson</p>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                How would you rate this session?
              </label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className={`p-2 rounded-md hover:bg-gray-100`}
                    onClick={() => setRating(star)}
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      } hover:text-yellow-400 hover:fill-yellow-400`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label 
                htmlFor="feedback"
                className="block text-sm font-medium text-gray-700"
              >
                Share your experience
              </label>
              <textarea
                id="feedback"
                placeholder="What did you learn? How was the mentor? Any suggestions for improvement?"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full min-h-[150px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="button"
              className="w-full py-3 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;