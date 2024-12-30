import React from 'react'
import { ChocolatesData } from '../data/chocolates'

const Chocolates = () => {
    const firstFiveImages = ChocolatesData.slice(0,11)
  return (
  <>
  <div className="proTitle">
  <h2>Chocolates</h2> 
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

export default Chocolates
