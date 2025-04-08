import React from 'react'

export default function Form() {
  return (
    
    <div className='bg-gray-700 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
      <h1 className='text-5xl  font-bold my-2'>Sign in</h1>
      <p className='text-[20px]'>Stay updated on your news with PraiseBlog </p>
      <form className='flex flex-col '>
        <input type="text" placeholder='Email or Phone' className='border-[1px] border-white p-4 mt-7'/>
        <input type='password' placeholder='Password' className='border-[1px] border-white p-4 mt-7' />
        <a href='' className='my-3 text-blue-400'>Forgot Password?</a>
        <button className='bg-blue-600 hover:bg-blue-500 rounded-4xl p-3 text-[16px]'>Sign in</button>
        <p className='text-center'>or</p>
        <button className='bg-transparent border-white border-[1px] rounded-4xl p-3 text-[16px]'>
        <div><i class='pi pi-apple' className="text-white text-2xl"></i>Sign in with Apple </div>
            
        </button>
      </form>
      
    </div>
  )
}
