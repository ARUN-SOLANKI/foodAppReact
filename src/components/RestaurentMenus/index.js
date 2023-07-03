import React, { useState } from 'react'
import RestaurentMenuItem from '../RestaurentMenuItem'
import './style.css'
function RestaurentMenus({ menus }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <div className='RestaurentMenus-cont'>
      <div className='menus-header-container'>
        <h3>{menus?.title} ({menus?.itemCards.length})</h3>
        <button onClick={()=>{
          setIsMenuVisible(!isMenuVisible)
        }}>{!isMenuVisible ? 'View' : 'close'}</button>
      </div>
      {isMenuVisible && <div>
        {menus?.itemCards?.map((menu) => {
          return <RestaurentMenuItem menu={menu?.card?.info} />
        })}
      </div>}
    </div>
  )
}

export default RestaurentMenus
