import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiVite, SiDjango, SiEclipseide } from 'react-icons/si';
import { FaCloud } from "react-icons/fa";

function getTechIcon(name) {
  switch (name.toLowerCase()) {
    case 'react': return <FaReact className="text-blue-500" />;
    case 'html': return <FaHtml5 className="text-orange-600" />;
    case 'css': return <FaCss3Alt className="text-blue-700" />;
    case 'javascript': return <FaJs className="text-yellow-400" />;
    case 'nodejs': return <FaNodeJs className="text-green-700" />;
    case 'tailwind': return <SiTailwindcss className="text-cyan-400" />;
    case 'redux': return <SiRedux className="text-purple-500" />;
    case 'mongodb': return <SiMongodb className="text-green-600" />;
    case 'express': return <SiExpress className="text-gray-800" />;
    case 'vite': return <SiVite className="text-purple-400" />;
    case 'django': return <SiDjango className="text-green-900" />;
    case 'java': return <FaJava className="text-red-700" />;
    case 'eclipse': return <SiEclipseide className="text-indigo-700" />;
    case 'api': return <FaCloud className="text-indigo-400" />;
    case 'iot': return <span className="text-green-500 font-bold">IoT</span>;
    default: return null;
  }
}
function ProjectCard({ title, description, technologies, liveUrl, codeUrl, isIot, isJava }) {
  return (
    <div className="relative z-10">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl flex flex-col h-full p-6 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-3 text-lg">
          {description}
        </p>
        <div className="mb-3">
          <span className="font-semibold text-gray-800">Technologies: </span>
          <div className="flex flex-wrap gap-2 mt-1">
            {technologies.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-lg text-xs font-medium">
                {getTechIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex-grow" />
        {(isIot || isJava) ? (
          <div className="flex justify-center mt-4">
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition text-base"
            >
              <FaGithub /> Source Code
            </a>
          </div>
        ) : (
          <div className="flex justify-between mt-4 gap-2">
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition text-base"
            >
              <FaGithub /> Source Code
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-base"
            >
              <FaExternalLinkAlt /> View Site
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
const projects = [

  {
    title: "Shri Ram Restaurant",
    description: "A static restaurant website with menu and locations.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://shri-ram-restaurant.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Restaurant"
  },
  {
    title: "Student Form",
    description: "A web app to collect and display student details.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://student-form-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Form"
  },
  {
    title: "City Stats Web App",
    description: "Select a city and view related information interactively.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://city-stats-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/City-Stats"
  },
  {
    title: "BMI Calculator",
    description: "A responsive React application that calculates Body Mass Index (BMI) instantly.",
    technologies: ["React", "CSS"],
    liveUrl: "https://bmi-calculator-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/BMI_Calculator"
  },
  {
    title: "Currency Converter Using React",
    description: "Real-time currency conversion app using API.",
    technologies: ["React", "CSS", "JavaScript","API"],
    liveUrl: "https://currency-converter-using-react-samp.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency_Converter_using_React"
  },
  {
    title: "FAQ Accordion",
    description: "Interactive FAQ component with open/close animation.",
    technologies: ["React", "CSS"],
    liveUrl: "https://faq-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FAQ_App"
  },
  {
    title: "Color Flipper",
    description: "Changes background color using random HEX values.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://color-flipper-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Color-Flipper"
  },
  {
    title: "Currency Converter Using Javascript",
    description: "A real-time currency converter using Frankfurter API.",
    technologies: ["HTML", "CSS","JavaScript","API"],
    liveUrl: "https://currency-converter-using-api.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency-Converter"
  },
  {
    title: "Digital Clock Using Javascript",
    description: "A web app that displays real-time time, date, and day.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://digital-clock-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital-Clock"
  },
  {
    title: "Random Letter Picker",
    description: "Picks a random letter from any entered sentence or word.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://random-letter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Random_letter"
  },
  {
    title: "Palindrome Checker",
    description: "Checks if a word or sentence is a palindrome or not.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://palindrome-checker-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Palindrome_Checker"
  },
  {
    title: "Length Converter",
    description: "Converts centimeters to inches with calculation and input validation",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://length-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Length-Converter"
  },
  {
    title: "FD Rate Calculator",
    description: "Calculates fixed deposit interest rates based on investment duration.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://fd-rate-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FD-Rate-Calculator"
  },
  {
    title: "EB Calculator",
    description: "Calculates electricity bills based on units consumed using tariff slabs.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://eb-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/EB_Calculator"
  },
  {
    title: "Temperature Converter",
    description: "Converts temperatures from Celsius to Fahrenheit with input validation.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://temperature-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Temperature_Converter"
  },
  {
    title: "Word Calculator",
    description: "Counts words in a sentence or paragraph with input validation.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://word-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Word_Calculator"
  },
  {
    title: "Calendar App",
    description: "Displays and navigates a monthly calendar with today's date highlighted.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://calendar-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Calendar_App"
  },
  {
    title: "Digital Clock Using React",
    description: "Displaying the current time, date, and AM/PM format with a clean UI.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://digital-clock-using-react-kohl.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital_Clock_using_React"
  },
   {
    title: "Strong Password Generator",
    description: "Password generator that supports various character types and lengths.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://password-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Password_Generator_App"
  },
  {
    title: "QR Code Generator",
    description: "Generates and downloads customizable QR codes using React.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://qr-code-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/QR_Code_Generator_App"
  },
  {
    title: "Quiz App with Timer",
    description:  "Timed quiz app with MCQs, scoring, and restart feature.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://quiz-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Quiz_App"
  },
  {
    title: "Weather App",
    description:  "Weather app fetching real-time data using OpenWeatherMap API.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://weather-app-sample-sigma.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Weather_App"
  },
  {
    title: "Profile Card",
    description:  "Displaying user profile cards with dynamic data and status badges.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://profile-card-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Profile_Card"
  },
  {
    title: "Advice App",
    description:  "Displays random advice with a counter using the Advice Slip API.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://advice-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Advice_App"
  },


  {
    title: "Java ATM Machine",
    description: "A simple Java console application that simulates basic ATM operations.",
    technologies: ["Java", "Eclipse"],
    codeUrl: "https://github.com/GAYATHRI1006/Java_Project",
    isJava: true
  },
  // Example IoT project:
  {
    title: "IoT Weather Station",
    description: "Monitors temperature and humidity using IoT sensors.",
    technologies: ["IoT", "NodeJS", "API"],
    codeUrl: "https://github.com/yourusername/iot-weather-station",
    isIot: true
  }
  // ...other projects...
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Django", value: "django" },
  { label: "React", value: "react" },
  { label: "Tailwind", value: "tailwind" },
  { label: "Java", value: "java" },
  { label: "Eclipse", value: "eclipse" },
  { label: "API", value: "api" },
  { label: "JavaScript", value: "javascript" },
  { label: "IoT", value: "iot" }
];

const ReactProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter(project =>
          project.technologies.some(
            tech => tech.toLowerCase() === selectedFilter
          )
        );

  return (
    <>
      <div className="relative z-10">
        <h3 className='relative text-4xl text-black font-extrabold text-center mt-10'>Projects</h3>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
          {FILTERS.map(filter => (
            <button
              key={filter.value}
              className={`
                px-7 py-3 
                rounded-3xl 
                font-semibold 
                border-2
                transition 
                duration-300 
                transform 
                hover:scale-110 
                focus:outline-none
                cursor-pointer
                ${selectedFilter === filter.value
                  ? "bg-gradient-to-r from-green-700 to-green-900 text-white border-green-900 shadow-lg"
                  : "bg-white text-green-900 border-green-400 hover:bg-green-100 hover:text-green-900 hover:border-green-700"}
              `}
              style={{
                boxShadow: selectedFilter === filter.value ? '0 4px 20px 0 rgba(21,128,61,0.25)' : undefined
              }}
              onClick={() => setSelectedFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="py-8 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 px-4 sm:px-8 md:px-16">
            {filteredProjects.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full text-center text-gray-500 text-lg">No projects found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactProjects;