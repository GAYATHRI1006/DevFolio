import React, { useEffect, useRef, useState } from 'react'
import GayathriProf from '../assets/GayathriProfile.jpeg'
import ResumePDF from '../assets/GayathriResume.pdf' // <-- Make sure this path is correct
const roles = [
  "Front-End Developer",
  "Software Developer",
  "IoT System Designer",
  "AI-Researcher",
  "Debugging Champion",
  "Networking Engineer"
];

const TypingEffect = () => {
  const [displayed, setDisplayed] = useState('');
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[roleIdx];

    if (!deleting && charIdx <= currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIdx));
        setCharIdx(charIdx + 1);
      }, 80);
    } else if (deleting && charIdx >= 0) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, charIdx));
        setCharIdx(charIdx - 1);
      }, 40);
    } else if (!deleting && charIdx > currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (deleting && charIdx < 0) {
      setDeleting(false);
      setRoleIdx((roleIdx + 1) % roles.length);
      setCharIdx(0);
    }
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="block h-10 text-2xl md:text-3xl font-bold text-red-900 mt-6 min-h-[2.5rem] text-center drop-shadow-lg" style={{
    textShadow: "2px 4px 16px rgba(0,0,0,0.25)"}}>
      {displayed}
      <span className="animate-pulse text-red-400">|</span>
    </span>
  );
};

const HeroSection = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Gayathri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="z-10 relative flex flex-col md:flex-row items-center justify-center min-h-screen pb-16 px-4 bg-transparent">
      {/* Left Side: Profile Card */}
      <div className="flex flex-col items-center justify-center mt-1 w-3/4 md:w-1/2 h-full">
        <div className="flex flex-col items-center bg-white/10 border-4 border-white rounded-2xl shadow-lg p-10 w-full max-w-xl">
          <img
            src={GayathriProf}
            alt="Profile"
            className="mb-4 h-70 w-70 rounded-full border-4 border-white object-cover shadow-md"
          />
          {/* Degree and Year */}
          <div className="text-center mb-4">
            <p className="text-xl md:text-2xl font-bold text-purple-950 tracking-wide">BE - ECE <span >(Hons)</span></p>
            <p className="text-lg md:text-xl text-gray-900 font-semibold">2022 - 2026</p>
          </div>
          <h3 className="bg-gray-300 w-full p-6 text-xl md:text-2xl text-black font-semibold text-center rounded-xl">
            Electronics and Communication Engineering | Front-End Developer | Tech Enthusiast
          </h3>
        </div>
      </div>
      {/* Right Side: Info & Buttons */}
      <div className="flex flex-col items-center md:items-start justify-center text-center md:text-left w-full md:w-1/2 h-full max-w-xl mx-auto">
        <span
  className="ml-14 mt-10 font-extrabold text-3xl md:text-5xl text-black text-center drop-shadow-lg"
  style={{
    textShadow: "2px 4px 16px rgba(0,0,0,0.25)"
  }}
>
  Hi, I'm Gayathri G
</span>
       <span className="block w-full text-2xl md:text-3xl font-bold text-black mt-6 mb-0 text-center drop-shadow-lg"
       style={{
    textShadow: "2px 4px 16px rgba(0,0,0,0.25)"}}>
          and I'm a
        </span>
       <div className="w-full flex justify-center">
          
          <TypingEffect />
        </div>
        <p className="text-black mt-6 text-lg md:text-2xl text-center">
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
          <button
            onClick={handleDownloadCV}
            className="sm:w-auto px-8 py-3 border border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition text-center min-w-[160px]"
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection