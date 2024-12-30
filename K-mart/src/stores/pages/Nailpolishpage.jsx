import React from 'react'
import {NailpolishData} from '../data/Nailpolish'
import Navbar from '../components/Navbar'
const Nailpolishpage = () => {
    return(
        <>
        <Navbar/>
        <div className='pageSection'>
            {NailpolishData.map((item)=>{
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
            }
            )}
        </div>
        </>
    )
}
export default Nailpolishpage;