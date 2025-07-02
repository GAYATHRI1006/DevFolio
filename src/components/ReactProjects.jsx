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
    popupDescription:"The Shri Ram Restaurant Website is a fully responsive and visually appealing static site designed using HTML, CSS, and JavaScript. It features a beautifully organized menu section with categories like Starters, Main Dishes, and Chats. Users can easily locate nearby branches through the integrated location section and contact the restaurant directly for orders. The site includes a prominent “Order Online” button for better user interaction. Deployed via Netlify, this project offers a clean and efficient way to showcase a restaurant's offerings online.",
    technologies: ["HTML", "CSS"],
    liveUrl: "https://shri-ram-restaurant.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Restaurant"
  },
  {
    title: "Student Form",
    description: "A web app to collect and display student details.",
    popupDescription:"The Student Registration Form is a dynamic web project built using HTML, CSS, and JavaScript that allows users to input, display, and manage student details. It collects information such as name, age, gender, course, and email through a structured form. Submitted entries appear instantly in a table below, with options to delete individual records. The interface features clean styling and responsive design with interactive hover effects. This project demonstrates front-end development fundamentals, DOM manipulation, and form validation techniques",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://student-form-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Form"
  },
  {
    title: "City Stats Web App",
    description: "Select a city and view related information interactively.",
    popupDescription:"The City Stats Web App is a beginner-friendly project that displays key statistics—population, literacy rate, and primary language—of selected Indian cities. Built using HTML, CSS, and JavaScript, it features a dropdown for city selection and a button to reveal data. The UI is styled with a modern gradient background and responsive layout. It includes hover and click effects for better interactivity. This project helps learners understand DOM manipulation and basic event handling in web development.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://city-stats-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/City-Stats"
  },
  {
    title: "BMI Calculator",
    description: "A responsive React application that calculates Body Mass Index (BMI) instantly.",
    popupDescription:"The BMI Calculator is a responsive web application developed using React.js that calculates the Body Mass Index (BMI) based on the user's height and weight inputs. It categorizes the calculated BMI into health ranges such as underweight, normal weight, overweight, and obese for better health understanding. The app incorporates real-time input validation and error handling to ensure accurate data entry. It also features a clear/reset button to allow users to start a new calculation easily. Built with modern React practices using functional components and Hooks, the application delivers a seamless and interactive user experience.",
    technologies: ["React", "CSS"],
    liveUrl: "https://bmi-calculator-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/BMI_Calculator"
  },
  {
    title: "Currency Converter Using React",
    description: "Real-time currency conversion app using API.",
    popupDescription:"The React Currency Converter is a responsive web application that performs real-time currency conversions using the ExchangeRate API. It allows users to input an amount, choose source and target currencies, and instantly view the converted value. The application automatically updates results upon any input or currency selection change, enhancing interactivity. It is built using React and Axios for efficient API integration and data handling. The user interface is clean, minimal, and optimized for a smooth user experience across devices.",
    technologies: ["React", "CSS", "JavaScript","API"],
    liveUrl: "https://currency-converter-using-react-samp.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency_Converter_using_React"
  },
  {
    title: "FAQ Accordion",
    description: "Interactive FAQ component with open/close animation.",
    popupDescription:"The React FAQ Accordion is an interactive and lightweight web component designed to display frequently asked questions in an engaging manner. Built using React functional components and state management, it reveals answers when a question is clicked, enhancing the user experience. The questions are passed dynamically via props and rendered using reusable components, ensuring scalability and maintainability. Smooth open/close animations add to the visual appeal, while the layout remains fully responsive across devices. This project is ideal for integrating into websites where clean, organized FAQ sections are needed.",
    technologies: ["React", "CSS"],
    liveUrl: "https://faq-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FAQ_App"
  },
  {
    title: "Color Flipper",
    description: "Changes background color using random HEX values.",
    popupDescription:"The Color Flipper is a lightweight and interactive web app that changes the background color to a randomly generated HEX value each time a button is clicked. It visually displays the generated HEX code at the top-right corner, offering users instant feedback. Developed using HTML, CSS, and JavaScript, the app features a clean and minimal user interface. The core logic involves generating a random HEX color and applying it dynamically to the background. This beginner-friendly project demonstrates fundamental DOM manipulation and event handling in JavaScript.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://color-flipper-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Color-Flipper"
  },
  {
    title: "Currency Converter Using Javascript",
    description: "A real-time currency converter using Frankfurter API.",
    popupDescription:"The Currency Converter is a simple yet powerful web application built using HTML, CSS, and JavaScript, designed to convert values between global currencies in real time. It uses the Frankfurter API to fetch accurate and live exchange rates, ensuring reliable conversions. The interface is user-friendly and responsive, making it accessible across different devices. With support for over 30 international currencies, users can seamlessly switch between different options. The application’s clean and minimal design enhances usability and demonstrates core web development and API integration skills.",
    technologies: ["HTML", "CSS","JavaScript","API"],
    liveUrl: "https://currency-converter-using-api.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Currency-Converter"
  },
  {
    title: "Digital Clock Using Javascript",
    description: "A web app that displays real-time time, date, and day.",
    popupDescription:"The Digital Clock Web Application is a responsive and real-time clock built using HTML, CSS, and JavaScript. It displays the current time in a 12-hour format with AM/PM, along with the full date in DD/MM/YYYY format and the day of the week. The clock updates every 500 milliseconds using JavaScript’s setInterval function, ensuring accurate timekeeping. The layout is styled with modern CSS for a clean, user-friendly interface. This project highlights core front-end skills such as DOM manipulation, real-time updates, and responsive UI design.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://digital-clock-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital-Clock"
  },
  {
    title: "Random Letter Picker",
    description: "Picks a random letter from any entered sentence or word.",
    popupDescription:"The Random Letter Picker is a fun and interactive web application developed using HTML, CSS, and JavaScript. It allows users to input any word or sentence and instantly picks a random character from the given text. The application includes input validation to ensure the entry contains letters and is not purely numeric, improving the user experience. The core logic uses Math.random() to generate a random index and display the corresponding character. With its clean and minimal design, this project demonstrates practical DOM manipulation and basic form validation techniques.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://random-letter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Random_letter"
  },
  {
    title: "Palindrome Checker",
    description: "Checks if a word or sentence is a palindrome or not.",
    popupDescription:"The Palindrome Checker is a web-based tool built using HTML, CSS, and JavaScript that determines whether a given word or sentence is a palindrome. It cleans the input by removing non-alphanumeric characters and converting all letters to lowercase to ensure accurate comparison. The app then reverses the cleaned string and checks for equality with the original cleaned input to determine the result. It features a simple and clean user interface, making it accessible and easy to use. Additionally, the app includes input validation to prompt users if the field is empty, enhancing overall usability and user experience.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://palindrome-checker-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Palindrome_Checker"
  },
  {
    title: "Length Converter",
    description: "Converts centimeters to inches with calculation and input validation",
    popupDescription:"The Length Converter is a simple and efficient web application designed to convert values from centimeters to inches. Developed using HTML, CSS, and JavaScript, it offers a clean and minimal user interface suitable for quick conversions. The tool performs real-time calculations using the formula inches = cm / 2.54, and displays results rounded to three decimal places for precision. Input validation ensures users enter valid numerical data, improving reliability and usability. This project is ideal for beginners and demonstrates fundamental concepts like DOM manipulation, input handling, and basic unit conversion logic.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://length-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Length-Converter"
  },
  {
    title: "FD Rate Calculator",
    description: "Calculates fixed deposit interest rates based on investment duration.",
    popupDescription:"The FD Rate Calculator is a user-friendly web application that determines the fixed deposit interest rate based on the investment duration. Built with HTML, CSS, and JavaScript, it allows users to input the number of months and instantly displays the applicable interest rate without reloading the page. The logic is based on predefined slabs, with rates varying for different time periods such as below 3 months, 3–6 months, 7–9 months, and beyond. It includes input validation to ensure users enter valid numeric data, offering helpful error messages for incorrect inputs. This project highlights practical use of conditional logic, event handling, and real-time DOM manipulation in frontend development.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://fd-rate-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/FD-Rate-Calculator"
  },
  {
    title: "EB Calculator",
    description: "Calculates electricity bills based on units consumed using tariff slabs.",
    popupDescription:"The EB Calculator is a simple yet effective web application designed to compute electricity bills based on user-entered unit consumption. Developed using HTML, CSS, and JavaScript, it dynamically calculates the bill amount using predefined tariff slabs with progressive rates for different usage ranges. The user interface is intuitive and responsive, ensuring a seamless experience across devices. Input validation is implemented to handle empty or non-numeric entries gracefully, providing user-friendly error messages. This project demonstrates practical application of conditionals, arithmetic operations, and DOM manipulation in frontend development.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://eb-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/EB_Calculator"
  },
  {
    title: "Temperature Converter",
    description: "Converts temperatures from Celsius to Fahrenheit with input validation.",
    popupDescription:"The Temperature Converter is a simple and user-friendly web application that allows users to instantly convert Celsius values to Fahrenheit. Built using HTML, CSS, and JavaScript, it provides a responsive design with real-time output for enhanced usability. The core logic applies the standard conversion formula—Fahrenheit = (Celsius × 9/5) + 32—executed through JavaScript. Input validation is implemented to handle empty or invalid entries, ensuring accurate and error-free interactions. This project demonstrates practical use of JavaScript functions, conditional logic, and basic DOM manipulation in frontend development.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://temperature-converter-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Temperature_Converter"
  },
  {
    title: "Word Calculator",
    description: "Counts words in a sentence or paragraph with input validation.",
    popupDescription:"The Word Calculator is a lightweight and responsive web application designed to count the number of words in user-provided text. Developed using HTML, CSS, and JavaScript, it features a simple interface where users can input a sentence or paragraph. The app trims extra spaces, filters out empty strings, and dynamically calculates the total word count. JavaScript is used to handle input validation and implement core logic using string methods like .trim(), .split(), and .filter(). This project helps demonstrate basic text processing, DOM manipulation, and user interaction in web development.",
    technologies: ["HTML", "CSS","JavaScript"],
    liveUrl: "https://word-calculator-sample.netlify.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Word_Calculator"
  },
  {
    title: "Debugging Dare",
    description:  "Platform offering quiz and IDE challenges to test and improve debugging skills",
    popupDescription:"Debugging DARE is an engaging web-based challenge platform designed to test and improve users' debugging and problem-solving skills. It features two modes: Quiz Mode, where users answer conceptual multiple-choice questions on debugging and code logic, and IDE Mode, where users interactively fix buggy code snippets in a built-in editor. Developed using HTML, CSS, JavaScript (frontend), Node.js, Express (backend), and MongoDB (database), the platform offers real-time validation, scoring, and time tracking. The clean and responsive UI enhances usability across devices. Debugging DARE is ideal for students and programmers looking to sharpen their coding accuracy in a fun and interactive way.",
    technologies: ["HTML","python","tailwind","django"],
    liveUrl: "#",
    codeUrl: "https://github.com/GAYATHRI1006/Debugging_Dare"
  },
  {
    title: "Calendar App",
    description: "Displays and navigates a monthly calendar with today's date highlighted.",
    popupDescription:"The React Calendar App is a responsive and interactive calendar application developed using React, JavaScript, HTML5, and CSS3. It allows users to view any month and year, with clearly displayed dates and highlighted current day. Users can seamlessly navigate between months using buttons or dropdowns for quick selection. The design adapts well across screen sizes, ensuring usability on both desktop and mobile devices. This project demonstrates strong command over React state management, date manipulation, and responsive layout design.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://calendar-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Calendar_App"
  },
  {
    title: "Digital Clock Using React",
    description: "Displaying the current time, date, and AM/PM format with a clean UI.",
    popupDescription:"The React Digital Clock is a real-time web application that continuously displays the current time and date using React, JavaScript, HTML5, and CSS3. The clock is designed in a 12-hour format with AM/PM indication and refreshes every second to ensure accurate updates. It also shows the current date in a human-readable format. The user interface is clean, minimal, and responsive, making it suitable for all device sizes. This project highlights your ability to manage time-based state updates in React using hooks like useState and useEffect.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://digital-clock-using-react-kohl.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Digital_Clock_using_React"
  },
   {
    title: "Strong Password Generator",
    description: "Password generator that supports various character types and lengths.",
    popupDescription:"The React Strong Password Generator is a secure and customizable tool built using React, JavaScript, HTML5, and CSS3. It allows users to generate strong passwords by selecting specific criteria such as including uppercase letters, lowercase letters, numbers, and symbols. Users can also define the desired password length and instantly copy the generated password to the clipboard. The application features a responsive design and real-time state management using React Hooks. This project demonstrates your ability to handle form inputs, conditional rendering, and dynamic state updates in a modern React application.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://password-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Password_Generator_App"
  },
  {
    title: "QR Code Generator",
    description: "Generates and downloads customizable QR codes using React.",
    popupDesription:"The React QR Code Generator is a user-friendly web application that allows users to create custom QR codes instantly. Built with React, JavaScript, HTML5, and CSS3, it lets users input any text and customize the size of the QR code before generating it. The generated QR code can also be downloaded as an image file, making it convenient for real-world use. The app features a clean and responsive UI, ensuring accessibility across all device types. This project showcases dynamic input handling, integration of third-party libraries, and effective use of React state management for real-time updates.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://qr-code-generator-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/QR_Code_Generator_App"
  },
  {
    title: "Quiz App with Timer",
    description:  "Timed quiz app with MCQs, scoring, and restart feature.",
    popupDescription:"The React Quiz App is an interactive web application designed to test users with multiple-choice questions under timed conditions. Built using React, JavaScript, HTML5, and CSS3, the app presents one question at a time with a 10-second countdown for each, enhancing engagement and focus. It tracks the user's score in real time and provides an option to restart the quiz for repeated practice. The interface is clean, responsive, and mobile-friendly, ensuring a seamless experience across devices. This project highlights your skills in React Hooks, conditional rendering, and state management within a dynamic UI.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://quiz-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Quiz_App"
  },
  {
    title: "Weather App",
    description:  "Weather app fetching real-time data using OpenWeatherMap API.",
    popupDescription:"The React Weather App is a responsive web application that fetches and displays real-time weather information using the OpenWeatherMap API. Users can search by city name to view the current temperature, humidity, wind speed, and geographic coordinates, along with relevant weather icons. The application is built using React, HTML5, CSS3, and JavaScript, showcasing clean design and dynamic rendering. It includes loading and error handling states for a smooth user experience. This project demonstrates your ability to integrate third-party APIs, manage asynchronous data fetching, and build functional, user-friendly interfaces with React.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://weather-app-sample-sigma.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Weather_App"
  },
  {
    title: "Profile Card",
    description:  "Displaying user profile cards with dynamic data and status badges.",
    popupDescription:"The React User Card App is a responsive interface that displays multiple user profiles with essential details such as name, location, description, skills, and online status. Each card showcases dynamic badges to indicate availability and includes interactive buttons for user engagement. Built using React, HTML5, CSS3, and JavaScript, the app efficiently uses props and the map() method for rendering reusable components. The clean and attractive layout demonstrates a strong understanding of component-based UI development. This project highlights your ability to build structured, interactive, and responsive interfaces using modern React practices.",
    technologies: ["HTML", "CSS","JavaScript","React"],
    liveUrl: "https://profile-card-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Profile_Card"
  },
  {
    title: "Advice App",
    description:  "Displays random advice with a counter using the Advice Slip API.",
    popupDescription:"The React Advice Generator App is a lightweight and interactive application that fetches random pieces of advice from the Advice Slip API. It features a clean user interface and dynamically updates content using React Hooks like useState and useEffect. The app also includes a counter that tracks how many different pieces of advice the user has viewed, enhancing user engagement. Built using React, HTML5, CSS3, and JavaScript, this project demonstrates the effective use of APIs and state management in modern web development. It serves as a great example of integrating external APIs to deliver real-time, meaningful content in a responsive UI.",
    technologies: ["HTML", "CSS","JavaScript","React","API"],
    liveUrl: "https://advice-app-sample.vercel.app/",
    codeUrl: "https://github.com/GAYATHRI1006/Advice_App"
  },
  {
    title: "Blog Post",
    description:  "A responsive and modern blog post layout built using Tailwind CSS.",
    popupDescription:"This project features a fully responsive and modern pricing page built using Tailwind CSS, showcasing three visually distinct subscription plans—Basic, Advanced, and Business. Each plan includes a feature list, price tag, and interactive call-to-action button, all styled with hover effects, SVG icons, and border highlights. A dedicated Featured Stories section follows the pricing plans, presenting update cards in a card layout with images, hover effects, and interactive links. The page concludes with a clean, well-structured footer that includes branding, navigation links, and social media icons. The overall design demonstrates effective use of Tailwind's utility classes to build a clean, mobile-friendly layout optimized for user engagement.",
    technologies: ["HTML", "CSS","tailwind"],
    liveUrl: "#",
    codeUrl: "https://github.com/GAYATHRI1006/Tailwind_Blog_Project"
  },
  {
    title: "Java ATM Machine",
    description: "A simple Java console application that simulates basic ATM operations.",
    popupDescription:"The ATM Simulation System is a Java-based console application that replicates basic ATM functionalities using object-oriented programming principles. It supports user authentication through hardcoded credentials and allows users to view their balance, deposit or withdraw money (in multiples of ₹500), and review a mini statement of transactions. The system is structured using interface-driven design and class abstractions for operations like viewBalance(), depositAmount(), and withdrawAmount(), implemented through a LinkedHashMap for tracking transaction history. The application ensures input validation and provides clear feedback during each operation, delivering a realistic and secure ATM interaction flow. This project showcases foundational Java skills including interfaces, encapsulation, and console-based user interaction.",
    technologies: ["Java", "Eclipse"],
    codeUrl: "https://github.com/GAYATHRI1006/Java_Project",
    isJava: true
  },
  
  {
    title: "IoT-Based Earthquake Monitoring and Alert System",
    description: "Real-time earthquake monitoring with NodeMCU and IoT-based safety alerts.",
    popupDescription:"The Earthquake Monitoring & Alert System is an IoT-based real-time safety solution built using ESP8266, a SW-420 vibration sensor, and the Blynk platform. It actively detects seismic vibrations and responds with immediate alerts—sounding a buzzer, turning off an LED, displaying a warning on a 16x2 I2C LCD, and shutting off a solenoid gas valve to prevent hazards. The system also sends real-time notifications to users via the Blynk app, enhancing remote monitoring and emergency readiness. Users can manually control devices like the buzzer and valve from their smartphones through Blynk. Built with Arduino libraries and Wi-Fi connectivity, this project highlights practical skills in embedded systems, cloud integration, and real-time alert automation.",
    technologies: ["IoT","blynk"],
    codeUrl: "https://github.com/GAYATHRI1006/Earthquake_Alert_System",
    isIot: true
  },
  {
    title: "Smart Garage Door Monitoring and Control System",
    description: "IoT garage door system with motion-based control and ThingSpeak monitoring.",
    popupDescription:"The Smart Garage Door Monitoring and Control System is an automated IoT-based solution developed using the NodeMCU ESP8266 microcontroller. It integrates multiple sensors—including a PIR motion sensor, ultrasonic distance sensor, and a magnetic reed switch—to detect motion, measure proximity, and monitor the door's status. When a vehicle is detected within a predefined distance and motion is confirmed, the system automatically opens the garage door via a servo motor. Visual indicators using red and green LEDs represent the door's closed and open states, respectively. Real-time data such as motion activity, object distance, door status, and system actions are pushed to ThingSpeak every 15 seconds, enabling seamless remote monitoring and enhanced smart home automation.",
    technologies: ["IoT","thingspeak"],
    codeUrl: "https://github.com/GAYATHRI1006/Smart_Garage_Door_System",
    isIot: true
  },
  {
    title: "Smart Automatic Device For Feeding Pets",
    description: "An automatic feeder that dispenses food at scheduled times using an RTC and keypad.",
    popupDescription:"The Automatic Pet Feeder is an Arduino-based system designed to automate pet feeding using a real-time clock (DS3231) and a servo motor. Users can set the feeding time through a 4x4 matrix keypad, and the system dispenses food at the scheduled time using the servo mechanism. A 16x2 LCD displays the current date and time, ensuring the user is always informed of the system's status. The built-in push button allows for interactive time configuration, while the DS3231 keeps accurate time even during power interruptions. This project showcases time-based automation, LCD interfacing, and real-world use of servo motors in embedded systems.",
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