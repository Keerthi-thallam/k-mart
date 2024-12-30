import React from 'react'
import { StationeryData} from '../data/Stationery'

const Stationery= () => {
    const firstFiveImages = StationeryData.slice(0,11)
  return (
   <>
   <div className="proTitle">
   <h2>Stationery</h2>
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

export default Stationery
