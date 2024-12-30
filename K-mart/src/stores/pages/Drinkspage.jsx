import Raect from 'react';
import { DrinksData } from '../data/Drinks';
import Navbar from '../components/Navbar';
const Drinkspage = () => {
    return(
        <>
        <Navbar/>
         <div className='pageSection'>
            { DrinksData.map((item)=>{
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
export default Drinkspage;