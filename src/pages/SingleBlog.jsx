import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { deleteBlog, getSingleBlog } from '../utils/api/News'
import {useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'



export default function SingleBlog() {
  const [data, setData] = useState({})
  const navigate = useNavigate()
  const url_parms = useParams()

  const getBlog = async () => {

    console.log(url_parms.id)
    await getSingleBlog(url_parms.id).then((Response)=>{
      console.log('Single data response', Response.data);
      setData(Response.data)
    })
  }

  const handleDeleteBlog = async () => {
    await deleteBlog(url_parms.id).then(res=>{
      toast.success('Blog deleted successfully')
      navigate('/')
    })
  }

  const goto = () => {
    navigate(`/single/${url_parms.id}/edit`)
  }
  useEffect(()=>{
    getBlog()
  }, [])


  return (
    <div>
      <Header/>
      <div className="min-h-[80vh] p-20">
        <div className=" py-10 flex gap-5">
          <span onClick={goto} className='p-3 px-5 rounded hover:bg-blue-500 bg-blue-400 cursor-pointer flex items-center gap-2'><i className='pi pi-pencil'></i>Edit</span>
          <span onClick={handleDeleteBlog} className='p-3 px-5 rounded hover:bg-red-500 bg-red-400 cursor-pointer flex items-center gap-2'><i className='pi pi-trash'></i> Delete</span>
        </div>
        <div className="text-white overflow-hidden shadow">
          <div className="h-[50%]">
            <img src={data.img} className='w-[500px] h-full '/>
          </div>
          <div className='my-10 flex flex-col gap-5'>
            <h1 className='font-bold text-xl'>{data.title}</h1>
            <p>{data.content}<br/></p>
            <div className='bg-white h-[1px]'></div>
            <div className='py-1'>
              <p>{data.author}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
