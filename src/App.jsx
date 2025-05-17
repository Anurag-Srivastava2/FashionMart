import React from 'react'
import ProductListing from './component/Screens/ProductListing'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Utility component/Header.jsx';
import { Sidebar } from 'lucide-react';
import Cart from './component/Screens/Cart.jsx';
import ProductDetail from './component/Screens/ProductDetail.jsx';
import AboutUs from './component/Screens/AboutUs.jsx';
import Login from './component/Screens/Login.jsx';



const App = () => {
  return (
    <>
   < BrowserRouter>
     <Header/><br></br>
     <Sidebar/>
      <Routes className=" my-12">
        
        <Route path='/' element={<ProductListing/>} />
        <Route path='/product-details/:id' element={<ProductDetail/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/about_us' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App