import React from 'react'
import { LaysData } from '../data/Lays'

const Lays= () => {
    const firstFiveImages = LaysData.slice(0,11)
  return (
    <>
    <div className = "proTitle">
    <h2>Lays</h2>
    </div>
    
    <div className='prosection'>

      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imgBox'>
                    <img  className='proimage'src={item.image} alt="" style={{height:"200px"}} />
                </div>
            )

        })
      }
    </div>
    </>
  )
}

export default Lays
