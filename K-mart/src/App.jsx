     import React from 'react'
     import {Routes,Route} from 'react-router-dom'
     import'./App.css'
     import Landingpage from './stores/pages/Landingpage'
import Biscuitspage from './stores/pages/Biscuitspage'
import Chainspage from './stores/pages/Chainspage'
import Chocolatespage from './stores/pages/Chocolatespage'
import Drinkspage from './stores/pages/Drinkspage'
import Jhumkaspage from './stores/pages/Jhumkaspage'
import Kurkurepage from './stores/pages/Kurkurepage'
import Layspage from './stores/pages/Layspage'
import Nailpolishpage from './stores/pages/Nailpolishpage'
import Shampoospage from './stores/pages/Shampoospage'
import Soapspage from './stores/pages/Soapspage'
import Stationerypage from './stores/pages/Stationerypage'
import Toyspage from './stores/pages/Toyspage'
import Watchespage from './stores/pages/Watchespage'
import BiscuitsSingle from './singles/BiscuitsSingle'
import UserCart from './stores/UserCart'
  
     
     const App = () => {
       return (
         <div>
          <Routes>
            <Route path="/" element = {<Landingpage />}/>
            <Route path = '/Biscuits'element = {<Biscuitspage/>}/>
            <Route path = '/Chains' element = {<Chainspage/>}/>
            <Route path = '/Chocolates' element = {<Chocolatespage/>}/>
            <Route path = '/Drinks' element = {<Drinkspage/>}/>
            <Route path = '/Jhumkas' element = {<Jhumkaspage/>}/>
            <Route path = '/Kurkure' element = {<Kurkurepage/>}/>
            <Route path = '/Lays'element = {<Layspage/>}/>
            <Route path = '/Nailpolish' element = {<Nailpolishpage/>}/>
            <Route path = '/Shampoos' element = {<Shampoospage/>}/>
            <Route path = '/Soaps' element = {<Soapspage/>}/>
            <Route path = '/Stationery' element = {<Stationerypage/>}/>
            <Route path = '/Toys' element = {<Toyspage/>}/>
            <Route path = '/Watches' element = {<Watchespage/>}/>
            <Route path = '/Biscuits/:id' element = {<BiscuitsSingle/>}/>
            <Route path = '/cart' element = {<UserCart />}/>

           
          </Routes>

         </div>
       )
     }
     
     export default App
       