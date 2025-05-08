import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import Router from './route/Router'
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className='bg-gray-800'>
      <div>
        <ToastContainer
          position='top-right'
        />
      </div>
      <Router />
      
    </div>
    </RecoilRoot>
    
  )
}

export default App
