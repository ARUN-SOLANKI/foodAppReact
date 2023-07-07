import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './style.css'
import { FiSearch } from 'react-icons/fi'
import { AiFillHome, AiOutlineContacts } from 'react-icons/ai'
import { IoLogoPolymer } from 'react-icons/io'

function Navbar() {
  return (
      <nav className='navbar-container'>
        <img src={logo}  className='logo-img'/>
        <ul className='nav-items'>
          <Link to='/search' className='nav-item'>
            <div className='nav-item-container'>
              <FiSearch size={20} />
              <h2 className='nav-title'>Search</h2>
            </div>
          </Link>
          <Link to='/' className='nav-item'>
          <div className='nav-item-container'>
              <AiFillHome size={20} />
              <h2 className='nav-title'>Home</h2>
            </div>
          </Link>
          <Link to='/about' className='nav-item'>
          <div className='nav-item-container'>
              <IoLogoPolymer size={20} />
              <h2 className='nav-title'>About</h2>
            </div>
          </Link>
          <Link to='/contact' className='nav-item'>
          <div className='nav-item-container'>
              <AiOutlineContacts size={20} />
              <h2 className='nav-title'>Contact</h2>
            </div>
          </Link>
        </ul>
      </nav>
  )
}

export default Navbar
