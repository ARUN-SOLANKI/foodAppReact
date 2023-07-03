import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IMAGE_URL } from '../../utils/contants'
import './style.css'

function RestaurentCard({ restaurent }) {
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate()
  return (
    <Link className='restaurent-link' onMouseEnter={() => {
      setShowButton(true)
    }}

      onMouseLeave={() => {
        setShowButton(false)
      }}

      to={'/restaurent/' + restaurent.id}
    >
      <div className='RestaurentCard-container'>
        <img src={IMAGE_URL + restaurent?.cloudinaryImageId} className='card-img' />
        <div className='card-content-container'>
          <h3 className='card-content-title'>{restaurent.name}</h3>
          <p className='RestaurentCard-cuisines'>{restaurent?.cuisines.join(', ')}</p>
          <div className='card-footer-container'>
            <span className='card-footer-content'>rating - {restaurent?.totalRatings
            } </span>
            <span className='card-footer-content'>{restaurent?.deliveryTime} mins </span>
            <span className='card-footer-content'>Rs - {restaurent?.costForTwo / 100}</span>
          </div>
        </div>
        {showButton && <button className='view-more-button' onClick={()=>navigate('/restaurent/' + restaurent.id)}>Quick View</button>}
      </div>
    </Link>
  ) 
}

export default RestaurentCard
