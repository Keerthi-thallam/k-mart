import React from 'react'
import { NailpolishData} from '../data/Nailpolish'

const Nailpolish= () => {
    const firstFiveImages = NailpolishData.slice(0,11)
  return (
   <>
   <div className = "proTitle">
   <h2>Nailpolish</h2>
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

export default Nailpolish
