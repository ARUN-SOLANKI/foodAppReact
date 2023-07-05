import React from 'react'
import {PiAddressBookThin} from 'react-icons/pi'
import './style.css'

function FooterAddress({ details }) {
  console.log(details, '+++_+_+_+_+_+_')
  return (
    <div className='footer-address-container'>
      <div className='footer-address-inner-container'>

        <p className='restaurent-title'>{details.name}</p>
        <p className='outlet-title'> ({details.area})</p>
        <div className='address-container'>
          <PiAddressBookThin size={20} />
          <p className='address'>{details.completeAddress}</p>
        </div>
      </div>
    </div>
  )
}

export default FooterAddress
