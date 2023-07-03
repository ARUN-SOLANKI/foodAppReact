import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router'
import DiscountCard from '../components/DiscountCard'
import Loader from '../components/Loader'
import RestaurentHeader from '../components/RestaurentHeader'
import RestaurentMenus from '../components/RestaurentMenus'
import { dataTypes, RESTAURENT_DETAILS_API } from '../utils/contants'

function Restaurent() {
  const [restaurentDetails, setRestaurentDetails] = useState(null)
  const {resId} = useParams()
  useEffect(() => {
    getRestaurentDetails()
  }, [])


  const getRestaurentDetails = async () =>{
    try {
    const response = await fetch(RESTAURENT_DETAILS_API +"restaurantId=" + resId)
    const data = await response.json()
    setRestaurentDetails(data?.data?.cards)
    } catch (error) {
      console.log(error)
    }
  }


  // console.log(restaurentDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  return !restaurentDetails ? <Loader /> : (
    <div className='restaurent-detail-page'>
      <RestaurentHeader restaurentDetails = {restaurentDetails[0]?.card?.card?.info} />
      <div className='discount-card-section'>
      {
        restaurentDetails[1]?.card?.card?.gridElements?.infoWithStyle?.offers.map((offer , index)=>{
          return <DiscountCard offer={offer} key={index} />
        })
        }
      </div>
      <div className='menus-container'>
        {
          restaurentDetails[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((menu)=>{
            return  menu?.card?.card['@type'] == dataTypes.ITEM_CATEGORY && <RestaurentMenus  menus={menu?.card?.card}/>
          })
        }
      </div>
    </div>
  )
}

export default Restaurent
