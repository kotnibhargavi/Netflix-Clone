import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx' 
import Player from './pages/Player/Player.jsx'

const App = () => {
  return (
    <>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/player/:id" element={<Player/>}/>
      </Routes>
    
      
    </>
  )
}

export default App
