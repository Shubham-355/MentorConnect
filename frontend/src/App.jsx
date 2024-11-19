
import './App.css'
import { UserProvider } from './UserContext'
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
// import Navbar from './components/common/Navbar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import Session from './pages/Session'
import Messages from './pages/Messages'
import Feedback from './pages/Feedback'
import Settings from './pages/Settings'
import DashboardLayout from './pages/DashboardLayout'
import DashboardPage from './pages/DashboardPage'
import Booking from './pages/Booking'
import Find from './pages/Find'
import Meeting from './pages/Meeting'
import MentorAvailability from './pages/MentorAvailability'
import { ThemeProvider } from './components/ThemeProvider'

function App() {

  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path="/dashboard" element={<DashboardLayout />} >
              <Route index element={<DashboardPage />}/>
              <Route path="booking" element={<Booking />} />
              <Route path="find" element={<Find />} />
              <Route path="session" element={<Session />} />
              <Route path="messages" element={<Messages />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="settings" element={<Settings />} />
              <Route path="availability" element={<MentorAvailability />} />
            </Route>
            <Route path="/session/:sessionId" element={<Meeting />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Router>
      </UserProvider>
    </ThemeProvider>
  )
}

export default App
