import React, { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Certifications", href: "#certifications" },
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
        <div className="flex items-center justify-between w-full px-3 py-3">
          {/* Logo */}
          <span
            className="ml-2 text-2xl md:text-3xl font-extrabold tracking-widest cursor-pointer 
              bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 
              bg-clip-text text-transparent 
              drop-shadow-[0_2px_10px_rgba(56,189,248,0.7)] 
              animate-pulse transition-shadow duration-300"
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
                  className={`relative px-2 py-1 cursor-pointer font-semibold transition-colors duration-200 group inline-flex
                    ${active === link.name ? "text-yellow-300" : "text-white"}
                  `}
                  style={{ letterSpacing: "0.5px" }}
                >
                  <span className="relative inline-block">
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 rounded 
                        bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900
                        transition-all duration-300
                        scale-x-0 group-hover:scale-x-100
                        origin-left
                        ${active === link.name ? "scale-x-100" : ""}
                        inline-block
                      `}
                      style={{ width: "100%" }}
                    ></span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setOpen(true)}
              className="flex justify-center items-center w-10 h-10 focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              {/* Always show hamburger icon */}
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="5" y1="7" x2="19" y2="7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="5" y1="17" x2="19" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav - Slide from Left */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg z-30 transform transition-transform duration-300 ease-in-out
            ${open ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full relative">
            {/* Close button ONLY inside sidebar */}
            <button
              className="absolute top-4 right-4 text-2xl"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-4 px-8 mt-16">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.name, link.href)}
                    className={`relative py-2 font-semibold transition-colors duration-200 w-full text-left group inline-flex
                      ${active === link.name ? "text-yellow-300" : "text-white"}
                    `}
                  >
                    <span className="relative inline-block">
                      {link.name}
                      {/* Animated underline for sidebar */}
                      <span
                        className={`absolute left-0 -bottom-1 h-0.5 rounded
                          bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900
                          transition-all duration-300
                          scale-x-0 group-hover:scale-x-100
                          origin-left
                          ${active === link.name ? "scale-x-100" : ""}
                          inline-block
                        `}
                        style={{ width: "100%" }}
                      ></span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* Overlay for mobile nav */}
        {open && (
          <div
            className="fixed inset-0 bg-transparent z-20 md:hidden transition-all duration-300"
            style={{ pointerEvents: open ? "auto" : "none" }}
            onClick={() => setOpen(false)}
          ></div>
        )}
      </nav>
      {/* Spacer to prevent content being hidden under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;