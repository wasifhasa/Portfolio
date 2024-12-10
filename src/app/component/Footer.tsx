import React from 'react'

function Footer() {
  return (
    <div className=' '>
      <footer className="flex flex-col space-y-10 justify-center  bg-black">
  <nav className="flex justify-center  gap-6 flex-wrap font-medium text-xl mt-20">
    <a className="text-white" href="/home">
      Home
    </a>
    <a className="text-white" href="/about">
      About
    </a>
    <a className="text-white" href="/education">
      Education
    </a>
    <a className="text-white" href="/skills">
      Skills
    </a>
    <a className="text-white" href="/services">
      Services
    </a>
    <a className="text-white" href="/contact">
      Contact
    </a>
  </nav>
  <div className="flex justify-center space-x-5">
    <a href="https://www.facebook.com/profile.php?id=61560717725662" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" />
    </a>
    <a href="www.linkedin.com/in/wasif-hasan-456395275" target="_blank" rel="noopener noreferrer">
      <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" />
    </a>
    <a href="https://www.fiverr.com/s/qDQjAAZ"className='h-8 w-8' target="_blank" rel="noopener noreferrer">
      <img src="https://freelogopng.com/images/all_img/1656739257fiverr-logo-transparent.png" />
    </a>
    {/* https://freelogopng.com/images/all_img/1656739257fiverr-logo-transparent.png */}
  </div>
  <p className="text-center text-gray-700 font-medium pb-10">
    © 2022 Wasif Hasan. All rights reservered.
  </p>
</footer>

    </div>
  )
}

export default Footer
