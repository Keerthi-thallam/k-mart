import React from 'react'
import { ShampoosData } from '../data/Shampoos'
import Navbar from '../components/Navbar'

const Shampoospage = () => {
  return (
    <>
    <Navbar/>
    <div className='imagesection'>
        {ShampoosData.map((item)=>{
            return(
                <div>
                    <div className='pageImg'>
                      < img src = {item.image} alt = ""/>
                    </div>
                    <div className='proModel'>
                      {item.company},{item.model}
                    </div>
                </div>
            )
        })}
      
    </div>

    
    </>
  )
}

export default Shampoospage;
