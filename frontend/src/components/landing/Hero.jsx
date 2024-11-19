import { Link } from 'react-router-dom'
import Button from '../common/Button'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-50" />
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"
            style={{
              backgroundColor: `hsla(${Math.random() * 360}, 70%, 70%, 0.4)`,
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `blob ${Math.random() * 10 + 20}s infinite`,
              animationDelay: `${Math.random() * -20}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center transform transition-all duration-1000 translate-y-0 opacity-100">
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Transform Your Career with
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {' Expert Mentorship'}
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with industry leaders, accelerate your growth, and achieve your professional goals
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/signup">
              <Button variant="primary" className="flex items-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="secondary">Watch Demo</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero