import React from 'react'
import './style.css'

import {AiFillStar} from 'react-icons/ai'
function RestaurentHeader({restaurentDetails}) {
  return (
    <div>
    <div className='RestaurentHeader-container'>
      <div>
        <h2 className='title-text'>{restaurentDetails?.name}</h2>
        <p className='sub-text1'>{restaurentDetails?.cuisines.join(', ')}</p>
        <p className='sub-text1'>{restaurentDetails?.locality} {restaurentDetails?.city}</p>
      </div>
      <div className='rating-container'>
        <div className='avg-rating'><AiFillStar size={20} /> <h2 className='ratings'>{restaurentDetails?.avgRating}</h2></div>
        <hr />  
        <p className='sub-text'>{restaurentDetails?.totalRatingsString}</p>
      </div>
    </div>
    <div className='time-price-container'>
      <ul className='time-price-items'>
      <li className='time-price-item'>time - 19 MINS</li>
      <li className='time-price-item'>{restaurentDetails?.costForTwoMessage}</li>
      </ul>
    </div>
    </div>
  )
}

export default RestaurentHeader
