
import React, { useEffect, useState } from 'react';
import { Calendar, MessageSquare, FileText, Share2, BarChart, Users, Twitter, Facebook, Instagram, Linkedin  } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const FeatureCard = ({ icon, title, description, isActive }) => (
  <div className={`bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transform transition-all duration-500 ${
    isActive ? 'scale-105 border-2 border-indigo-500' : 'hover:scale-102'
  }`}>
    <div className={`${isActive ? 'bg-indigo-500' : 'bg-indigo-100'} rounded-full p-3 mb-4 transition-colors duration-300`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Features = () => {

    const [isChecked, setIsChecked] = useState(false);
    const [activeFeature, setActiveFeature] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };  

    useEffect(() => {
      if (isPlaying) {
        const interval = setInterval(() => {
          setActiveFeature((prev) => (prev + 1) % features.length);
        }, 3000);
        return () => clearInterval(interval);
      }
    }, [isPlaying]);

  const features = [
    {
      icon: <MessageSquare className="h-8 w-8 text-indigo-600" />,
      title: "Smart Chat",
      description: "Real-time messaging with AI-powered topic suggestions"
    },
    {
      icon: <Calendar className="h-8 w-8 text-indigo-600" />,
      title: "Session Booking",
      description: "Efficient scheduling with calendar integration"
    },
    {
      icon: <FileText className="h-8 w-8 text-indigo-600" />,
      title: "Resume Building",
      description: "Professional resume templates and expert feedback"
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: "Resource Sharing",
      description: "Curated learning materials and industry insights"
    },
    {
      icon: <BarChart className="h-8 w-8 text-indigo-600" />,
      title: "Progress Tracking",
      description: "Detailed analytics and growth metrics"
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Community",
      description: "Connect with peers and industry experts"
    }
  ];

  return (
    <section className="pt-16 bg-gray-50 font-[manrope]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Choose MentorConnect?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the benefits of our mentorship platform
          </p>
        </div>
        <div>
            <div className="relative flex flex-col items-center mb-12">
            {/* Container for the images */}
            <div className="relative w-9/12 h-3/6 p-2">
                {/* Conditionally render images based on checkbox state */}
                <img
                src={isChecked ? "/Frame 57.png" : "/Component.png"}
                alt={isChecked ? "Second" : "First"}
                className="w-full h-full object-cover rounded-lg"
                />
            </div>

            {/* Checkbox below the images */}
            <div className="mt-4">
                <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className="form-checkbox h-5 w-5"
                />
                <span>Imagine without Mentor Connect</span>
                </label>
            </div>
            </div>
        </div>
        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="text-indigo-600 hover:text-indigo-700 ml-auto"
            >
              {isPlaying ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                {...feature}
                isActive={index === activeFeature}
                onMouseEnter={() => {
                  setActiveFeature(index);
                  setIsPlaying(false);
                }}
              />
            ))}
          </div>
        <div className='my-10'>
          <div className='my-7 font-semibold text-xl'>What our mentees are saying</div>
          <div className='flex items-center'>
            <div className='flex-1 border-2 h-40 mr-10 p-4 rounded-lg'>
              <div className=''><img src="menteeuser.png" alt="" /></div>
              <div className='py-2 font-semibold'>I am new here but idk how to express things and i am here to shre my experience</div>
            </div>
            <div className='flex-1 border-2 h-40 mr-10 p-4 rounded-lg'>
              <div className=''><img src="menteeuser1.png" alt="" /></div>
              <div className='py-2 font-semibold'>I am new here but idk how to express things that can be idk how to express but i will try to express</div>
            </div>
            <div className='flex-1 border-2 h-40 p-4 rounded-lg'>
              <div className=''><img src="menteeuser2.png" alt="" /></div>
              <div className='py-2 font-semibold'>I am new here but idk how to express things</div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='my-7 font-semibold text-xl'>
            What our members says
          </div>
          <div className='my-7'>
            <div className='font-semibold text-lg'>Maya H.</div>
            <div className='text-teal-500'>2 days ago</div>
            <div className='my-2 flex w-5'>
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
            </div>
            <div>I've been using this platform for a few months now, and it's been incredibly helpful. I've gotten some great advice from my mentor, and I feel much more confident about my career. Highly recommend!</div>
          </div>
          <div className='my-7'>
            <div className='font-semibold text-lg'>Brandon K.</div>
            <div className='text-teal-500'>1 week ago</div>
            <div className='my-2 flex w-5'>
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
            </div>
            <div>I've been mentor on this platform for a while, and it's been a great experience</div>
            </div>
          <div className='my-7'> 
            <div className='font-semibold text-lg'>Lily L.</div>
            <div className='text-teal-500'>3 weeks ago</div>
            <div className='my-2 flex w-5'>
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
              <img src="2893811.png" alt="" />
            </div>
            <div>This platform has been gaem changes for me. I was feeling stuck in my career, but my mentor has helped me see things from a different prespective. I'm learning new skills and making progress towards my goals. So greatful for this platform!</div>
          </div>
        </div>
      </div>
      </div>
      <div className='bg-blue-500 w-full p-2'>
        <div className='text-4xl text-center text-white m-6 font-bold bg-blue'>Ready to take your career to the next level?</div>
        <div className='my-10 text-center'>
          <Link className='text-center ' to="/signup">
            <Button variant="secondary">Find a Mentor</Button>
          </Link>
        </div>
        <div className='flex space-x-4 text-white justify-center mb-5'>
          <div><Twitter /></div>
          <div><Facebook /></div>
          <div><Instagram /></div>
          <div><Linkedin /></div>
        </div>
      </div>
    </section>
  );
};

export default Features;