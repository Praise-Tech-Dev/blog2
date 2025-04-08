import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className="h-[10vh] flex items-center justify-between px-5 md:px-10 lg:px-20 shadow-lg bg-gray-700 text-white ">
        <div className="text-xl font-bold text-blue-400 uppercase">Praiso <em className='text-white not-italic'>Blog</em></div>
        <nav className=''>
            <ul className='flex'>
                <Link to={'/'}><li className='py-2 px-5 cursor-pointer hover:bg-gray-400 rounded'>Home</li></Link>
                <Link to={'/add'}><li className='py-2 px-5 cursor-pointer hover:bg-gray-400 rounded'>Add New</li></Link>
                <Link to={'/login'}><li className='py-2 px-5 cursor-pointer hover:bg-gray-400 rounded'>Login</li></Link>
            </ul>
        </nav>
      </div>
    </div>
  )
}
