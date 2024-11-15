import React from 'react';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'This is a brief description of Project One. It includes features, technologies used, and any relevant information.',
        image: 'https://source.unsplash.com/400x300/?web-development',
        link: 'https://example.com/project-one',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'This is a brief description of Project Two. It includes features, technologies used, and any relevant information.',
        image: 'https://source.unsplash.com/400x300/?software',
        link: 'https://example.com/project-two',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'This is a brief description of Project Three. It includes features, technologies used, and any relevant information.',
        image: 'https://source.unsplash.com/400x300/?app-development',
        link: 'https://example.com/project-three',
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'This is a brief description of Project Four. It includes features, technologies used, and any relevant information.',
        image: 'https://source.unsplash.com/400x300/?design',
        link: 'https://example.com/project-four',
    },
];

function Projects() {
    return (
        <div className="min-h-screen h-full">
            <h1 className="text-4xl text-center text-blue-400 font-bold mb-8">My Projects</h1>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
                {projects.map(project => (
                    <div key={project.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-white mb-2">{project.title}</h2>
                            <p className="text-gray-300 mb-4">{project.description}</p>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
