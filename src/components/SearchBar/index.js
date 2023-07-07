import React from 'react'
import {FiSearch} from 'react-icons/fi'
import './style.css'

function SearchBar({onChange}) {
  return (
    <div className='searchbar-container'>
      <input type='text' className='searchbar-input' placeholder='Search for restaurants and food' onChange={onChange} />
      <FiSearch size={20} />
    </div>
  )
}

export default SearchBar