import React from 'react'
import { KurkureData } from '../data/Kurkure'

const Kurkure = () => {
    const firstFiveImages = KurkureData.slice(0,11)
  return (
   <>
   <div className="proTitle">
   <h2>Kurkure</h2>
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

export default Kurkure