import React from 'react'
import { Outlet } from 'react-router'
import '../../index.css'
import Navbar from '../components/Navbar'

function App() {
  return (
    <div className='main'>
     <Navbar />
     <Outlet />
    </div>
  )
}

export default App
