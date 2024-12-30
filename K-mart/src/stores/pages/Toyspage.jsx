import React from 'react'
import { ToysData } from '../data/Toys'
import Navbar from '../components/Navbar'

const Toyspage = () => {
  return (
   <>
   <Navbar/>
   <div className='pageSection'>
    {ToysData.map((item)=>{
        return(
            <div>
                <div className='pageImg'>
                    <img src = {item.image} alt =""/>
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

export default Toyspage;
