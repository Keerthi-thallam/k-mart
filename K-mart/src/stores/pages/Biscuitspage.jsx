import React, { useState } from 'react'
import { BiscuitsData} from '../data/Biscuits'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Biscuitspage = () => {
 const [selectedProduct,setSelectedProduct] = useState([])
 const companyHandler=(mango)=>{

   if(selectedProduct.includes(mango)){
    setSelectedProduct(selectedProduct.filter(item => item!=mango))
   }else{
    setSelectedProduct([...selectedProduct,mango])
   }

 }

  const filteredProduct = selectedProduct.length===0?
    BiscuitsData : BiscuitsData.filter((orange)=>selectedProduct.includes(orange.company))


  return (
  <>
  <Navbar/>
  <div className="fullpage">
  <div className="pro-selected">
    {BiscuitsData.map((biscuit)=>{
      return(
        <div className='pro-input'>
          <label>
            <input type= "checkbox" 
            checked = {selectedProduct.includes(biscuit.company)}
            onChange={()=>companyHandler(biscuit.company)}
             />
             {biscuit.company}
          </label>
        </div>
      )
    })}
  </div>
      <div className='pageSection'>
        { filteredProduct.map((item)=>{
            return(
                <div>

                  <Link to={ `/Biscuits/${ item.id}`}>
                    <div className="pageImg">
                        <img src={item.image} alt=""/>
                    </div>
                  </Link>
                    <div className="proModel">
                      {item.company},{item.model}
                    </div>
                </div>
            )
        })}
        </div>





  </div>

 
  
  </>
  )
}

export default Biscuitspage
