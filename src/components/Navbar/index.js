import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.css'

function Navbar() {
  return (
      <nav className='navbar-container'>
        <img src={logo}  className='logo-img'/>
        <ul className='nav-items'>
          <Link to='/' className='nav-item'>Home</Link>
          <Link to='/about' className='nav-item'>About</Link>
          <Link to='/contact' className='nav-item'>Contact</Link>
        </ul>
      </nav>
  )
}

export default Navbar
