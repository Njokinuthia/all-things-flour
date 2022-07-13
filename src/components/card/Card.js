import React from 'react'
import "./Card.css"


const Card = ({ name, image, price }) => {
  return (
    <div className='card my-6 mx-4 '>
      <div className='w-full'>
        <img src={image} alt="item"></img>
      </div>
      <div className='bg-white det'>
        <div className='flex flex-col justify-between mx-4 md:flex-row '>
          <p className='brown text-base font-semibold'>{name}</p>
          <p className='caramel text-base font-extrabold'>Ksh {price}</p>
        </div>
        <p className='text-center'>Add to Cart</p>
      </div>      
    </div>

  )
}

export default Card
