import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { editBlog, getSingleBlog } from '../utils/api/News'
import { toast } from 'react-toastify'

export default function Edit() {

  const [imageUrl, setImageUrl] = useState('')
  const [title, setITitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [loading, setLoading] = useState('false')

  const navigate = useNavigate()
  const [data, setData] = useState({})
  const url_parms = useParams()
  const getSingleData = async () => {
    await getSingleBlog(url_parms.id).then((res)=>{
      setImageUrl(res.data.img)
      setITitle(res.data.title)
      setContent(res.data.content)
      setAuthor(res.data.author)
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      img: imageUrl,
      title: title,
      content: content,
      author: author
    }

    console.log(payload)
    await editBlog(payload, url_parms.id).then(res=>{
      console.log('Blog edited successfully', res.data)
      toast.success('Blog edited successfully')
    }).catch((err)=>{
      console.log(`Error occured: ${err}`);
      toast.error(`Error occured: ${err}`);
    });
    navigate(`/single/${url_parms.id}`)
  }


  useEffect(()=>{
    getSingleData()
  }, [])
  
  return (
    <div>
        <Header/>
        <div className='min-h-[80vh]'>
            <div className='bg-gray-700 text-white shadow hover:shadow-lg hover:shadow-gray-600 rounded-[10px] w-[80%] md:w-[80%] lg:w-[30%] p-[40px] my-10 m-auto'>
                <h1 className='text-3xl'>Edit Blog Request Form </h1>
                <form className='flex flex-col '>
                    <input value={imageUrl} onChange={(e) =>setImageUrl(e.target.value)} type='url' placeholder='Enter your news image url here' className='border-[1px] border-white p-4 mt-7' />
                    <input value={title} onChange={(e)=>setITitle(e.target.value)} type="text" placeholder='Enter the title of your news' className='border-[1px] border-white p-4 mt-7' />
                    <input value={content} onChange={(e)=>setContent(e.target.value)} type="text" placeholder='Enter the content for the news' className='border-[1px] border-white p-4 mt-7 h-[100px]' />
                    <input value={author} onChange={(e)=>setAuthor(e.target.value)} type="text" placeholder='Enter the author for the news' className='border-[1px] border-white p-4 mt-7' />
                    <button onClick={(e)=>handleSubmit(e)} className='bg-blue-600 hover:bg-blue-500 rounded-4xl p-3 text-[16px] mt-7 '>Submit</button>
                </form>
            </div>
        </div>
        
        <Footer/>  
    </div>
  )
}
