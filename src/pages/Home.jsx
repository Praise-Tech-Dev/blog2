import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import BlogComponents from '../components/BlogComponents'
import { getAllBlog} from '../utils/api/News'



export default function Home() {

    const [newsData, setNewsData] = useState([])

    

    // const getBlogData = async () => {
    //     const res = await fetch(url_base)
    //     const data = await res.json()
    //     console.log('mydata is', data, typeof(data))

    //     setNewsData(data)
    // }

    const getBlogData = async () => {
        await getAllBlog().then((res)=>{
            console.log(res.data);
            setNewsData(res.data)
        })
    }

    useEffect(() => {
        getBlogData()
        console.log('How are you');
    }, [])

  return (
    <div>
      <div className='sticky top-0 z-50'><Header/></div>
      <div className="flex flex-wrap gap-10 m-auto justify-between p-5 md:p-10 lg:p-20 min-h-[80vh]">
        {
            newsData.length > 0 ? 
            newsData.map((my_data, index) => {
                return (
                    <BlogComponents
                        data={my_data} 
                    />
                )
            })
            :
            <div>
                <h1 className='text-white text-4xl'>NO Data</h1>
            </div>
        }
      </div>
      <Footer/>
    </div>
  )
}
