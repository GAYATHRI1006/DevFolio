import React, { useState, useEffect, useRef } from "react";
import { FaLaptopCode, FaNetworkWired } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";

const FAQS = [
  {
    title: "Website Designer",
    content: "I design and build responsive, user-friendly websites using modern technologies like React, Tailwind CSS, and JavaScript. My focus is on clean layouts, accessibility, and seamless user experience."
  },
  {
    title: "ML Engineer",
    content: "I develop and deploy machine learning models for real-world applications. My skills include data preprocessing, model training, evaluation, and integration using Python and popular ML frameworks."
  },
  {
    title: "Network Engineer",
    content: "I configure, monitor, and troubleshoot network infrastructures. My expertise covers routing, switching, network security, and ensuring reliable connectivity for organizations."
  }
];

const About = () => {
  const [showContent, setShowContent] = useState(false);
  const [hovered, setHovered] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowContent(entry.isIntersecting);
      },
      {
        threshold: 0,
        rootMargin: '0px 0px -10% 0px'
      }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative z-10 pr-5 max-w-6xl scroll-mt-32 mx-auto transition-all duration-700 ease-out ${
        showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16 pointer-events-none"
      }`}
    >
      <div>
        <h3 className="relative text-4xl md:text-5xl font-extrabold text-center mb-10
          text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-blue-950 to-blue-300 drop-shadow-lg tracking-wide
          after:content-[''] after:block after:mx-auto after:mt-3 after:w-24 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-slate-200"
        >
          About
        </h3>
        <p className="text-xl text-white text-center mb-10 font-semibold leading-relaxed">
          A passionate and versatile tech enthusiast skilled in website design, machine learning, and network engineering. Specializes in creating responsive and user-friendly web interfaces, developing intelligent ML models for real-world problems, and managing robust network systems. Combines creative design sense with strong technical acumen to deliver efficient and scalable solutions. Adept in front-end technologies, data-driven development, and secure networking practices. Continuously exploring new tools and innovations to stay ahead in the evolving tech landscape. Dedicated to building impactful digital experiences and solving complex challenges across multidisciplinary domains.
        </p>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div
              key={faq.title}
              className="rounded-xl border border-blue-800 bg-gradient-to-br from-[#0a2540] via-[#193766] to-[#274690] shadow hover:shadow-2xl transition-shadow duration-300"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <button
                className="w-full text-left px-6 py-4 font-semibold text-blue-100 text-lg focus:outline-none transition-colors duration-300 hover:bg-[#193766]/60 rounded-t-xl flex items-center gap-3 cursor-pointer bg-gradient-to-r from-[#0a2540] via-[#193766] to-[#274690]"
                tabIndex={0}
                style={{ cursor: 'pointer' }}
              >
                {/* Elegant Icon on the left */}
                {faq.title === "Website Designer" && (
                  <FaLaptopCode className="w-6 h-6 text-cyan-300" />
                )}
                {faq.title === "ML Engineer" && (
                  <GiArtificialIntelligence className="w-6 h-6 text-green-300" />
                )}
                {faq.title === "Network Engineer" && (
                  <FaNetworkWired className="w-6 h-6 text-indigo-300" />
                )}
                {faq.title}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 px-6 border-t border-blue-200 mt-1 rounded-b-xl ${
                  hovered === idx ? 'max-h-40 opacity-100 py-2' : 'max-h-0 opacity-0 py-0'
                } bg-gradient-to-r from-[#e0f2fe] via-[#f0f6ff] to-white`}
                style={{ transitionProperty: 'max-height, opacity, padding' }}
              >
                <p className="text-blue-900 text-base">{faq.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;