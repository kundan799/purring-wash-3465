import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Inspiration from './Inspiration'
import Pricing from './Pricing'
import Products from './Products'
import Resources from './Resources'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/inspirtion" element={<Inspiration/>}/>
            <Route path="/pricing" element={<Pricing/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/resoureces" element={<Resources/>}/>
        </Routes>
      
    </div>
  )
}

export default Allroutes
