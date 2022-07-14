import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <nav className="relative container mx-auto p-6 text-white w-5/6 font-black">
        <div className='flex items-center justify-between md:flex-row ' >
          <div>
            <p>ALL <span className='caramel font-black'>THINGS</span> FLOUR</p>
          </div>

          <div class="hidden md:flex md:w-1/2 md:justify-between">
            <NavLink className="hover:text-red-600" exact to="/">Home</NavLink>
            <NavLink exact to="/about">About</NavLink>
            <NavLink exact to="/products">Products</NavLink>
            <NavLink exact to="/contact">Contact</NavLink>
            {/* <NavLink exact to="/products">ORDER NOW</NavLink> */}
          </div>
          <div className='hidden md:flex'>
            <NavLink exact to="/products">ORDER NOW</NavLink>
          </div>

          {/* hamburgar menu */}
          <div className="  md:hidden">
            menu
          </div>
        </div>

        {/* hambuger icon */}

        <div>
          <button id="menu-btn" className="block hambuger md:hidden focus:outine-none">
            <span className="hambuger-top"></span>
            <span className="hambuger-middle"></span>
            <span className="hambuger-bottom"></span>
          </button>
        </div>

        <div id="menu" className="border absolute flex flex-col items-end self-end py-2 space-y-2 font-bold sm:w-auto left-6 right-6 drop-shadow-md md:hidden">
          <NavLink exact to="/">Home</NavLink>
          <NavLink exact to="/about">About</NavLink>
          <NavLink exact to="/products">Products</NavLink>
          <NavLink exact to="/contact">Contact</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar
