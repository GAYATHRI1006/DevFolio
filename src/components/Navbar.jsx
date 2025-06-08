import React, { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuClicked = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-700 text-white px-3 py-4 fixed top-0 w-full z-20 shadow-lg">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <span className="ml-8 text-2xl font-extrabold tracking-tight cursor-pointer">
            Devfolio
          </span>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={menuClicked}
              className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none cursor-pointer mr-4"
              aria-label="Toggle menu"
            >
              {/* Hamburger icon only shows when menu is closed */}
              {!open && (
                <>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm"></span>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm my-1"></span>
                  <span className="block h-0.5 w-6 bg-white transition-all duration-300 rounded-sm"></span>
                </>
              )}
            </button>
          </div>

          {/* Nav Links */}
          <div
            className={`
              fixed top-0 left-0 h-full w-2/3 bg-gray-700 text-white shadow-lg transform transition-transform duration-300 ease-in-out
              md:static md:bg-transparent md:shadow-none md:w-auto md:flex md:items-center md:ml-auto
              ${open ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0
              z-50
            `}
          >
            {/* Close Icon for mobile menu */}
            <div className="flex justify-end md:hidden">
              <button
                onClick={closeMenu}
                className="p-4 focus:outline-none cursor-pointer"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-18 space-y-8 md:space-y-0 mt-24 md:mt-0 px-6 py-6 md:px-0 md:py-0">
              <a href="#" className="hover:text-yellow-300 text-lg font-medium transition-colors duration-200" onClick={closeMenu}>Home</a>
              <a href="#" className="hover:text-yellow-300 text-lg font-medium transition-colors duration-200" onClick={closeMenu}>About</a>
              <a href="#" className="hover:text-yellow-300 text-lg font-medium transition-colors duration-200" onClick={closeMenu}>Skills</a>
              <a href="#" className="hover:text-yellow-300 text-lg font-medium transition-colors duration-200" onClick={closeMenu}>Projects</a>
              <a href="#" className="hover:text-yellow-300 text-lg font-medium transition-colors duration-200 md: mr-8" onClick={closeMenu}>Contact</a>
            </div>
          </div>
        </div>
        {/* Overlay for mobile menu */}
        {open && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </nav>
      {/* Spacer to prevent content being hidden under navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar