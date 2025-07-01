import React, { useEffect, useState } from 'react'
import GayathriProf from '../assets/GayathriProfile.jpeg';

const About = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  return (
    <section id="about" className="relative z-10">
 
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        {/* Left: Profile Image */}
        <div className="flex flex-col justify-center w-full md:w-1/2 h-full mt-4 mb-10 md:mb-0">
          <div className="relative flex flex-1 mt-0 justify-center min-h-[400px]"> {/* Changed mt-6 to mt-0 and min-h */}
            <div className="absolute rounded-full bg-blue-500 blur-2xl w-[340px] h-[340px] md:w-[400px] md:h-[400px] z-0"></div> {/* Reduced size */}
            <img
              src={GayathriProf}
              alt="Profile"
              className={`relative z-10 h-[260px] w-[260px] md:h-[320px] md:w-[320px] rounded-full border-6 border-white object-cover shadow-2xl transition-all duration-700 ease-out
              ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
            />
          </div>
        </div>
        {/* Right: About Text */}
        <div
          className={`flex flex-col items-center justify-center w-full md:w-1/2 max-w-xl px-1 md:px-8 text-center md:text-left transition-all duration-700 ease-out
          ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="text-emerald-950 font-semibold mt-4 text-lg md:text-xl w-full leading-relaxed">
            A passionate Front-End Developer and Electronics enthusiast who loves building clean, responsive, and interactive user interfaces. Always curious to explore new technologies and bring ideas to life through code.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About