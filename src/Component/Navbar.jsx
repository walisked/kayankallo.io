import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Avatar from "./Avater";

export const Navbar = ({ user }) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <a href="/" className="block w-56 mb-10">
        <svg version="1.1" viewBox="0 0 3368 512" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(0 -75)">
              <g transform="translate(0 75)">
                <rect width="512" height="512" rx="128" fill="#3D5AFE"></rect>
                <rect x="149" y="176" width="220" height="220" fill="#fff"></rect>
                <circle cx="259" cy="156" r="40" fill="#fff"></circle>
                <circle cx="369" cy="286" r="40" fill="#2962FF"></circle>
              </g>
              <text fill="white" font-family="Nunito-Bold, Nunito" font-size="512" font-weight="bold">
                <tspan x="654" y="518">AKAFTA!!</tspan>
              </text>
            </g>
          </g>
        </svg>
      </a>
      <ul className="hidden md:flex">
        <li className="p-4"><Link to="/">HOME</Link></li>
        <li className="p-4"><Link to="/services">SERVICES</Link></li>
        <li className="p-4"><Link to="/about">ABOUT</Link></li>
        <li className="p-4"><Link to="/contact">CONTACT</Link></li>
        {!user ? (
          <>
            <li className="p-4"><Link to="/login">LOGIN</Link></li>
            <li className="p-4"><Link to="/register">SIGNUP</Link></li>
          </>
        ) : (
          <li className="p-4">
            <Avatar user={user} />
          </li>
        )}
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">AKAFTA.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-red-600"><Link to="/">HOME</Link></li>
          <li className="p-4 border-b border-red-600"><Link to="/services">SERVICES</Link></li>
          <li className="p-4 border-b border-red-600"><Link to="/about">ABOUT</Link></li>
          <li className="p-4"><Link to="/contact">CONTACT</Link></li>
          {!user ? (
            <>
              <li className="p-4 border-b border-red-600"><Link to="/login">LOGIN</Link></li>
              <li className="p-4"><Link to="/register">SIGNUP</Link></li>
            </>
          ) : (
            <li className="p-4 border-b border-red-600"><Avatar user={user} /></li>
          )}
        </ul>
      </div>
    </div>
  );
};
