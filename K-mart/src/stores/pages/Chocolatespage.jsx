import React from 'react';
import { ChocolatesData } from '../data/Chocolates';
import Navbar from '../components/Navbar';
const Chocolatespage = () => {
    return(
        <>
        <Navbar/>
         <div className='pageSection'>
            { ChocolatesData.map((item)=>{
                return(
                    <div>

                        <div className='pageImg'>
                            <img src = {item.image} alt =""/>
                    </div>
                    <div className = 'proModel'>
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
export default Chocolatespage;