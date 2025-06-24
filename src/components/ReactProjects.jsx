import React, { useState } from 'react'
import restaurant from "../assets/restaurant1.png"
import studentForm from "../assets/studentForm.png"
import cityStats from "../assets/cityStats.png"
import colorflipper from "../assets/colorFlipper.png" 
import currencyjs from "../assets/currencyjs.png"
import clockjs from "../assets/digitalclockjs.png"
import random from "../assets/randomletter.png"
import palindrome from "../assets/palindrome.png"
import length from "../assets/length.png"
import fd from "../assets/fd.png"
import eb from "../assets/eb.png"
import temperature from "../assets/temperature.png"
import word from "../assets/word.png"
import bmi from "../assets/bmi.png"
import currencyreact from "../assets/currencyreact.png"
import calendar from "../assets/calendar.png"
import digitalclockreact from "../assets/digitalclockreact.png"
import faq from "../assets/faq.png"
import password from "../assets/password.png"

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
  {
    title: "Color Flipper",
    description: "Color Flipper is a fun and interactive web app that changes the background to a random HEX color on button click. It displays the generated HEX code at the top-right corner in real time. Built using HTML, CSS, and JavaScript with a clean and minimal design. This project demonstrates DOM manipulation, randomness, and dynamic styling.",
    imageUrl: colorflipper,
    liveUrl: "https://color-flipper-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Color-Flipper"
  },
  {
    title: "Currency Converter Using Javascript",
    description: "Currency Converter is a web application that performs real-time currency conversion using the Frankfurter API. It supports 30+ global currencies with a clean, responsive, and user-friendly interface. Built with HTML, CSS, and JavaScript, the app fetches live exchange rates instantly. This project showcases API integration, real-time data handling, and responsive design.",
    imageUrl: currencyjs,
    liveUrl: "https://currency-converter-using-api.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency-Converter"
  },
  {
    title: "Digital Clock Using Javascript",
    description: "Digital Clock Web App displays the current time in 12-hour format along with date and weekday. Built using HTML, CSS, and JavaScript, it updates every 500ms in real time. The interface shows hours, minutes, seconds, AM/PM, full date, and the day of the week. This project demonstrates real-time updates and time/date formatting using JavaScript.",
    imageUrl: clockjs,
    liveUrl: "https://digital-clock-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital-Clock"
  },
  {
    title: "Random Letter Picker",
    description: "Random Letter Picker is a simple tool that selects a random character from any word or sentence you enter. It uses JavaScript for randomization and input validation to prevent number-only entries. Built with HTML, CSS, and JavaScript, it delivers instant results on button click. This project demonstrates input handling, validation, and basic use of randomness in the DOM.",
    imageUrl: random,
    liveUrl: "https://random-letter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Random_letter",
  },
  {
    title: "Palindrome Checker",
    description: "Palindrome Checker is a web tool that checks if a word or sentence is a palindrome, ignoring spaces, punctuation, and case. Built with HTML, CSS, and JavaScript, it features real-time input validation and a clean interface. It removes non-alphanumeric characters and compares the reversed string with the original. This project highlights string manipulation, validation, and interactive feedback in the browser.",
    imageUrl: palindrome,
    liveUrl: "https://palindrome-checker-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Palindrome_Checker",
  },
  {
    title: "Length Converter",
    description: "Length Converter is a simple tool that converts centimeters to inches using real-time calculations. Built with HTML, CSS, and JavaScript, it features input validation and a clean, minimal interface. The converter rounds results to three decimal places for precision. This project demonstrates basic arithmetic operations, user input handling, and DOM updates.",
    imageUrl: length,
    liveUrl: "https://length-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Length-Converter",
  },
  {
    title: "FD Rate Calculator",
    description: "FD Rate Calculator is a web tool that displays applicable fixed deposit interest rates based on investment duration. Built using HTML, CSS, and JavaScript, it provides instant results with input validation. Interest rates are dynamically determined using pre-defined slabs. This project highlights real-time logic implementation and user-friendly interface design.",
    imageUrl: fd,
    liveUrl: "https://fd-rate-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FD-Rate-Calculator",
  },
  {
    title: "EB Calculator",
    description: "EB Calculator is a web app that calculates electricity bills based on unit consumption using predefined tariff slabs. Developed with HTML, CSS, and JavaScript, it provides instant, dynamic results and input validation. It supports tiered pricing logic with a clean, responsive interface. This project demonstrates conditional logic, user input handling, and real-time calculations.",
    imageUrl: eb,
    liveUrl: "https://eb-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/EB_Calculator",
  },
  {
    title: "Temperature Converter",
    description: "Temperature Converter is a simple web app that instantly converts Celsius values to Fahrenheit. Built using HTML, CSS, and JavaScript, it features a clean, responsive design. The app includes real-time result display and input validation for better usability. This project demonstrates basic arithmetic logic, form handling, and interactive UI design.",
    imageUrl: temperature,
    liveUrl: "https://temperature-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Temperature_Converter",
  },
  {
    title: "Word Calculator",
    description: "Word Calculator is a simple web tool that counts the number of words in a given sentence or paragraph. Built with HTML, CSS, and JavaScript, it trims extra spaces and validates empty input. The tool is ideal for writers, editors, and students needing quick word counts. This project highlights string manipulation, filtering, and real-time result display.",
    imageUrl: word,
    liveUrl: "https://word-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Word_Calculator",
  },
  {
    title: "BMI Calculator",
    description: "BMI Calculator is a responsive React app that calculates Body Mass Index based on user-entered height and weight. It categorizes results into health ranges like Underweight, Normal, Overweight, or Obese. Built with modern React practices using Hooks, it features real-time validation and reset functionality. This project demonstrates React state management, input handling, and dynamic UI updates.",
    imageUrl: bmi,
    liveUrl: "https://bmi-calculator-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/BMI_Calculator",
  },
  {
    title: "Currency Converter Using React",
    description: "React Currency Converter is a real-time currency conversion app using the ExchangeRate API. Built with React and Axios, it allows users to convert between major currencies instantly. The app auto-updates conversion results on input or currency change with a clean UI. This project demonstrates API integration, React Hooks, and dynamic state handling.",
    imageUrl: currencyreact,
    liveUrl: "https://currency-converter-using-react-samp.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency_Converter_using_React",
  },
  {
    title: "Calendar App",
    description: "React Calendar App is a responsive and interactive calendar that displays days of any selected month and year. Users can navigate between months, choose specific years, and today’s date is highlighted for easy reference. Built with React, it uses dropdowns and buttons for smooth date navigation. This project showcases dynamic rendering, state management, and responsive UI design in React.",
    imageUrl: calendar,
    liveUrl: "https://calendar-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Calendar_App",
  },
  {
    title: "Digital Clock Using React",
    description: "React Digital Clock is a real-time clock app that displays the current time in 12-hour format with AM/PM. It also shows the current date in a clean, readable format. Built using React, it updates every second for accurate timekeeping. This project highlights React Hooks, live updates, and minimalist UI design.",
    imageUrl: digitalclockreact,
    liveUrl: "https://digital-clock-using-react-kohl.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital_Clock_using_React",
  },
  {
    title: "FAQ Accordion",
    description: "React FAQ Accordion is an interactive component that reveals or hides answers when a question is clicked. It uses reusable components and manages open/close states using React props and state. Built with a clean, responsive layout and modular code structure. This project demonstrates React component architecture and dynamic UI behavior.",
    imageUrl: faq,
    liveUrl: "https://faq-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FAQ_App",
  },
  {
    title: "Password Generator",
    description: "React Strong Password Generator lets users create secure, customizable passwords with selectable character types and length. Options include uppercase, lowercase, numbers, and symbols, with a one-click copy feature. Built using React, the app offers real-time password generation with responsive design. This project demonstrates user input handling, state management, and clipboard integration in React.",
    imageUrl: password,
    liveUrl: "https://password-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Password_Generator_App",
  },


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