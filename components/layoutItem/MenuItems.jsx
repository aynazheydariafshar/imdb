import Link from 'next/link'
import React from 'react'

export default function MenuItems({ title, Icon, url }) {
    return (
        <div>
            <Link className='flex items-center text-2xl hover:text-[#F5C518]' href={url}>
                <Icon className="sm:hidden"/>
                <p className='hidden sm:inline mx-2'>{title}</p>
            </Link>
        </div>
    )
}
