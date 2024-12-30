import React from 'react'
import { ShampoosData} from '../data/Shampoos'

const Shampoos= () => {
    const firstFiveImages = ShampoosData.slice(0,11)
  return (
   <>
   <div className = "proTitle">
   <h2>Shampoos</h2>
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

export default Shampoos
