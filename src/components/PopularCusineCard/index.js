import React from 'react'
import { CUSINE_IMAGE_URL } from '../../utils/contants'

function PopularCusineCard({cusine}) {
  return (
      <img src={CUSINE_IMAGE_URL + cusine?.imageId} style={{height:140 , width:100}} />
  )
}

export default PopularCusineCard