import React from 'react'
import loader from '../../assets/images/loader.gif'
import './style.css'

function Loader() {
  return (
    <div className='loader-container'>
        <img src={loader} className="loader-img" />
    </div>
  )
}

export default Loader
