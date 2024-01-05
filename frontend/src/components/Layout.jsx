import React, {useState, useEffect} from 'react';
import TopBar from './home/TopBar';
import MenuBar from './home/MenuBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import Loading from './Loading';
import { useLocation } from 'react-router-dom';

const Layout = ({children}) => {
  const location = useLocation()
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
      setIsLoading(true)


      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }, [location])
  return (
    <div className='w-[100%] overflow-hidden'>

      {
        isLoading ? <Loading /> :
      <div>
        <TopBar setShowLogin={setShowLogin} setShowRegister={setShowRegister} showRegister={showRegister}/>
              <MenuBar />
              {children}
      </div>}
      

      {
        showLogin && !isLoggedIn && <LoginForm setShowLogin={setShowLogin} showLogin={showLogin}/>
      }
      {
        showRegister && !isLoggedIn && <RegisterForm setShowRegister={setShowRegister} showRegister={showRegister}/>
      }
    </div>
  );
}

export default Layout;
