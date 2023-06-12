import React from 'react'
import { useState } from 'react';
import {AiOutlineMenu,AiOutlineHome} from 'react-icons/ai'
import { IoCodeSlash } from 'react-icons/io5';
import {BsPerson} from 'react-icons/bs'
import { BiBadgeCheck } from 'react-icons/bi';

function Sidenav() {
    const[nav,setNav]=useState(false);
    const handleNav= ()=>{
        setNav(!nav);
    };
  return (
    <div>
        <AiOutlineMenu onClick={handleNav}className='absolute top-4 right-4 z-[99] md:hidden' size={30} style={{color:'white'}}/>
        {
            nav?(
<div className='fixed h-screen w-full bg-black/90 flex flex-col justify-center items-center z-20'>
    <a onClick={handleNav}href='#main' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
   <AiOutlineHome size={20}/>
   <span> Home</span>
    </a>
    <a onClick={handleNav}href='#about' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
   <BsPerson size={20}/>
   <span> About Me</span>
    </a>
    <a onClick={handleNav}href='#skills' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
   <IoCodeSlash size={20}/>
   <span>Skills</span>
    </a>
    <a onClick={handleNav}href='#certifications' className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100  m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
   <BiBadgeCheck size={20}/>
   <span> Certifications</span>
    </a>

</div>
            ):(
                ''
            )
        }
       <div className="md:block hidden fixed top-[25%] z-10">
      <div className="pl-4 flex flex-col m-4 ">
        <a href="#main">
          <div className="rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <AiOutlineHome size={20} className="text-white" />
          </div>
        </a>
        <a href="#about">
          <div className="rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <BsPerson size={20} className="text-white" />
          </div>
        </a>
        <a href="#skills">
          <div className="rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <IoCodeSlash size={20} className="text-white" />
          </div>
        </a>
        <a href="#certifications">
          <div className="rounded-full shadow-lg bg-black m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
            <BiBadgeCheck size={20} className="text-white" />
          </div>
        </a>
      </div>
    </div>
    </div>
  )
}

export default Sidenav