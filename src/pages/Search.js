import React from 'react'
import SearchBar from '../components/SearchBar'
import PopularCusineCard from '../components/PopularCusineCard'
import './style.css'
import { useEffect } from 'react'
import { useState } from 'react'

function Search() {

 const [popularCusine , setPopularCusine] =  useState([])


useEffect(()=>{
  getPopularCusins()
},[])


const getPopularCusins = async () =>{
  const res = await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=28.6105073&lng=77.1145653')
  const popular = await res.json()

  if(popular){
    setPopularCusine(popular?.data?.cards[1]?.card?.card?.imageGridCards?.info)
  }
}
console.log(popularCusine , "++++")

const handleSearch = () =>{
 
}



  return (
    <div className='search-page'>
      <SearchBar onChange={handleSearch} />
    <div>
      <h3 className='popular-cusine-title'>Popular Cuisines</h3>
      <div className='cusine-container'>
        {
          popularCusine?.map((cusine)=>{
            return <PopularCusineCard cusine={cusine} key={cusine?.id}/>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Search