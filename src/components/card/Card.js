import React from 'react'
import "./Card.css"


const Card = ({ name, image, price }) => {
  return (
    <div className='border my-6 mx-4 curved'>
      <div className='card'>
        <img className="curved" src={image} height="30" alt="item"></img>

      </div>
      <div className='bg-white details'>
        <div className='flex flex-col justify-between mx-4 py-2 md:flex-row '>
          <p className='brown text-base font-semibold'>{name}</p>
          <p className='caramel text-base font-extrabold'>Ksh {price}</p>
        </div>
        <div className='border my-6 mx-10' >
          <p className='text-center'>Add to Cart</p>
        </div>
      </div>
    </div>

  
  )
}

export default Card
