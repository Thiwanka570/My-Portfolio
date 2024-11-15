import React from 'react';
import { Link } from 'react-scroll';

function Home() {
  return (
    <div id="home" className="flex flex-col items-center p-8 ">
      <div className="flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">Hey, I'm Pavan</h1>
          <h2 className="text-3xl text-blue-400 font-bold mb-4">Full Stack Developer</h2>
          <p className="text-md mb-8 max-w-2xl mx-auto md:mx-0">
            I'm a dedicated Full Stack Developer with a passion for crafting engaging, user-friendly web applications.
            With a focus on seamless user experiences, I strive to bring ideas to life through code.
            I specialize in creating solutions that not only meet technical requirements but also resonate with users,
            ensuring a smooth and intuitive interaction with technology.
          </p>
          <Link to="projects" smooth={true} duration={500} offset={-400}><button  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 focus:outline-none">
            My Projects
          </button></Link>

        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center p-2">
            <img
              src="https://cdn.openart.ai/published/6d4GwefM5o13AxhlQ73r/NIs7rfux_9lJT_1024.webp"
              alt="Pavan"
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
