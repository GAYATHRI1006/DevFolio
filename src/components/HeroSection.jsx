import React, { useEffect, useState } from 'react';
import TypingEffect from './TypingEffect'; // Make sure this exists
import ResumePDF from '../assets/GayathriResume.pdf'; // Update path if needed
import GayathriProf from '../assets/GayathriProfile.jpeg'; // Update path if needed
import GmailLogo from '../assets/gmail-logo.png'; // Update path if needed

const icons = [
  {
    href: "mailto:gayathrigaya3ece@gmail.com",
    label: "Gmail",
    svg: (
      <span className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-xl border-2 border-white transition-all duration-300 relative overflow-hidden hover:scale-110">
        {/* Animated gradient border */}
        <span className="absolute inset-0 rounded-full pointer-events-none z-0 bg-gradient-to-br from-[#ea4335] via-[#fbbc05] via-40% to-[#34a853] animate-pulse opacity-40"></span>
        {/* Glowing background on hover */}
        <span className="absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 blur-2xl bg-gradient-to-br from-[#ea4335] via-[#fbbc05] to-[#34a853]"></span>
        {/* PNG Gmail logo */}
        <img
          src={GmailLogo}
          alt="Gmail"
          className="w-8 h-8 z-10 relative object-contain"
          draggable={false}
        />
      </span>
    ),
  },
  {
    href: "https://www.linkedin.com/in/gayathri1006/",
    label: "LinkedIn",
    svg: (
      <span className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#0077b5] to-[#00c6fb] shadow-lg border-2 border-white transition-all duration-300 relative overflow-hidden hover:scale-110">
        {/* Glowing background on hover */}
        <span className="absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 blur-2xl bg-gradient-to-br from-[#0077b5] to-[#00c6fb]"></span>
        <svg className="w-7 h-7 text-white z-10 relative" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"/>
        </svg>
      </span>
    ),
  },
  {
    href: "https://github.com/GAYATHRI1006",
    label: "GitHub",
    svg: (
      <span className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#333] to-[#6e5494] shadow-lg border-2 border-white transition-all duration-300 relative overflow-hidden hover:scale-110">
        {/* Glowing background on hover */}
        <span className="absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 blur-2xl bg-gradient-to-br from-[#333] to-[#6e5494]"></span>
        <svg className="w-7 h-7 text-white z-10 relative" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18.93-.26 1.93-.39 2.92-.39.99 0 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
        </svg>
      </span>
    ),
  },
  {
    href: "https://www.instagram.com/_._.unique_one._._/",
    label: "Instagram",
    svg: (
      <span className="group inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#fd5949] via-[#d6249f] to-[#285AEB] shadow-lg border-2 border-white transition-all duration-300 relative overflow-hidden hover:scale-110">
        {/* Glowing background on hover */}
        <span className="absolute inset-0 rounded-full z-0 opacity-0 group-hover:opacity-80 transition duration-300 blur-2xl bg-gradient-to-br from-[#fd5949] via-[#d6249f] to-[#285AEB]"></span>
        <svg className="w-7 h-7 text-white z-10 relative" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.41.59.22 1.01.48 1.45.92.44.44.7.86.92 1.45.17.46.354 1.26.41 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.41 2.43-.22.59-.48 1.01-.92 1.45-.44.44-.86.7-1.45.92-.46.17-1.26.354-2.43.41-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.41-.59-.22-1.01-.48-1.45-.92-.44-.44-.7-.86-.92-1.45-.17-.46-.354-1.26-.41-2.43C2.212 15.784 2.2 15.4 2.2 12s.012-3.584.07-4.85c.056-1.17.24-1.97.41-2.43.22-.59.48-1.01.92-1.45.44-.44.86-.7 1.45-.92.46-.17 1.26-.354 2.43-.41C8.416 2.212 8.8 2.2 12 2.2zm0-2.2C8.736 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.51-.8.29-1.47.67-2.13 1.33-.66.66-1.04 1.33-1.33 2.13-.27.75-.452 1.63-.51 2.91C.012 8.332 0 8.736 0 12c0 3.264.012 3.668.07 4.948.058 1.28.24 2.16.51 2.91.29.8.67 1.47 1.33 2.13.66.66 1.33 1.04 2.13 1.33.75.27 1.63.452 2.91.51C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.16-.24 2.91-.51.8-.29 1.47-.67 2.13-1.33.66-.66 1.04-1.33 1.33-2.13.27-.75.452-1.63.51-2.91.058-1.28.07-1.684.07-4.948s-.012-3.668-.07-4.948c-.058-1.28-.24-2.16-.51-2.91-.29-.8-.67-1.47-1.33-2.13-.66-.66-1.33-1.04-2.13-1.33-.75-.27-1.63-.452-2.91-.51C15.668.012 15.264 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 12 8a4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/>
        </svg>
      </span>
    ),
  },
];

const HeroSection = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowContent(true), 100);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Gayathri_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex flex-col md:flex-row items-start justify-start min-h-screen px-2 md:px-8 md:pt-18 pt-8 relative z-10">
      {/* Left Side: Info & Buttons */}
      <div
        className={`flex flex-col items-center justify-center w-full md:max-w-1/2 max-w-xl px-1 md:px-18 text-center transition-all duration-700 ease-out
        ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <span className="font-extrabold text-4xl md:text-5xl text-rose-950 mb-0 w-full text-center" style={{
          textShadow: "1px 2px 8px rgba(0,0,0,0.30)"
        }}>
          Hi, I'm Gayathri G
        </span>
        <span className="block text-2xl md:text-3xl font-bold text-yellow-200 mt-4 mb-0 w-full text-center drop-shadow-lg"
          style={{
            textShadow: "1px 2px 8px rgba(0,0,0,0.20)"
          }}>
          and I'm
        </span>
        <div className="w-full flex justify-center">
          <TypingEffect />
        </div>
        <p className="text-emerald-950 font-semibold mt-4 text-lg md:text-xl w-full text-center leading-relaxed">
          A passionate Front-End Developer and Electronics enthusiast who loves building clean, responsive, and interactive user interfaces. Always curious to explore new technologies and bring ideas to life through code.
        </p>
        {/* Social Icons */}
        <div className="flex flex-row gap-6 mt-8 mb-6 justify-center w-full">
          {icons.map((icon) => (
            <a
              key={icon.label}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={icon.label}
              className="hover:scale-110 transition-transform"
            >
              {icon.svg}
            </a>
          ))}
        </div>
        {/* Download CV Button */}
        <div className="w-full flex justify-center">
          <button
            onClick={handleDownloadCV}
            className="group mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] text-white font-bold shadow-xl border-2 border-white/90 backdrop-blur-md relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-60 transition duration-300 blur-xl bg-gradient-to-r from-[#334155] to-[#0f172a]"></span>
            <span className="relative z-10 flex items-center gap-2">
              Download CV
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m0 0l-6-6m6 6l6-6" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Right Side: Profile Image */}
      <div className="flex flex-col  justify-center w-full md:max-w-1/2 h-full mt-4 mb-10 md:mb-0">
        <div className="relative flex flex-1 mt-6 justify-center min-h-[500px]">
          <div className="absolute rounded-full bg-blue-500 blur-2xl w-[400px] h-[400px] md:w-[460px] md:h-[460px] z-0"></div>
          <img
            src={GayathriProf}
            alt="Profile"
            className={`relative z-10 h-[340px] w-[340px] md:h-[400px] md:w-[400px] rounded-full border-6 border-white object-cover shadow-2xl transition-all duration-700 ease-out
            ${showContent ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
