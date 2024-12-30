import React from 'react'
import { DrinksData } from '../data/Drinks'

const Drinks = () => {
    const firstFiveImages = DrinksData.slice(0,11)
  return (
   <>
   <div className="proTitle">
   <h2>Drinks</h2>
   </div>
   
   <div className='prosection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img  className='proimage'src={item.image} alt="" />
                </div>
            )

        })
      }
    </div>
   
   
   </>
  )
}

export default Drinks
