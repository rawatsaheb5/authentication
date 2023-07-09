import React, { useState } from 'react'
import Register from './pages/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Reset from './pages/Reset'


function App() {

 

  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset'element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App