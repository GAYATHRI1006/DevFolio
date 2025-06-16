import React, { useState } from 'react'
import restaurant from "../assets/restaurant1.png"
import studentForm from "../assets/studentForm.png"
import cityStats from "../assets/cityStats.png"
// Uncomment and add your hardware images if available
// import hardware1 from "../assets/hardware1.png"
// import hardware2 from "../assets/hardware2.png"
// import hardware3 from "../assets/hardware3.png"
// import hardware4 from "../assets/hardware4.png"

function ProjectCard({ title, description, imageUrl, liveUrl, codeUrl }) {
  return (
    <div className="relative z-10">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full transform hover:scale-105 transition-transform duration-300">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-2xl"
          style={{ objectPosition: 'center' }}
        />
        <div className="flex flex-col flex-1 p-6 bg-blue-50 rounded-b-2xl">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-700 mb-4 flex-1">{description}</p>
          <div className="flex justify-between mt-4 gap-2">
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-900 transition"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const softwareProjects = [
  {
    title: "Shri Ram Restaurant",
    description: "Shri Ram Restaurant Website is a static restaurant site developed using HTML and CSS. It displays the restaurant’s menu, pricing, and branch locations in a clean and user-friendly layout. Font Awesome icons enhance the design, and the layout is mobile-responsive. This project demonstrates front-end development skills with a focus on real-world UI structure.",
    imageUrl: restaurant,
    liveUrl: "https://shri-ram-restaurant.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Restaurant"
  },
  {
    title: "Student Form",
    description: "Student Form Web Application is a simple HTML, CSS, and JavaScript-based project. It collects student details like name, age, gender, course, and email through a form. Submitted data is dynamically displayed in a table with an option to delete entries. This project demonstrates DOM manipulation, form validation, and basic interactivity.",
    imageUrl: studentForm,
    liveUrl: "https://student-form-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Form"
  },
  {
    title: "City Stats Web App",
    description: "City Stats Web App allows users to select a city and view related information interactively. Built with HTML, CSS, and JavaScript, it features a dropdown for city selection and a button for action. The interface is clean and minimal, making it beginner-friendly and easy to extend. This project showcases dynamic user interaction and DOM-based event handling.",
    imageUrl: cityStats,
    liveUrl: "https://city-stats-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/City-Stats"
  },
  // Add more software projects if needed
];

const hardwareProjects = [
  {
    title: "Hardware Project 1",
    description: "Description for hardware project 1.",
    // imageUrl: hardware1,
    imageUrl: "https://via.placeholder.com/400x200?text=Hardware+1",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 2",
    description: "Description for hardware project 2.",
    // imageUrl: hardware2,
    imageUrl: "https://via.placeholder.com/400x200?text=Hardware+2",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 3",
    description: "Description for hardware project 3.",
    // imageUrl: hardware3,
    imageUrl: "https://via.placeholder.com/400x200?text=Hardware+3",
    liveUrl: "#",
    codeUrl: "#"
  },
  {
    title: "Hardware Project 4",
    description: "Description for hardware project 4.",
    // imageUrl: hardware4,
    imageUrl: "https://via.placeholder.com/400x200?text=Hardware+4",
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
  )
}

export default ReactProjects