import React from 'react';
import { StationeryData } from '../data/Stationery';
import Navbar from '../components/Navbar';

const Stationerypage = () => {
  return (
    <>
    <Navbar/>
    <div className='pageSection'>
        {StationeryData.map((item)=>{
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

export default Stationerypage;
