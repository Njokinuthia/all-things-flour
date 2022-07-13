import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const Contact = () => {
  return (
    <div className='background  min-h-screen'>
      <Navbar />
      <div className='container border mx-auto my-10 w-full flex flex-col md:flex-row md:w-5/6'>       
        <div className='border w-5/6 mx-auto md:w-2/5 space-y-16'>
          <div >
            <h3 className='my-4 font-bold text-xl'>Opening Hours</h3>
            <div className='flex justify-between'>
              <div >
                <p>Monday - Thursday</p>
                <p>Monday - Thursday</p>
                <p>Monday - Thursday</p>
              </div>
              <div>
                <p>0800 - 1600</p>
                <p>0800 - 1600</p>
                <p>0800 - 1600</p>
              </div>
            </div>     
          </div>
          <div>
            <h3 className='my-4 font-bold text-xl'> Contact Us</h3>
            <div className='flex justify-between'>
              <div >
                <p>phone</p>
                <p>email</p>
                <p>pin</p>
              </div>
              <div>
                <p>+254701222222/ +254702333333</p>
                <p>allthingsflour@gmail.com</p>
                <p>location building 3rd floor nairobi</p>
              </div>
            </div>
          </div>
        </div>

        {/* map */}
        <div className='w-full md:w-3/5 text-center'>map image</div>


      </div>  
      <div className='container border mx-auto my-10 w-full md:w-5/6 text-center'>
        <p>icons</p>
        <p>www.allthingsflour.com</p>
      </div>
    </div>
  )
}

export default Contact
