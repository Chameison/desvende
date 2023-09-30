import Image from 'next/image'
import React from 'react'
function Header() {
  return (
    <header className='w-full bg-slate-900 py-4 px-3'>
      <div className='flex items-center gap-2'>
        <Image src='/logo.svg' alt='icon'  width={40} height={40}/>
        <span className='text-xl font-medium text-orange-500'>DESVENDE</span>
        
      </div>
    </header>
  )
}

export default Header