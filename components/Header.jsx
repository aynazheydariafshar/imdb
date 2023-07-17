import React from 'react'
import MenuItems from './MenuItems'
import { HiHome } from 'react-icons/hi';
import { RiInformationFill } from 'react-icons/ri';
import { BsFillSunFill } from 'react-icons/bs';

export default function Header() {
  return (
    <nav className='flex items-center justify-between p-4'>
      <div className='flex items-center justify-between'>
        <MenuItems title="Home" url="/" Icon={HiHome} />
        <MenuItems title="About" url="/" Icon={RiInformationFill} />
      </div>
      <div className='flex items-center justify-between text-2xl'>
        <BsFillSunFill className='mx-3 hover:text-[#F5C518] hover:cursor-pointer'/>
        <button className='bg-[#F5C518] mx-1 text-black font-bold rounded-md p-2'>IMDB</button>
        <p className='font-bold mx-1'>Clone</p>
      </div>
    </nav>
  )
}
