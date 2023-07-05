import React, { useState } from 'react'
import RestaurentMenuItem from '../RestaurentMenuItem'
import {IoIosArrowDown , IoIosArrowUp} from 'react-icons/io'
import './style.css'
function RestaurentMenus({ menus }) {
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  return (
    <div className='RestaurentMenus-cont'>
      <div className='menus-header-container' onClick={()=>{setIsMenuVisible(!isMenuVisible)}}>
        <h3 style={{color: '#3e4152',
    fontWeight: 800}}>{menus?.title} ({menus?.itemCards.length})</h3>
        {!isMenuVisible ? <IoIosArrowDown size={30} color='#a9abb2' /> : <IoIosArrowUp size={30} color='#a9abb2' />}
      </div>
      {isMenuVisible ? <div>
        {menus?.itemCards?.map((menu) => {
          return <RestaurentMenuItem menu={menu?.card?.info} />
        })}
      </div> : <>
        <div className='empty-place'></div>
      </>}
    </div>
  )
}

export default RestaurentMenus
