import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../component/PrivateRoute'
import Home from './Home'
import Inspiration from './Inspiration'
import Login from './Login'
import Payment from './Payment'
import Pricing from './Pricing'
import Products from './Products'
import Resources from './Resources'
import Signup from './Signup'

const Allroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/payment" element={
            <PrivateRoute>
            <Payment/>
            </PrivateRoute>
            }/>
            <Route path="/inspirtion" element={<Inspiration/>}/>
            <Route path="/pricing" element={
            <Pricing/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/resoureces" element={<Resources/>}/>
        </Routes>
      
    </div>
  )
}

export default Allroutes
