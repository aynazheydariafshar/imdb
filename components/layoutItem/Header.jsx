import React from 'react'
import MenuItems from './MenuItems'
import { HiHome } from 'react-icons/hi';
import { RiInformationFill } from 'react-icons/ri';
import DarkModeSwitcher from '../DarkModeSwitcher';

export default function Header() {
  return (
    <nav className='flex items-center justify-between p-4 max-w-7xl mx-auto'>
      <div className='flex items-center justify-between space-x-4'>
        <MenuItems title="Home" url="/" Icon={HiHome} />
        <MenuItems title="About" url="/about" Icon={RiInformationFill} />
      </div>
      <div className='flex items-center space-x-4 justify-between text-2xl'>
        <DarkModeSwitcher />
        <button className='bg-[#F5C518] text-black font-bold rounded-md p-2'>IMDB</button>
        <p className='font-bold'>Clone</p>
      </div>
    </nav>
  )
}
