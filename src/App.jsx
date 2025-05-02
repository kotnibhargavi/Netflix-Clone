import React, { useEffect } from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx' 
import Player from './pages/Player/Player.jsx'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase.js'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const navigate = useNavigate()
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if (user){ 
        navigate("/")
        console.log("LoggedIn")
      }else{
        navigate("/login")
        console.log("LoggedOut")
      }
    })
  },[])
  return (
    <>
    <ToastContainer theme='dark'/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/player/:id" element={<Player/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
