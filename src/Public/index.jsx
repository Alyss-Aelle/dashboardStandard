import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './login'
import Register from './register'

const index = () => {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        
        
    </Routes>
  )
}

export default index