import React from 'react';
import {ChainsData} from '../data/Chains';
import Navbar from '../components/Navbar';

const Chainspage = () =>{
    return (
        <>
        <Navbar/>
        <div className='imagesection'>
            { ChainsData.map((item)=>{
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

            }

          ) }
        </div>


        </>
    )
}
export default Chainspage;