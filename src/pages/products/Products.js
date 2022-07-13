import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Card from '../../components/card/Card'
import data from '../../data'
import "./Product.css"

const Products = () => {

  console.log(data)
  let itemCard = data.map(item =>
    <Card
      name={item.name}
      image={item.image_url}
      price={item.price}
    // description={item.description}
    />
  )

  return (
    <div className='background min-h-screen'>
      <Navbar />
      <div className='text-center my-4'>
        <h3>Taste home-baked goodness</h3>
        <p>It's sweet, it's fluffy, it's delicious, it's right here!</p>
        <p className='mt-10'>All | bread | cakes | cupcakes </p>
      </div>
      {/* product card div */}
     
      <div className=' w-5/6 h-5/6 grid grid-cols-1 mx-auto sm:grid-cols-2 md:grid-cols-4'>
        {itemCard}
      </div>
    </div>
  )
}

export default Products
