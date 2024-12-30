import React from 'react'
import { JhumkasData } from '../data/Jhumkas'

const Jhumkas = () => {
    const firstFiveImages = JhumkasData.slice(0,11)
  return (
   <>
   <div className="proTitle">
   <h2>Jhumkas</h2> 
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

export default Jhumkas