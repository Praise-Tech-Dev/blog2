import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import { addNewBlog } from '../utils/api/News'

export default function Add() {

  const [imageUrl, setImageUrl] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent ] = useState('')
  const [author, setAuthor] = useState('')

  const navigate =  useNavigate()

  const submitForm = async (e) => {
    e.preventDefault()
    const form ={
      img: imageUrl,
      title: title,
      content: content,
      author: author
    }

    await addNewBlog(form).then((res)=>{
      console.log('Blog added successfully', res.data.id)
      navigate(`/single/${res.data.id}`)
    })
  }

  return (
    <div>
        <Header/>
        <div className='min-h-[75vh]'>
            <div className='bg-gray-700 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
                <h1 className='text-3xl'>Add Blog Request Form </h1>
                <form className='flex flex-col '>
                    <input type='url' onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} placeholder='Enter your news image url here' className='border-[1px] border-white p-4 mt-7' />
                    <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter the new title for your news' className='border-[1px] border-white p-4 mt-7' />
                    <input type="text" onChange={(e) => setContent(e.target.value)} value={content} placeholder='Enter the content for the news'   className='border-[1px] border-white p-4 mt-7 h-[100px]'/>
                    <input type="text" onChange={(e) => setAuthor(e.target.value)} value={author}  placeholder='Enter the author for the news' className='border-[1px] border-white p-4 mt-7' />
                    <button onClick={(e) =>submitForm(e)} className='bg-blue-600 hover:bg-blue-500 rounded-4xl p-3 text-[16px] mt-7'>Submit</button>
                </form>
            </div>
        </div>
        
        <Footer/>  
    </div>
  )
}
