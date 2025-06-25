import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiVite } from 'react-icons/si';

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
    default: return null;
  }
}

function ProjectCard({ title, description, technologies, liveUrl, codeUrl }) {
  return (
    <div className="relative z-10">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full p-6 transform hover:scale-105 transition-transform duration-300">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <div className="mb-4">
          <span className="font-semibold text-gray-800">Technologies: </span>
          <div className="flex flex-wrap gap-3 mt-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-lg text-sm font-medium">
                {getTechIcon(tech)}
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between mt-auto gap-2">
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            <FaGithub /> Source Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt /> View Site
          </a>
        </div>
      </div>
    </div>
  );
}

const softwareProjects = [
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
    description: "A responsive React app to calculate BMI.",
    technologies: ["React", "CSS"],
    liveUrl: "https://bmi-calculator-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/BMI_Calculator"
  },
  {
    title: "Currency Converter Using React",
    description: "Real-time currency conversion app using API.",
    technologies: ["React", "CSS", "JavaScript"],
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
    technologies: ["HTML", "CSS","JavaScript"],
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
    description: "Checks if a word or sentence is a palindrome, ignoring spaces and punctuation.",
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
    technologies: ["HTML", "CSS","JavaScript","React"],
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
    technologies: ["HTML", "CSS","JavaScript","React"],
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
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://advice-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Advice_App"
  },



  
];

const hardwareProjects = [
  {
    title: "Hardware Project 1",
    description: "Microcontroller-based temperature monitoring system.",
    technologies: ["NodeJS", "Express", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 2",
    description: "IoT-based smart home automation prototype.",
    technologies: ["NodeJS", "JavaScript"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 3",
    description: "Wireless sensor network for environmental data.",
    technologies: ["NodeJS", "MongoDB"],
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 4",
    description: "RFID-based attendance system.",
    technologies: ["JavaScript", "NodeJS"],
    liveUrl: "#",
    codeUrl: "#"
  },
];

const ReactProjects = () => {
  const [selectedType, setSelectedType] = useState("software");
  const projectsToShow = selectedType === "software" ? softwareProjects : hardwareProjects;

  return (
    <>
      <div className="relative z-10">
        <h3 className='relative text-4xl text-black font-extrabold text-center mt-10'>Projects</h3>
        <div className="flex justify-center gap-8 mt-8 mb-6">
          <button
            className={`px-10 py-4 text-xl rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none ${
              selectedType === "hardware"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedType("hardware")}
          >
            Hardware Projects
          </button>
          <button
            className={`px-10 py-4 text-xl rounded-xl font-bold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none ${
              selectedType === "software"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setSelectedType("software")}
          >
            Software Projects
          </button>
        </div>
        <div className="py-8 px-4">
          <h3 className="text-4xl font-extrabold text-center mb-10 text-black">
            {selectedType === "software" ? "React Projects" : "Hardware Projects"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {projectsToShow.map((project, idx) => (
              <ProjectCard key={idx} {...project} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReactProjects;