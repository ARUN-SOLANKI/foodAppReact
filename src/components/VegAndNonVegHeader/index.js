import React from 'react'
import ToggleButton from '../ToggleButton'
import './style.css'

function VegAndNonVegHeader() {
  return (
    <div className='isvegonly-container'>
      <div className='vegonly-container'>
      <p className='vegonly-text'>Veg Only</p>
        <ToggleButton />
      </div>
    </div>
  )
}

export default VegAndNonVegHeader
