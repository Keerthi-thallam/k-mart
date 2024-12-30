import React from 'react'
import { WatchesData} from '../data/Watches'

const Watches= () => {
    const firstFiveImages = WatchesData.slice(0,11)
  return (
  <>
  <div className="proTitle">
  <h2>Watches</h2>  
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

export default Watches
