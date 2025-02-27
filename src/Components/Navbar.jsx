import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { PiShoppingCartLight } from "react-icons/pi";
import {CartContext} from '../Context/CartContext'

function Navbar() {
  const {cartItems} = useContext(CartContext);
  return (
    <>
    <nav className='flex justify-between items-center p-4 shadow-md h-20 sticky top-0 bg-green-200'>
      <Link className='flex flex-row' to='/'><img className='w-20 h-20' src='./src/assets/Logo.png'/></Link>
      <div className='text-2xl font-semibold'>E - Shopping Portal</div>
      <div className='flex justify-around gap-5 shadow-md'>
      <Link className='flex flex-row' to='/'><img className='w-10 h-10 rounded-full' src='./src/assets/Home Logo.png'/></Link>
        <Link className='text-2xl font-semibold' to='/Shop'>Products</Link>
        <Link className='text-2xl font-semibold relative' to='/Cart' >
        <PiShoppingCartLight size={30} className='pt-2'/>

        {cartItems.length>0 && (
          <span className='absolute -top-2 -right-2 rounded-full px-1 bg-green-500'>{cartItems.length}</span>
        )}
        </Link>
        <Link className='text-2xl font-semibold' to='/'>SignIn | SignUp</Link>
    
    </div>
    </nav>
    </>
  )
}

export default Navbar