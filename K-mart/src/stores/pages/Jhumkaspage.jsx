import React from 'react';
import { JhumkasData} from '../data/Jhumkas';
import Navbar from '../components/Navbar';

const Jhumkaspage = () => {
    return (
        <>
        <Navbar/>
        <div className='pageSection'>
            { JhumkasData.map((item)=>{
                return(
                    <div>
                        <div className='pageImg'>
                            < img src = {item.image} alt =""/>
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
export default Jhumkaspage;