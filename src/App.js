import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import Nav from './components/Nav/Nav.jsx';
import NavProfile from './components/NavProfile/NavProfile.jsx';
import About from './components/About/About.jsx';

import CPanel from './components/CPanel/CPanel.jsx';
import CPanelPre from './components/CPanel/CPanelPre.jsx';
import CPanelPro from './components/CPanel/CPanelPro.jsx';
import ActionTool from './components/ActionTool/ActionTool.jsx';
import Support from './components/Support/Support.jsx';
import PayPackage from './components/PayPackage/PayPackage.jsx';
import Payed from './components/Payed/Payed.jsx';
import SupportForm from './components/SupportForm/SupportForm.jsx';
import PhoneCalled from './components/PhoneCalled/PhoneCalled.jsx';
import TermsConditions from "./components/TermsConditions/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";

import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null)
  console.log('user empty',user)

  useEffect(()=>{
    const checkSession = async ()=>{
      try {
          console.log('check try')
      
      // Carga el usuario desde localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        setUser(storedUser); // Actualiza el estado local
        console.log('Usuario cargado desde localStorage:', storedUser);
      }
        
        const response = await axios.get(`https://hiddenserver-i7sc.onrender.com/api/auth/session/${storedUser}`,{
        withCredentials:true
        })
          console.log('check response')
        
         if (response.data && response.data.user) {
          console.log('check sesion')
        } else {
        console.log('El usuario no tiene una sesión activa');
      }
 
} catch (error) {
        console.log('Error check sesion:', error.response ? error.response.data : error.message);
        setUser(null)
      }
    }
    checkSession()
  }, [])

      const handleLogout = async () =>{
        const response = await axios.post('https://hiddenserver-i7sc.onrender.com/api/auth/logout',{
          username: user
        },{
          withCredentials: true,
        })
      if (response.data.message === 'Logout exitoso') {
      setUser(null); // Reinicia el estado local
      localStorage.removeItem('user'); // Elimina el usuario de localStorage
    }
      }
  
  return (
    <div className="App">
      {user ? <NavProfile handleLogout={handleLogout} user={user} /> : <Nav />}
      <Routes>
        {/* Si no hay una session */}
        <Route path='/' element={<Home user={user} />} />
        <Route path='/inicio' element={<Home user={user} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/registrarse' element={<Register />} />
        <Route path='/nosotros' element={<About />} />
        <Route path='/terms-conditions' element={<TermsConditions />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        
        {/* Si hay una session */}
        {/* Todas fallan */}
        <Route path="/cpanel-Basico" element={<CPanel />} />
        <Route path="/cpanel-Premium" element={<CPanelPre />} />
        <Route path="/cpanel-Pro" element={<CPanelPro />} />
        <Route path="/actiontool" element={<ActionTool />} />
        <Route path="/support" element={<Support />} />
        <Route path="/paypackage" element={<PayPackage />} />
        {/* Encontre un patron, las rutas que son redirijidas con navigate son las que funcionan correctamente */}
        {/* Las que son redirijidas con "window.location.href" o con "res.redirect(`${HOST_FRONTEND}/payed`)" son las que fallan */}
        <Route path="/payed" element={<Payed />} />
        <Route path="/support-form" element={<SupportForm />} />
        <Route path="/phone-called" element={<PhoneCalled />} />
      </Routes>
    </div>
  );
}

export default App;
