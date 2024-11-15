import React from 'react';

function MyStory() {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-white min-h-screen">
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Story</h1>
        <p className="text-lg">
          Welcome to my journey as a developer! I’m Pavan, a passionate web developer 
          with a keen interest in building dynamic and user-friendly applications.
        </p>
      </div>

      {/* Background Section */}
      <div className="max-w-4xl text-left mb-8">
        <h2 className="text-2xl font-semibold mb-2">Background</h2>
        <p className="text-lg">
          I started my coding journey with a curiosity for technology and a drive to
          create. Over the years, I’ve developed a deep understanding of web development,
          honing my skills in both front-end and back-end technologies. I enjoy solving
          complex problems and continuously learning new frameworks, languages, and best practices.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-4xl text-left mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p className="text-lg">
          Throughout my career, I’ve acquired expertise in the following areas:
        </p>
        <ul className="list-disc list-inside mt-2">
          <li>JavaScript, React, and Tailwind CSS for front-end development</li>
          <li>Node.js and Express for building server-side applications</li>
          <li>RESTful APIs and microservices architecture</li>
          <li>Version control with Git and GitHub</li>
          <li>CI/CD implementation for efficient deployment workflows</li>
        </ul>
      </div>

      {/* Goals Section */}
      <div className="max-w-4xl text-left">
        <h2 className="text-2xl font-semibold mb-2">Goals</h2>
        <p className="text-lg">
          My goal is to continue growing as a developer, taking on more challenging projects
          and contributing to meaningful software solutions. I aspire to be part of a team 
          where I can make a significant impact and further refine my skills in web development 
          and software engineering.
        </p>
      </div>
    </div>
  );
}

export default MyStory;
