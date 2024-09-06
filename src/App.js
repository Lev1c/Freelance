import Footer from "./components/Footer";
import Header from "./components/Header";
import AppRouter from "./settings/AppRouter"
import React, {useContext, useEffect, useState} from 'react';
import './css/main.css'
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom"
import { updateT } from "./http/userAPI";


const App = observer(() => {

  const { user } = useContext(Context);
  const [loading, setLoading] = useState(true)
 

  let infoUser = localStorage.getItem('info');
  const tok = localStorage.getItem('token');

  if(tok) {
    localStorage.removeItem('acting_token')
  }
  
  if (tok === 'undefined' || tok === 'incorrect' || infoUser === 'undefined' || tok === '' || infoUser === '') {
    localStorage.removeItem('info');
    localStorage.removeItem('token');
    user.setUser(false);
    user.setIsAuth(false);
  }
  
  useEffect(() => {
    setLoading(false)

    const handleTokenInvalidation = () => {
      const currentToken = localStorage.getItem('token');
      if (currentToken === 'incorrect') {
        localStorage.removeItem('info');
        localStorage.removeItem('token');
        user.setIsAuth(false);
        window.location.reload()
        window.location.replace('/')
      }
    };

    const initialToken = localStorage.getItem('token');
    if (initialToken && initialToken !== 'incorrect' && initialToken !== null) {
      user.setIsAuth(true);
      updateT().then(() => handleTokenInvalidation())
    } else {
      localStorage.removeItem('info');
      localStorage.removeItem('token');
      user.setIsAuth(false);
    }

    const handleTokenProv = () => {
      const currentTokens = localStorage.getItem('token');
      if (currentTokens && currentTokens !== 'incorrect' && currentTokens !== null) {
        user.setIsAuth(true);
        updateT().then(() => handleTokenInvalidation())
      }
    }

    const handleTokenCheck = () => {
      if (initialToken && (initialToken === 'incorrect' || initialToken === null)) {
        localStorage.removeItem('info');
        localStorage.removeItem('token');
        user.setIsAuth(false);
      }
    }

    
    handleTokenProv();
    if(initialToken === 'incorrect') {
      setInterval(() => {
        handleTokenInvalidation();
      },1000)
    }
    
    handleTokenCheck();
    
    window.addEventListener('storage', handleTokenProv);
    window.addEventListener('storage', handleTokenInvalidation);
    window.addEventListener('storage', handleTokenCheck);

    return () => {
      
      window.removeEventListener('storage', handleTokenCheck)
      window.removeEventListener('storage', handleTokenProv)
      window.removeEventListener('storage', handleTokenInvalidation);
    };
  }, [user,tok]);

 if(loading) {
    return
  }
  
  
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter/>
      <Footer/>
    </BrowserRouter>
  );
})

export default App;
