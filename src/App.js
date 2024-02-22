import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Service from './components/Service';
import Home from './components/Home';
import Signup from './components/Signup';
import Order from './components/Order';
import About from './components/About';
import { CiDeliveryTruck } from "react-icons/ci";
import './App.css';
function App() {
  return (
   <BrowserRouter>
   <div className='logo'>
        <h1>
        <CiDeliveryTruck /> PARCEL SERVICE
        </h1>
      </div>
   <ul>
   <li><Link to='/'>Home</Link></li>
   <li><Link to='/about'>About</Link></li>
    <li><Link to='/service'>Service</Link></li>
    <li><Link to='/order'>Ship Now</Link></li>
    <li><Link to='/signup'>Signin</Link></li> 
    
   </ul>
   <Routes>
   <Route path=''element={<Home/>}/>
   <Route path='/about'element={<About/>}/>
    <Route path='/service'element={<Service/>}/>
    <Route path='/order'element={<Order/>}/>
    <Route path='/signup'element={<Signup/>}/>

   </Routes>
   </BrowserRouter>
  );
}
export default App;