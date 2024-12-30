import React from 'react'
import { ToysData} from '../data/Toys'

const Toys= () => {
    const firstFiveImages = ToysData.slice(0,11)
  return (
   <>
   <div className='proTitle'>
   <h2>Toys</h2>
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

export default Toys
