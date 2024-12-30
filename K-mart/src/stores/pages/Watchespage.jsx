import React from 'react'
import { WatchesData } from '../data/Watches'
import Navbar from '../components/Navbar'

const Watchespage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {WatchesData.map((item)=>{
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
        }

        )}
    </div>
    
    </>

  )
}

export default Watchespage;
