import React from 'react'
import "./About.css"
import Navbar from '../../components/navbar/Navbar'

const About = () => {
  return (
    <div className='background min-h-screen'>
      <Navbar />
      <div >
        <div className='container mx-auto my-10 w-full flex flex-col md:flex-row md:w-4/6'>
          <div className='baker w-full mx-auto md:w-1/2'></div>
          {/* <img src="/src/assets/baker.jpg" alt="baker"></img> */}
          <div className='ml-16 my-10 '>
            <h2 className='my-4 font-bold text-xl'>Our Story</h2>
            <p className='my-4'>All things flour</p>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quam, dignissimos fugiat?Voluptatibus nemo, possimus corrupti a dolor, voluptatum perspiciatis voluptas corporis aliquam pariatur odit dolore atque vitae architecto numquam!Error?Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quam, dignissimos fugiat? </p>
            <p className='my-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Quam, dignissimos fugiat?Voluptatibus nemo, possimus corrupti a dolor, voluptatum perspiciatis voluptas corporis aliquam pariatur odit dolore atque vitae architecto numquam!t dolore atque viLorem ipsum dolor sit amet consectetur, adipisicing elit.Quam, dignissimos fugiat?</p>
          </div>
        </div>
        <div className='container mx-auto text-center w-1/2'>
          <p >We're not just a bakery, we are your new best friend.</p>
        </div>
      </div>
      


    </div>
  )
}

export default About
