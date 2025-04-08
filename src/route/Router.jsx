import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleBlog from '../pages/SingleBlog'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'
import Edit from '../pages/Edit'
import Add from '../components/Add'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/single/:id' element={<SingleBlog />}/>
            <Route path='single/:id/edit' element={<Edit/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/add' element={<Add/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
