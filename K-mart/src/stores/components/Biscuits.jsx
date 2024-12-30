import React from 'react'
import { BiscuitsData } from '../data/Biscuits'

const Biscuits = () => {
    const firstFiveImages = BiscuitsData.slice(0,11)
  return (
   <>
   <div className="proTitle">
   <h2>Biscuits</h2>
   </div>
  
   <div>
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
    </div>
   </>
  )
}

export default Biscuits
