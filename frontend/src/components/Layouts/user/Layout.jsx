// @ts-nocheck
import React, { useState, useEffect } from 'react'
import TopBar from '../../home/TopBar'
import MenuBar from '../../home/MenuBar'
import LoginForm from '../../auth/LoginForm'
import RegisterForm from '../../auth/RegisterForm'
import Loading from '../../common/loading/Loading'
import { useLocation } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import Chatbot from '../../common/chatbot/Chatbot'
const Layout = ({ children }) => {
  const location = useLocation()
  const [showLogin, setShowLogin] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [location])
  return (
    <div className="w-[100%] overflow-hidden">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <TopBar
            setShowLogin={setShowLogin}
            setShowRegister={setShowRegister}
            showRegister={showRegister}
          />
          <MenuBar />
          <Chatbot />
          {children}
          <Footer />
        </div>
      )}

      {showLogin && !isLoggedIn && (
        <LoginForm setShowLogin={setShowLogin} showLogin={showLogin} />
      )}
      {showRegister && !isLoggedIn && (
        <RegisterForm
          setShowRegister={setShowRegister}
          showRegister={showRegister}
        />
      )}
    </div>
  )
}

export default Layout
