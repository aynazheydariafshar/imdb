
import React from 'react'
import NavbarItem from './NavbarItem'

export default function Navbar() {

  return (
    <div className='flex justify-center items-center space-x-10 p-4 dark:bg-[#1A1A1A] bg-orange-200'>
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
