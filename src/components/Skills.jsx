import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nodejs from '../assets/nodejs.png'
import npm from '../assets/npm.png'
import tailwind from '../assets/tailwind.png'
import django from '../assets/django.png'
import vite from '../assets/vite.png'
import mongodb from '../assets/mongodb.png'
import mysql from '../assets/mysql.png'
import github from '../assets/github.png'
import python from '../assets/python.png'
import java from '../assets/java.png'
import eclipse from '../assets/eclipse.png'
import figma from '../assets/figma.png'
import canva from '../assets/canva.png'
import anaconda from '../assets/anaconda.png'
import jupyter from '../assets/jupyter.png'

const skills = [
  { src: html, alt: 'html logo', label: 'HTML' },
  { src: css, alt: 'css logo', label: 'CSS' },
  { src: javascript, alt: 'javascript logo', label: 'JavaScript' },
  { src: react, alt: 'react logo', label: 'React' },
  { src: nodejs, alt: 'nodejs logo', label: 'Node.js' },
  { src: npm, alt: 'npm logo', label: 'NPM' },
  { src: tailwind, alt: 'tailwind css logo', label: 'Tailwind CSS' },
  { src: django, alt: 'django logo', label: 'Django' },
  { src: vite, alt: 'vitejs logo', label: 'Vite.js' },
  { src: mongodb, alt: 'mongodb logo', label: 'MongoDB' },
  { src: mysql, alt: 'mysql logo', label: 'MySQL' },
  { src: github, alt: 'github logo', label: 'GitHub' },
  { src: python, alt: 'python logo', label: 'Python' },
  { src: java, alt: 'java logo', label: 'Java' },
  { src: eclipse, alt: 'eclipse logo', label: 'Eclipse' },
  { src: figma, alt: 'figma logo', label: 'Figma' },
  { src: canva, alt: 'canva logo', label: 'Canva' },
  { src: anaconda, alt: 'anaconda logo', label: 'Anaconda' },
  { src: jupyter, alt: 'jupyter logo', label: 'Jupyter Notebook' },
];

const Skills = () => {
  return (
    <>
      <h3 className='relative text-4xl text-black font-extrabold text-center mb-10'>Skills</h3>
      <div className='relative px-4 sm:px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {skills.map(skill => (
  <div
    key={skill.label}
    className="flex flex-col items-center bg-white/80 rounded-xl shadow-md p-6 hover:scale-105 hover:shadow-xl transition-all duration-300 max-w-xs w-full mx-auto"
  >
    <img src={skill.src} alt={skill.alt} className="h-16 w-16 mb-4 object-contain" />
    <h4 className="text-lg font-semibold text-gray-800">{skill.label}</h4>
  </div>
))}
      </div>
    </>
  )
}


 
export default Skills