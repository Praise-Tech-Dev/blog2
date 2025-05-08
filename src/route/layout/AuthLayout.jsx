import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AuthLayout() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setUserInfo(auth.user);
      console.log(typeof auth);
      console.log(auth.user);
    } else {
      console.log('User does not exit', userInfo);

    }
    }, [])
  return (
    <div>
      <div className=''>
        {userInfo?.username ?
            <Navigate to='/' />
            :
            <div>
              <Header/>
                <Outlet/>
              <Footer/>
            </div>
        

        }
      </div>
    </div>
  )
}
