'use client'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'


export default function NavbarItem({title , param}) {
  const searchParams = useSearchParams()
  const genre = searchParams.get('genre')
  return (
    <div>
      <Link className={`hover:text-red-700 dark:hover:text-[#F5C518] ${genre === param && 'underline decoration-[#F5C518] underline-offset-8 decoration-2 rounded-lg'} `} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
