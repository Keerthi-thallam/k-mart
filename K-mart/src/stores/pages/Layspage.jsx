import React from 'react';
import { LaysData} from '../data/Lays';
import Navbar from '../components/Navbar';
const Layspage = () => {
    return(
        <>
        <Navbar/>
        <div className='pageSection'>
            {LaysData.map((item)=>{
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
export default Layspage;