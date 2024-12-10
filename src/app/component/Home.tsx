'use client';

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {Typed} from "react-typed"; // Corrected import

const Home = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typed = new Typed(".typing", {
      strings: ["Developer", "Designer", "Coder"],
      typeSpeed: 100,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    // Cleanup on unmount
    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full sm:h-screen h-full bg-black">
      <div className="w-full h-fit bg-fixed bg-opacity-100 bg-[url('https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8Y29kZXxlbnwwfDB8fHwxNzMyNzk1MjA5fDA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
        <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg bg-black/60">
          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
            <svg
              className="fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </label>
          <input className="hidden" type="checkbox" id="menu-toggle" />
        </header>

        <div className="w-full h-full relative text-5xl top-10 mt-10 pb-20">
          <div className="lg:px-16 px-8 flex sm:flex-row flex-col-reverse gap-6 justify-center items-center">
            <div className="sm:text-left text-center text-white">
              <h4 className="sm:text-4xl text-5xl font-semibold w-fit bg-gray-900/40 p-3">
                Hello, My name is
                <span className="text-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] sm:text-4xl text-2xl font-sans">
                  {" "}
                  Wasif Hasan
                </span>
              </h4>
              <h1 className="mt-4 sm:text-6xl text-3xl">
                I&apos;m{" "}
                <span className="typing libre-baskerville-bold text-purple-500" />
              </h1>
              <p className="mt-4 text-xl font-bold capitalize">
                Frontend developer skilled in Next.js, Tailwind CSS,<br /> and
                building responsive websites.
              </p>
              <div className="mt-6 flex sm:flex-row flex-col gap-4 sm:justify-start justify-center">
                <div>
                  <div className="relative inline-flex group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Link
                      href="https://www.fiverr.com/s/dDLNo8z"
                      title="Get quote now"
                      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                      aria-label="Hire me"
                    >
                      Hire Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="h-[400px] w-[400px] bg-fixed md:max-w-[30%] sm:max-w-[40%] max-w-[70%] sm:rounded-sm sm:rounded-br-[5rem] sm:rounded-tl-[5rem] rounded-full sm:outline-none outline outline-[.3rem] outline-green-400/60 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              src="/1.png"
              alt="My Pic"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
