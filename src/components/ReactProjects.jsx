import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiMongodb, SiExpress, SiVite, SiDjango, SiEclipseide } from 'react-icons/si';
import { FaCloud } from "react-icons/fa";
import { SiPython } from "react-icons/si";

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
    case 'python': return <SiPython className="text-yellow-600" />;
    case 'blynk':
      return (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="inline-block" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#23C586"/>
          <path d="M23.5 16c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5 3.358-7.5 7.5-7.5 7.5 3.358 7.5 7.5zm-7.5-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 2a3.5 3.5 0 110 7 3.5 3.5 0 010-7z" fill="#fff"/>
        </svg>
      );
    case 'thingspeak':
      return (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="none" className="inline-block" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="24" height="18" rx="3" fill="#1976D2"/>
          <rect x="8" y="10" width="16" height="2.5" rx="1.25" fill="#fff"/>
          <rect x="8" y="15" width="10" height="2.5" rx="1.25" fill="#fff"/>
          <polygon points="10,22 14,20 28,20 28,25 10,25" fill="#1976D2"/>
        </svg>
      );
    default: return null;
  }
}

function ProjectCard({ title, description, popupDescription, technologies, liveUrl, codeUrl, isIot, isJava, onTitleClick }) {
  return (
    <div className="relative z-10">
      <div className="bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-[13px] shadow-lg hover:shadow-2xl flex flex-col h-full p-[21px] transform hover:scale-105 transition-transform duration-300">
        <h3
          className="text-xl font-semibold mb-2 cursor-pointer hover:underline hover:text-emerald-600"
          onClick={() => onTitleClick && onTitleClick({ title, popupDescription })}
        >
          {title}
        </h3>
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
    popupDescription:"A modern, responsive restaurant website designed for Shri Ram Restaurant using HTML, CSS, and JavaScript. Includes a clean home page, categorized menu sections (Starters, Main Dishes, Chats), an integrated location section for easy branch discovery, and a call-to-action for online orders. Deployed via Netlify for seamless access and optimized for both desktop and mobile devices. Smooth navigation experience with interactive elements for better user engagement. Structured layout ensures easy customization for future enhancements.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://shri-ram-restaurant.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Restaurant"
  },
  {
    title: "Student Form",
    description: "A web app to collect and display student details.",
    popupDescription:"An interactive web-based student registration form built using HTML, CSS, and JavaScript. Collects essential student details including name, age, gender, course, and email. Submitted data is dynamically displayed in a responsive table with real-time DOM updates. Each entry includes a delete button for easy record management. The interface is styled with modern CSS, offering a clean layout and hover effects for improved UX. Designed to demonstrate practical front-end development skills, including form handling and client-side scripting.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://student-form-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Form"
  },
  {
    title: "City Stats Web App",
    description: "Select a city and view related information interactively.",
    popupDescription:"A beginner-friendly web application that displays key statistics—population, literacy rate, and primary language—of selected Indian cities. Built using HTML, CSS, and JavaScript, the app features a dropdown menu for city selection and a dynamic 'Show Stats' button that reveals the relevant data. Styled with a gradient background and responsive layout, it ensures a pleasant user experience across devices. Includes interactive elements such as hover and click effects to enhance usability. Ideal for practicing DOM manipulation, event handling.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://city-stats-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/City-Stats"
  },
  {
    title: "BMI Calculator",
    description: "A responsive React application that calculates Body Mass Index (BMI) instantly.",
    popupDescription:"A responsive BMI (Body Mass Index) Calculator developed using React.js with functional components and Hooks. Accepts user input for height (cm) and weight (kg), calculates BMI, and displays the corresponding health category: Underweight, Normal, Overweight, or Obese. Includes real-time validation using regular expressions, error handling, and a reset button to clear inputs. The calculator converts height to meters and applies the BMI formula for accurate results. Styled with custom CSS to ensure a clean layout across devices.",
    technologies: ["React", "CSS"],
    liveUrl: "https://bmi-calculator-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/BMI_Calculator"
  },
  {
    title: "Currency Converter Using React",
    description: "Real-time currency conversion app using API.",
    popupDescription:"A real-time currency converter built with React and powered by the ExchangeRate API. Converts input amounts between popular currencies with automatic updates on currency or value change. Features a clean, responsive interface and efficient state management using React Hooks. Axios is used to fetch live exchange rates, ensuring accurate and up-to-date conversions. Built for users seeking quick and easy currency conversion with minimal UI clutter. Ideal for practicing API integration, asynchronous data handling.",
    technologies: ["React", "CSS", "JavaScript","API"],
    liveUrl: "https://currency-converter-using-react-samp.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency_Converter_using_React"
  },
  {
    title: "FAQ Accordion",
    description: "Interactive FAQ component with open/close animation.",
    popupDescription:"An interactive FAQ accordion built using React with reusable components and a clean, modular structure. Clicking a question toggles the corresponding answer using state management, enhancing the user experience with smooth interaction. Designed with responsive styling to ensure optimal display across devices. Implements component-based architecture with props and state for dynamic rendering. Ideal for practicing React fundamentals such as component composition, event handling, and conditional rendering.",
    technologies: ["React", "CSS"],
    liveUrl: "https://faq-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FAQ_App"
  },
  {
    title: "Color Flipper",
    description: "Changes background color using random HEX values.",
    popupDescription:"A simple and engaging web application that generates a random HEX color and changes the page background each time the button is clicked. The generated HEX code is displayed at the top-right corner, providing a visual reference. Developed using HTML, CSS, and JavaScript, the app features a minimalistic design and smooth transitions. Ideal for learning random number generation, DOM manipulation, and event handling in JavaScript.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://color-flipper-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Color-Flipper"
  },
  {
    title: "Currency Converter Using Javascript",
    description: "A real-time currency converter using Frankfurter API.",
    popupDescription:"A responsive currency converter built using HTML, CSS, and JavaScript, utilizing the Frankfurter API to provide real-time exchange rates. Converts values between over 30 global currencies with live data fetched on selection or input change. Designed with a clean and minimal interface for an intuitive user experience across devices. Demonstrates proficiency in API integration, asynchronous JavaScript, and DOM manipulation.",
    technologies: ["HTML", "CSS","JavaScript","API"],
    liveUrl: "https://currency-converter-using-api.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency-Converter"
  },
  {
    title: "Digital Clock Using Javascript",
    description: "A web app that displays real-time time, date, and day.",
    popupDescription:"A digital clock web application developed using HTML, CSS, and JavaScript. Displays the current time in 12-hour format with AM/PM, full date in DD/MM/YYYY format, and the day of the week. Utilizes setInterval to update the time every 500 milliseconds, ensuring real-time accuracy. Styled with CSS for a clean, readable layout suitable for both desktop and mobile displays. Built to practice working with JavaScript's Date object, DOM manipulation.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://digital-clock-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital-Clock"
  },
  {
    title: "Random Letter Picker",
    description: "Picks a random letter from any entered sentence or word.",
    popupDescription:"A lightweight web application that selects a random letter from any user-inputted word or sentence. Built using HTML, CSS, and JavaScript, the app features real-time validation to ensure the input contains alphabetic characters and is not a number-only string. Upon clicking the button, a random character is selected using Math.random() and displayed instantly. Designed with a minimal UI for quick interaction and responsive performance.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://random-letter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Random_letter"
  },
  {
    title: "Palindrome Checker",
    description: "Checks if a word or sentence is a palindrome or not.",
    popupDescription:"An interactive palindrome checker built with HTML, CSS, and JavaScript that verifies whether a given word or sentence is a palindrome. The logic cleans the input by converting it to lowercase and removing spaces and non-alphanumeric characters, then compares it with its reversed version. Displays results instantly with clear feedback. Includes input validation to handle empty fields and enhance user experience.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://palindrome-checker-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Palindrome_Checker"
  },
  {
    title: "Length Converter",
    description: "Converts centimeters to inches with calculation and input validation",
    popupDescription:"A simple and efficient length conversion tool that converts centimeters to inches using the formula: inches = cm / 2.54. Built with HTML, CSS, and JavaScript, the application delivers instant results with real-time input validation to handle empty or invalid entries. Displays output rounded to three decimal places for accuracy. Designed with a minimal and responsive layout for ease of use on any device.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://length-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Length-Converter"
  },
  {
    title: "FD Rate Calculator",
    description: "Calculates fixed deposit interest rates based on investment duration.",
    popupDescription:"A Fixed Deposit (FD) Rate Calculator developed using HTML, CSS, and JavaScript to determine the applicable interest rate based on the investment duration in months. Features an intuitive interface, real-time validation, and instant output display without reloading the page. Interest rates are determined using defined slabs, including ranges for less than 3 months to over 9 months. Includes error messages for empty or non-numeric inputs.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://fd-rate-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FD-Rate-Calculator"
  },
  {
    title: "EB Calculator",
    description: "Calculates electricity bills based on units consumed using tariff slabs.",
    popupDescription:"An interactive Electricity Bill (EB) Calculator built using HTML, CSS, and JavaScript. Calculates the total electricity bill based on user-inputted units and predefined tariff slabs. Handles slab-wise logic dynamically and displays accurate billing amounts instantly. Features include responsive design, input validation for empty or non-numeric values, and a lightweight, user-friendly interface. Tariff calculation ranges from ₹0.75/unit to ₹1.50/unit based on usage tiers.",
    technologies: ["HTML", "CSS", "JavaScript"], // <-- add this!
    liveUrl: "https://eb-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/EB_Calculator"
  },
  {
    title: "Temperature Converter",
    description: "Converts temperatures from Celsius to Fahrenheit with input validation.",
    popupDescription:"A lightweight temperature converter that converts values from Celsius to Fahrenheit using the formula: (Celsius * 9/5) + 32. Built with HTML, CSS, and JavaScript, the application offers real-time result display upon clicking the convert button. Features a clean and responsive design optimized for any screen size. Includes input validation to handle empty or non-numeric entries, ensuring accurate output and smooth interaction. Designed for practicing arithmetic logic, DOM manipulation, and form handling.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://temperature-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Temperature_Converter"
  },
  {
    title: "Word Calculator",
    description: "Counts words in a sentence or paragraph with input validation.",
    popupDescription:"A simple and efficient word counter application built using HTML, CSS, and JavaScript. Calculates the total number of words entered in a text area by trimming extra spaces and filtering out empty strings. Utilizes JavaScript string methods to clean and process the input for accurate results. Features a minimal and responsive interface with real-time input validation to ensure meaningful user entries. Ideal for writers, students, and anyone needing quick word counts. Project to understand string manipulation, input handling, and dynamic content.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://word-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Word_Calculator"
  },
  {
    title: "Debugging Dare",
    description:  "Platform offering quiz and IDE challenges to test and improve debugging skills",
    popupDescription:"Debugging DARE is a web-based challenge platform built to enhance debugging and problem-solving skills through interactive learning. It features two distinct modes: Quiz Mode for multiple-choice debugging questions, and IDE Mode for fixing buggy code within a built-in editor. It includes real-time validation, scoring, and time tracking. The responsive user interface ensures smooth performance across devices. Designed for students and programmers, this project emphasizes coding accuracy and logic building through engaging challenges.",
    technologies: ["HTML","python","tailwind","django"],
    liveUrl: "#",
    codeUrl: "https://github.com/GAYATHRI1006/Debugging_Dare"
  },
  {
    title: "Calendar App",
    description: "Displays and navigates a monthly calendar with today's date highlighted.",
    popupDescription:"A responsive and user-friendly calendar application developed using React. Displays a full monthly calendar with options to navigate through months and years using dropdown selectors and navigation buttons. Highlights the current date dynamically and ensures accurate month-day alignment. Built with functional components and styled using modern CSS, the app adapts well to different screen sizes. Offers a smooth user experience for viewing and exploring calendar dates. Ideal for practicing React fundamentals, state management, and date manipulation.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://calendar-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Calendar_App"
  },
  {
    title: "Digital Clock Using React",
    description: "Displaying the current time, date, and AM/PM format with a clean UI.",
    popupDescription:"A real-time digital clock application developed using React. Displays the current time in 12-hour format with AM/PM, along with the full date in a readable format. Updates every second using JavaScript's setInterval function and React state management. Designed with a clean and minimal interface for a distraction-free user experience. Fully responsive across devices and built using modern React practices. Ideal for practicing real-time rendering, component lifecycle handling, and UI structuring in a React environment without external dependencies or backend integration.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://digital-clock-using-react-kohl.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital_Clock_using_React"
  },
   {
    title: "Strong Password Generator",
    description: "Password generator that supports various character types and lengths.",
    popupDescription:"A customizable and secure password generator built using React. Generates strong passwords based on selected criteria including length, uppercase letters, lowercase letters, numbers, and symbols. Features a real-time preview of the generated password and an option to copy it to the clipboard with a single click. Built using functional components and state hooks for interactive control. Designed with a clean, responsive layout to enhance usability across devices. Ideal for practicing form handling, conditional rendering, and string generation logic using React.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://password-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Password_Generator_App"
  },
  {
    title: "QR Code Generator",
    description: "Generates and downloads customizable QR codes using React.",
    popupDescription:"A responsive QR Code Generator built using React that creates QR codes instantly based on custom input. Allows users to adjust the size of the QR code and download it as an image file. Utilizes React functional components and hooks for state management and dynamic rendering. The clean interface ensures ease of use across all device sizes. Ideal for exploring API usage, image generation, and real-time UI updates in React. A practical tool for learning how to integrate third-party libraries and build interactive, user-driven components in modern front-end development.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://qr-code-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/QR_Code_Generator_App"
  },
  {
    title: "Quiz App with Timer",
    description:  "Timed quiz app with MCQs, scoring, and restart feature.",
    popupDescription:"A timed quiz application built using React that displays multiple-choice questions one at a time with a countdown timer of 10 seconds per question. Tracks user score, handles option selection, and provides a restart option at the end of the quiz. Features a responsive and clean user interface for smooth performance across devices. Developed using React functional components and hooks for state management and dynamic rendering. Ideal for practicing conditional rendering, timer-based logic, and user interaction handling in React while building an engaging front-end web application.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://quiz-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Quiz_App"
  },
  {
    title: "Weather App",
    description:  "Weather app fetching real-time data using OpenWeatherMap API.",
    popupDescription:"A responsive weather application built using React and the OpenWeatherMap API that provides real-time weather updates based on city name input. Displays temperature, humidity, wind speed, coordinates, and country details, with dynamic weather icons and smooth UI transitions. Includes loading indicators and error handling for a seamless user experience. Developed using React functional components and hooks for clean state management. Designed to reinforce skills in API integration, asynchronous data fetching, and conditional rendering while delivering a useful and interactive tool for weather tracking.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://weather-app-sample-sigma.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Weather_App"
  },
  {
    title: "Profile Card",
    description:  "Displaying user profile cards with dynamic data and status badges.",
    popupDescription:"A responsive user card interface built using React that displays multiple user profiles with details such as name, location, description, skills, and online status. Each card includes a dynamic badge for online/offline status and lists skills in a clean, styled format. Built using props and array mapping for dynamic rendering and component reuse. The layout is fully responsive with interactive UI elements for an enhanced experience. Ideal for practicing component-based architecture, conditional rendering, and state-less data display in modern React development using clean and organized code structure.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://profile-card-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Profile_Card"
  },
  {
    title: "Advice App",
    description:  "Displays random advice with a counter using the Advice Slip API.",
    popupDescription:"A dynamic advice generator built using React that fetches random advice from the Advice Slip API with each click. Tracks the number of advice slips viewed using a simple counter. Implements useState and useEffect hooks for state management and API integration. Features a clean and minimal interface with real-time content updates and smooth transitions. Ideal for practicing asynchronous data fetching, side effects, and interactive UI handling in React. A lightweight, responsive application perfect for showcasing API usage and enhancing user engagement through randomized, motivational content.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://advice-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Advice_App"
  },
  {
    title: "Blog Post",
    description:  "A responsive and modern blog post layout built using Tailwind CSS.",
    popupDescription:"A responsive pricing section built using HTML5 and Tailwind CSS featuring three subscription plans—Basic, Advanced, and Business—each with clear feature listings, hover effects, and call-to-action buttons. Includes a featured stories section displaying recent updates in a card layout with images and interactive “Read More” links. The footer contains branding, categorized navigation links, and social media icons, all styled with a flexible layout. SVG icons are used for visual clarity. Ideal for mastering utility-first CSS, responsive design, and UI layout organization in web components using Tailwind.",
    technologies: ["HTML", "CSS","tailwind"],
    liveUrl: "#",
    codeUrl: "https://github.com/GAYATHRI1006/Tailwind_Blog_Project"
  },
  {
    title: "Java ATM Machine",
    description: "A simple Java console application that simulates basic ATM operations.",
    popupDescription:"A console-based ATM simulation system developed in Java using object-oriented programming principles. Allows authenticated users to view balance, deposit and withdraw money (only in ₹500 multiples), and access mini statements. Implements interfaces and class hierarchies to manage core banking functionalities. Mini statements are tracked using a LinkedHashMap, and input is validated with hardcoded credentials. Features include a menu-driven interface, balance checks, and secure session handling. Ideal for practicing Java fundamentals such as interfaces, encapsulation, and control flow.",
    technologies: ["Java", "Eclipse"],
    codeUrl: "https://github.com/GAYATHRI1006/Java_Project",
    isJava: true
  },
  
  {
    title: "IoT-Based Earthquake Monitoring and Alert System",
    description: "Real-time earthquake monitoring with NodeMCU and IoT-based safety alerts.",
    popupDescription:"An IoT-based real-time earthquake monitoring and alert system developed using NodeMCU ESP8266, SW-420 vibration sensor, 16x2 I2C LCD, buzzer, LED, and a solenoid gas valve. When seismic vibrations are detected, the system triggers alerts via Blynk, activates a buzzer, turns off an LED, displays warnings on an LCD, and closes the gas valve to prevent hazards. Built-in remote controls via Blynk enhance safety and flexibility. Ideal for practicing embedded systems, IoT integration, and real-time alert mechanisms using sensors, mobile app notifications, and actuator-based safety protocols in microcontroller projects.",
    technologies: ["IoT","blynk"],
    codeUrl: "https://github.com/GAYATHRI1006/Earthquake_Alert_System",
    isIot: true
  },
  {
    title: "Smart Garage Door Monitoring and Control System",
    description: "IoT garage door system with motion-based control and ThingSpeak monitoring.",
    popupDescription:"A smart garage door automation system developed using NodeMCU ESP8266 that combines motion detection, distance measurement, and door status monitoring. Utilizes a PIR sensor, ultrasonic sensor, and magnetic reed switch to detect vehicles and control a servo motor for automatic door operation. Real-time status is displayed through LEDs and sent to ThingSpeak for remote monitoring. Features include failsafe distance logic, timed closure, and periodic sensor data updates. Ideal for exploring IoT integration, sensor fusion, automation logic, and cloud-based monitoring using microcontrollers, real-time feedback loops, and Wi-Fi connectivity.",
    technologies: ["IoT","thingspeak"],
    codeUrl: "https://github.com/GAYATHRI1006/Smart_Garage_Door_System",
    isIot: true
  },
  {
    title: "Smart Automatic Device For Feeding Pets",
    description: "An automatic feeder that dispenses food at scheduled times using an RTC and keypad.",
    popupDescription:"An Arduino-based automatic pet feeder designed to dispense food at scheduled times using a DS3231 real-time clock, servo motor, 4x4 keypad, and 16x2 LCD display. Feeding times are configured manually through the keypad and stored reliably with the RTC. When the real-time matches the preset schedule, the servo rotates to release food. The LCD continuously displays current time and updates feeding status. Ideal for exploring embedded system design, real-time scheduling, and hardware interfacing. Built for convenience, reliability, and automation in pet care using fundamental components and structured logic.",
    technologies: ["IoT"],
    codeUrl: "https://github.com/GAYATHRI1006/Smart_Pet_Feeder",
    isIot: true
  }
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Django", value: "django" },
  { label: "React", value: "react" },
  { label: "Tailwind", value: "tailwind" },
  { label: "Java", value: "java" },
  { label: "API", value: "api" },
  { label: "JavaScript", value: "javascript" },
  { label: "IoT", value: "iot" }
];

const ReactProjects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Popup state for elaborate description
  const [popup, setPopup] = useState({ open: false, title: '', description: '' });

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -2% 0px'
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
      {/* Popup Modal */}
      {popup.open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-pink-100 rounded-xl shadow-2xl max-w-md w-full p-12 relative animate-fade-in">
            <button
              className="absolute top-4 right-5 text-2xl text-gray-500 hover:text-gray-800 transition cursor-pointer"
              onClick={() => setPopup({ open: false, title: '', description: '' })}
              aria-label="Close"
            >
              &times;
            </button>
            <h2
              className="text-2xl font-extrabold text-center mb-4 bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300 bg-clip-text text-transparent tracking-wide drop-shadow"
            >
              Description
            </h2>
            <p className="text-gray-700 text-lg font-semibold text-justify">{popup.description}</p>

          </div>
        </div>
      )}

      <section
        id="projects"
        ref={sectionRef}
        className={`scroll-mt-32 mt-30 transition-all duration-500 ease-out ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
      >
        <div className="relative z-10">
          <h3 className="relative text-4xl md:text-5xl font-extrabold text-center mb-10
            text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-950 to-blue-300 drop-shadow-lg tracking-wide
            after:content-[''] after:block after:mx-auto after:mt-3 after:w-24 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-slate-200"
          >
            Projects
          </h3>
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
                  hover:scale-105 
                  focus:outline-none
                  cursor-pointer
                  ${selectedFilter === filter.value
                    ? "bg-gradient-to-r from-pink-700 via-pink-500 to-pink-300 text-white border-pink-700 shadow-lg"
                    : "bg-white text-pink-700 border-pink-300 hover:bg-pink-50 hover:text-pink-800 hover:border-pink-400"}
                `}
                style={{
                  boxShadow: selectedFilter === filter.value ? '0 4px 20px 0 rgba(219,39,119,0.15)' : undefined
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
                <ProjectCard
                  key={idx}
                  {...project}
                  onTitleClick={({ title, popupDescription }) =>
                    setPopup({ open: true, title, description: popupDescription || project.description })
                  }
                />
              ))}
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center text-gray-500 text-lg">No projects found.</div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReactProjects;