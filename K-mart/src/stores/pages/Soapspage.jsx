import React from 'react'
import { SoapsData } from '../data/Soaps'
import Navbar from '../components/Navbar'

const Soapspage = () => {
  return(
    <>
    <Navbar/>
    <div className='pageSection'>
        {SoapsData.map((item)=>{
            return(
                <div>
                    <div className='pageImg'>
                      <img src = {item.image} alt = ""/>
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

export default Soapspage;
