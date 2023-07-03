import React from 'react'
import discountIcon from '../../assets/images/discountIcon.webp'
import { IMAGE_URL_1 } from '../../utils/contants'
import './style.css'

function DiscountCard({offer}) {
  return (
    <button className='retaurent-discount-card'>
      <div className='discount-content'>
        <img src={IMAGE_URL_1 + offer?.info?.offerLogo} />
        <h3 className='discount-content-text' style={{color : offer?.info?.offerTagColor}}>{offer?.info?.header}</h3>
      </div>
      <p className='discount-content-subText'>
        <span>{offer?.info?.couponCode}</span>
        <span className='verticle-line'> </span>
        <span style={{color : offer?.info?.descriptionTextColor}}>{offer?.info?.description}</span>
      </p>
    </button>
  )
}

export default DiscountCard
