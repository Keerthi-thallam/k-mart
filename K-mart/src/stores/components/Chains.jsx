import React from 'react'
import { ChainsData } from '../data/Chains'

const Chains = () => {
    const firstFiveImages = ChainsData.slice(0,11)
  return (
    <>
    <div className="proTitle">
    <h2>Chains</h2>
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

export default Chains
