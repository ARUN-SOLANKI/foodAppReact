import React from 'react'
import { FSSAI_IMAGE_URL } from '../../utils/contants'
import './style.css'

function Fassai({details}) {
  return (
    <div className='fassai-container'>
        <img src={FSSAI_IMAGE_URL + details.imageId}  className='fassai-img'/>
        <h2 className='fassai-text'>{details.text[0]}</h2>
    </div>
  )
}

export default Fassai
