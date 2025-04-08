import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div>
        <Header/>
        <div className='min-h-[80vh]'>
            <div className='bg-gray-700 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
                <h1 className='text-5xl  font-bold my-2'>Sign up</h1>
                <p className='text-[20px]'>Stay updated on your news with PraiseBlog </p>
                <form className='flex flex-col '>
                    <input type="text" placeholder='Email or Phone' className='border-[1px] border-white p-4 mt-7'/>
                    <input type='password' placeholder='Password' className='border-[1px] border-white p-4 mt-7' />
                    <input type='password' placeholder='Confirm Password' className='border-[1px] border-white p-4 mt-7' />
                    <button className='bg-blue-600 hover:bg-blue-500 rounded-4xl p-3 text-[16px] mt-7 '>Sign Up</button>
                    
                </form>
                
            </div>
            <div className='flex justify-center gap-3 text-white text-center text-[20px]'>
              <p>Already have an account?</p>
              <Link to={'/login'}className='text-blue-400'>Login now</Link>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
