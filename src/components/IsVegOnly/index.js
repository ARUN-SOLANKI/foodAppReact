import React from 'react'
import { IMAGE_URL_2 } from '../../utils/contants';
import './style.css';

function IsVegOnly({details}) {
  return (
    <div className='isvegonly-container'>
      <div className='vegonly-container'>
        <img src={IMAGE_URL_2 + details.vegOnlyDetails.imageId} className='vegOnly-img' /> 
        <p className='vegonly-text'>Pure Veg</p>
      </div>
    </div>
  )
}

export default IsVegOnly
