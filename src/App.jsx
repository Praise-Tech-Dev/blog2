import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';

import Router from './route/Router'

function App() {

  return (
    <div className='bg-gray-800'>
      <div>
        <ToastContainer
          position='top-right'
        />
      </div>
      <Router />
      
    </div>
  )
}

export default App
