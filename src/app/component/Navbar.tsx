import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='bg-black'>
 <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative  z-50 dark:bg-gray-900">
  <nav className="z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
    <div className="flex items-center justify-between ">
      <Link href={'/'}>
      <button>
        <div className="flex items-center space-x-2">
          <h2 className="text-white font-extrabold dark:text-gray-500  text-3xl">
            Wasif Hasan
          </h2>
        </div>
      </button>
      </Link>
      <div className="hidden lg:block text-white">
        <ul className="flex space-x-10  text-xl font-bold text-white dark:text-white">
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/home">Home</a>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/about">About</a>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/education">Education</a>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/skills"> Skills</a>
          </li>
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/services">Services</a>
          </li>
          
          <li className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <button className="focus:outline-none text-slate-200 dark:text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</div>



    </div>
  )
}

export default Navbar
