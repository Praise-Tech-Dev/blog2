import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/Footer';

export default function Sections() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if (auth) {
      setUserInfo(auth.user);
      console.log(typeof auth);
      console.log(auth.user);
    } else {
      console.log("User does not exist", userInfo);
    }
    }, []);
  return (
    <div>
      {!userInfo?.username ? (
          <Navigate to="/auth/login" />
        ) : (
          <div>
            <Header/>
            <Outlet/>
            <Footer/>
          </div>
        )}
    </div>
  );
}
