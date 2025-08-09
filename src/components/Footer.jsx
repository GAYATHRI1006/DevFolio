import React from 'react'

const Footer = () => {
  return (
    <>
      <section id="contact">
         <div id='footer' className="footer  relative z-10 w-full bg-gray-800 shadow-lg">
        <div className="container mx-auto px-4 py-4 text-center">
            <p className="text-gray-400">© 2025 Gayathri G. All rights reserved. </p>
            <div className="social-links mt-8">
            <a href="https://www.linkedin.com/in/gayathri1006/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-2">LinkedIn</a>
            <a href="https://github.com/GAYATHRI1006" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-2">GitHub</a>
            <a href="https://www.instagram.com/_._.unique_one._._/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mx-2">Instagram</a>
            </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer
