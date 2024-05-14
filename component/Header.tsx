import Link from 'next/link'
import React from 'react'
import "../app/globals.css"
function Header({ font }: { font?: string }) {
  return (
    <header className='py-2 bg-dark-500'>
      <div className="max-w-[100rem] px-12 mx-auto flex justify-between">
        <Link href={'/'}>
          <h1 className='uppercase text-yellow-500 text-center py-2'>
            Easy sEll
          </h1>
        </Link>
        <Link href={"/product/upload"} className='uppercase text-green-500 text-xl py-2 hover:text-yellow-700'>
          Upload
        </Link>
      </div>
    </header>
  )
}

export default Header
