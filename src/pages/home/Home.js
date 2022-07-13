import React from 'react'
import "./Home.css"

import Navbar from '../../components/navbar/Navbar'

const Home = () => {
  return (
    <div className='homeImg w-full'>
      <Navbar />
      <div className='w-5/6 mx-auto mt-60 text-white'>
        <h1 className='font-extrabold text-6xl'>Taste <span>The <br></br> Fee</span>ling....</h1>
        <div>ORDER NOW</div>
      </div>
    </div>
  )
}

export default Home
