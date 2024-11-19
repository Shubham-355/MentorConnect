import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import Navbar from '../components/common/Navbar'

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
          <Hero />
          <Features />
        </div>
      )
}

export default LandingPage