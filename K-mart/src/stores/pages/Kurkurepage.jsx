import React from 'react';
import { KurkureData } from '../data/Kurkure';
import Navbar from '../components/Navbar';
const Kurkurepage = () => {
    return(
        <>
        <Navbar/>
        <div className='pageSection'>
            {KurkureData.map((item)=>{
                return(
                    <div>
                        <div className='pageImg'>
                            <img src= {item.image} alt = ""/>
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
export default Kurkurepage;