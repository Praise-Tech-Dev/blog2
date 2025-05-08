import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userState } from "../utils/atom/userAtom";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { tokenState } from "../utils/atom/tokenAtom";

export default function Header() {
  const [menuIcon, setmenuIcon] = useState(false);
  const userInfo = useRecoilValue(userState);
  const removeUser = useResetRecoilState(userState);
  const removeToken = useResetRecoilState(tokenState);
  const changeMenu = () => {
    setmenuIcon(!menuIcon);
  };

  const handleLogout = () => {
    removeUser();
    removeToken();
    location.reload();
  };
  return (
    <div>
      <div className="h-[10vh] flex items-center justify-between px-5 md:px-10 lg:px-20 shadow-lg bg-gray-700 text-white ">
        <div className="text-xl font-bold text-blue-400 uppercase">
          Praiso <em className="text-white not-italic">Blog</em>
        </div>
        <nav className="">
          <ul className="hidden md:flex lg:flex">
            <Link to={"/"}>
              <li className="py-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                Home
              </li>
            </Link>

            {userInfo.username ? (
              <div className="flex">
                <Link to={"/add"}>
                  <li className="py-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                    Add New
                  </li>
                </Link>
                <span onClick={handleLogout}>
                  <li className="py-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                    Logout
                  </li>
                </span>
              </div>
            ) : (
              <div className="flex">
                <Link to={"/auth/login"}>
                  <li className="py-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                    Login
                  </li>
                </Link>
              </div>
            )}
          </ul>
        </nav>

        <div className="md:hidden">
          {menuIcon === true ? (
            <i
              onClick={changeMenu}
              className=" p-4 rounded-2xl  pi pi-times text-white"
            ></i>
          ) : (
            <i
              onClick={changeMenu}
              className=" p-4 rounded-2xl  pi pi-bars text-white"
            ></i>
          )}
        </div>
      </div>
      {
        menuIcon  === true ?
        <div className="text-gray-500 w-1/2 mr-0 absolute md:hidden bg-black opacity-60 h-[30vh]">
        <nav className="">
            <ul className=" text-white font-medium  text-xl md:hidden ">
              <Link to={"/"}>
                <li className="py-2 border-b-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                  Home
                </li>
              </Link>
  
              {userInfo.username ? (
                <div className="">
                  <Link to={"/add"}>
                    <li className="py-2 border-b-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                      Add New
                    </li>
                  </Link>
                  <span onClick={handleLogout}>
                    <li className="py-2 border-b-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                      Logout
                    </li>
                  </span>
                </div>
              ) : (
                <div className="">
                  <Link to={"/auth/login"}>
                    <li className="py-2 border-b-2 px-5 cursor-pointer hover:bg-gray-400 rounded">
                      Login
                    </li>
                  </Link>
                </div>
              )}
            </ul>
          </nav>
        </div> 
        :
        ''
      }
      
       
    </div>
  );
}
