import React, {useState} from 'react';
import TopBar from './TopBar';
import MenuBar from './MenuBar';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const Layout = ({children}) => {
    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className='w-[100%] overflow-hidden'>
      <TopBar setShowLogin={setShowLogin} setShowRegister={setShowRegister} showRegister={showRegister}/>
      <MenuBar />
      {children}

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
