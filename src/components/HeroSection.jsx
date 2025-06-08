import React from 'react'
import GayathriProf from '../assets/GayathriProfile.jpeg'

const HeroSection = () => {
  return (
    <section className="z-10 relative flex flex-col md:flex-row items-center justify-center min-h-screen pb-16 px-4 bg-transparent">
      {/* Left Side: Profile Card */}
      <div className="flex flex-col items-center justify-center mt-10 w-3/4 md:w-1/2 h-full">
        <div className="flex flex-col items-center bg-white/10 border-4 border-white rounded-2xl shadow-lg p-10 w-full max-w-xl">
          <img
            src={GayathriProf}
            alt="Profile"
            className="mb-8 h-70 w-70 rounded-full border-4 border-white object-cover shadow-md"
          />
          <h3 className="bg-gray-300 w-full p-6 text-xl md:text-2xl text-black font-semibold text-center rounded-xl">
            Electronics and Communication Engineering | Front-End Developer | Tech Enthusiast
          </h3>
        </div>
      </div>
      {/* Right Side: Info & Buttons */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-1/2 h-full max-w-xl mx-auto">
        <span className="ml-14 mt-10 font-extrabold text-3xl md:text-5xl text-black md: text-center">
          Hi, I am Gayathri G
        </span>
        <p className="text-white mt-6 text-lg md:text-2xl text-center">
          A passionate Front-End Developer and Electronics enthusiast who loves building clean, responsive, and interactive user interfaces.
          <br />
          Always curious to explore new technologies and bring ideas to life through code.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6 items-center w-full sm:w-auto">
          <a
            href="#projects"
            className="md:ml-30  sm:w-auto px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-blue-100 transition text-center min-w-[160px]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className=" sm:w-auto px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition text-center min-w-[160px]"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection