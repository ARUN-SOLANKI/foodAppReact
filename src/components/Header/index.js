import React from 'react'
import './style.css'

function Header({length}) {
  return (
    <div className='header-container'>
      <h1>{length ? length + " " + 'Restaurants'  : 'all Restaurants'}</h1>
    </div>
  )
}

export default Header
