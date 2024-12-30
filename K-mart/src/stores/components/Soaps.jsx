import React from 'react'
import { SoapsData} from '../data/Soaps'

const Soaps= () => {
    const firstFiveImages = SoapsData.slice(0,11)
  return (
  <>
  <div className = "proTitle">
  <h2>Soaps</h2>
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

export default Soaps
