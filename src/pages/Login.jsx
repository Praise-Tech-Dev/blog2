import React from 'react'
import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'


export default function Login() {
  return (
    <div>
      <Header/>
      <div className='min-h-[75vh]'>
        <Form/>
        <div className='flex justify-center gap-3 text-white text-center text-[20px]'>
          <p>New to PraiseBlog?</p>
          <Link to={'/signup'}className='text-blue-400'>Join now</Link> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}
