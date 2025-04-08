import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogComponents({data}) {

  return (
    <div className='md:w-[45%] lg:w-[30%] bg-gray-700 text-white overflow-hidden shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px]'>
        <div className="h-[50%]">
            <img src={data.img} className='w-full h-full' alt=''/>
        </div>    
        <div className='p-5 flex flex-col gap-5'>
            <h1 className='font-bold text-xl'>{data.title}</h1>
            <div><p>{data.content.slice(0,100)}</p>...<br/><Link to={`/single/${data.id}`} className='bg-blue-600 py-1 px-3 rounded cursor-pointer hover:bg-blue-500 w-fit'>read more</Link></div>
            <div className='bg-white h-[1px]'></div>
            <div className='py-1'>
                <p>{data.author}</p>
            </div>
        </div>
    </div>
  )
}
