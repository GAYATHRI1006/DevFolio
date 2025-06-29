import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (name, href) => {
    setActive(name);
    setOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (href && href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <nav className={`bg-gray-700 text-white fixed top-0 w-full z-20 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        <div className="flex items-center justify-between w-full px-3 py-5">
          {/* Logo */}
          <span
  className="ml-2 text-2xl md:text-3xl font-extrabold tracking-widest cursor-pointer 
    bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
    bg-clip-text text-transparent 
    drop-shadow-[0_2px_10px_rgba(56,189,248,0.7)] 
    animate-pulse transition-shadow  duration-300"
  style={{
    filter: "brightness(1.3) contrast(1.2)",
  }}
>
  DevFolio
</span>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.name, link.href)}
                  className={`relative px-2 py-1 cursor-pointer font-semibold transition-colors duration-200 group
                    ${active === link.name ? "text-yellow-300" : "text-white"}
                  `}
                  style={{ letterSpacing: "0.5px" }}
                >
                  {link.name}
                  {/* Animated thick underline */}
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-0.5 rounded 
                      bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900
                      transition-all duration-300
                      scale-x-0 group-hover:scale-x-100
                      origin-left
                      ${active === link.name ? "scale-x-100" : ""}
                    `}
                  ></span>
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none cursor-pointer mr-2"
              aria-label="Toggle menu"
            >
              {!open ? (
                <>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm"></span>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm my-1"></span>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm"></span>
                </>
              ) : (
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`md:hidden bg-gray-700 text-white shadow-lg transition-all duration-300 overflow-hidden ${
            open ? "max-h-60 py-2" : "max-h-0 py-0"
          }`}
        >
          <ul className="flex flex-col space-y-2 px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.name, link.href)}
                  className={`block py-2 font-semibold transition-colors duration-200 w-full text-left
                    ${active === link.name ? "text-yellow-300" : "text-white"}
                  `}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Spacer to prevent content being hidden under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;