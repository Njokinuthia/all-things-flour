import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6 text-white w-5/6">
      <div className='flex flex-col items-center justify-between md:flex-row ' >
        <div>
          <p>ALL <span className='text-red-600'>THINGS</span> FLOUR</p>
        </div>
        <div class="flex flex-col  space-x-16 md:flex-row">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/products">Products</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </div>
        <div>
          <NavLink exact to="/products">ORDER NOW</NavLink>         
        </div>
      </div>    
    </nav>
  )
}

export default Navbar
