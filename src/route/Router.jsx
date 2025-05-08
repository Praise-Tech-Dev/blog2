import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import SingleBlog from '../pages/SingleBlog'
import SignUp from '../pages/auth/SignUp'
import Sections from './layout/Sections'
import AuthLayout from './layout/AuthLayout'
import Edit from '../pages/Edit'
import Add from '../components/Add'
import Login from '../pages/auth/Login'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/single/:id' element={<SingleBlog />}/>
            <Route path='/' element={<Sections/>}>
              <Route path='single/:id/edit' element={<Edit/>}/>
              <Route path='/add' element={<Add/>}/>
            </Route>
            <Route path='/auth' element={<AuthLayout/>}>
              <Route path='login' element={<Login/>}/>
              <Route path='signup' element={<SignUp />}/>
            </Route>
            
            
        </Routes>
      </BrowserRouter>
    </div>
  )
}
