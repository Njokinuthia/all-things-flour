import React from 'react'
import Navbar from '../../components/navbar/Navbar'
// import data from '../../../data'
import data from '../../data'

const Products = () => {

  console.log(data)

  return (

    <div className='background min-h-screen'>
      <Navbar />
      <div className='text-center my-8 border'>
        <h3>Taste home-baked goodness</h3>
        <p>It's sweet, it's fluffy, it's delicious, it's right here!</p>
        <p className='mt-10'>All | bread | cakes | cupcakes </p>
      </div>
      {/* product card div */}
      <div className='border'>
        <p>product list</p>
      </div>
    </div>
  )
}

export default Products
