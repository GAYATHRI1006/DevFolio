import React from 'react'
function ProjectCard({ title, description, imageUrl, liveUrl, codeUrl }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex justify-between">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Live Demo
        </a>
        <a href={codeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Code
        </a>
      </div>
    </div>
  )
}
const ReactProjects = () => {
  return (
    <>
      <div className=''>
      <h3>React Projects</h3>
      <div>
        <ProjectCard/>
      </div>
        
      </div>
    </>
  )
}

export default ReactProjects
