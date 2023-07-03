import React, { useEffect , useState } from 'react'
import Header from '../components/Header'
import Loader from '../components/Loader'
import RestaurentCard from '../components/RestaurentCard'
import { ALL_RESTAURENT_API } from '../utils/contants'
import './style.css'

function Home() {
  const [allRestaurents, setAllRestaurents] = useState([])
  useEffect(() => {
    getAllRestaurents()
  }, [])

  const getAllRestaurents = async () => {
    const response = await fetch(ALL_RESTAURENT_API)
    const data = await response.json()
    setAllRestaurents(data?.data?.cards[2]?.data?.data?.cards)
  }

  return !allRestaurents.length ? <Loader /> : (
    <div className='home-page'>
      <Header length={allRestaurents?.length} />
      <div className='home-card-container'>
        {
          allRestaurents.map((restaurent) => {
            return <RestaurentCard restaurent={restaurent?.data} />
          })
        }
      </div>
    </div>
  )
}

export default Home
