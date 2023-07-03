import React from 'react'
import { IMAGE_URL_2 } from '../../utils/contants'
import './style.css'

function RestaurentMenuItem({menu}) {
  return (
    <div className='item-container'>
    <div className='menu-left-container'>
      <h3 className='menu-title'>{menu?.name}</h3>
      <div className='menu-discount-container'>
        <p className='menu-discount-rate'>{menu?.price/100}</p>
        <p className='menu-diss'>40% OFF | USE SWIGGYIT</p>
      </div>
      <p className='menu-desc'>{menu?.description}</p>
    </div>
    <div>
      <img src={IMAGE_URL_2 + menu?.imageId} className='menu-img' alt='menu-img' />
    </div>
  </div>

  )
}

export default RestaurentMenuItem
