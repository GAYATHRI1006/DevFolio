import React, { useRef, useEffect, useState } from 'react';
// Using react-icons for high quality SVG icons:
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNpm, FaPython, FaJava, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiDjango, SiVite, SiMongodb, SiMysql, SiEclipseide, SiFigma, SiCanva, SiAnaconda, SiJupyter } from 'react-icons/si';

import figmaLogo from '../assets/figma.png'; // Place your figma.png in the assets folder
import viteLogo from '../assets/vite.png';   // Place your vite.png in the assets folder

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, label: 'HTML' },
  { icon: <FaCss3Alt className="text-blue-600" />, label: 'CSS' },
  { icon: <FaJs className="text-yellow-400" />, label: 'JavaScript' },
  { icon: <FaReact className="text-cyan-400" />, label: 'React' },
  { icon: <FaNodeJs className="text-green-700" />, label: 'Node.js' },
  { icon: <FaNpm className="text-red-600" />, label: 'NPM' },
  { icon: <SiTailwindcss className="text-sky-400" />, label: 'Tailwind CSS' },
  { icon: <SiDjango className="text-green-900" />, label: 'Django' },
  { icon: <img src={viteLogo} alt="Vite" className="h-10 w-10 object-contain" />, label: 'Vite.js' }, // PNG for Vite
  { icon: <SiMongodb className="text-green-600" />, label: 'MongoDB' },
  { icon: <SiMysql className="text-blue-700" />, label: 'MySQL' },
  { icon: <FaGithub className="text-gray-800" />, label: 'GitHub' },
  { icon: <FaPython className="text-yellow-500" />, label: 'Python' },
  { icon: <FaJava className="text-red-700" />, label: 'Java' },
  { icon: <SiEclipseide className="text-indigo-700" />, label: 'Eclipse' },
  { icon: <img src={figmaLogo} alt="Figma" className="h-10 w-10 object-contain" />, label: 'Figma' }, // PNG for Figma
  { icon: <SiCanva className="text-blue-400" />, label: 'Canva' },
  { icon: <SiAnaconda className="text-green-700" />, label: 'Anaconda' },
  { icon: <SiJupyter className="text-orange-400" />, label: 'Jupyter Notebook' },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0}
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
<section
  id="skills"
  ref={sectionRef}
  className={`scroll-mt-32 transition-all duration-1000 ease-out ${
    visible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-16 pointer-events-none'
  } px-4 sm:px-10 md:px-16 xl:px-38`}
>
      <h3 className="relative text-4xl md:text-5xl font-extrabold text-center mb-10
        text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-950 to-blue-300 drop-shadow-lg tracking-wide
        after:content-[''] after:block after:mx-auto after:mt-3 after:w-24 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-slate-200"
      >
        Skills
      </h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-14 gap-y-10'>
        {skills.map(skill => (
           <div
      key={skill.label}
      className="flex flex-col justify-center items-center bg-gradient-to-br from-white via-emerald-100 to-teal-200/80 rounded-xl shadow-md p-2 hover:scale-105 hover:shadow-2xl transition-all duration-300 w-full h-[110px] md:h-[110px] min-w-[160px] max-w-[180px]"
    >
      <span className="flex items-center justify-center text-5xl m-2 md:mb-2 h-14 w-14">{skill.icon}</span>
      <h4 className="text-base font-semibold text-gray-800 text-center mt-2">{skill.label}</h4>
    </div>
        ))}
      
      </div>
    </section>
  )
}

export default Skills


