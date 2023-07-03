import React from 'react'
import './style.css'

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
        <h3 className='avg-rating'>star {restaurentDetails?.avgRating}</h3>
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
