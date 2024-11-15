import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY> 50 );
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full text-white shadow-lg z-50 transition-colors duration-300 ${isScrolled ? 'bg-gray-900' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="home" smooth={true} duration={500} offset={-400} className="text-2xl font-bold tracking-tight hover:text-gray-300">
                            My Portfolio
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-6">
                        <Link to="home" smooth={true} duration={500} offset={-400} className="hover:text-gray-300">Home</Link>
                        <Link to="myStory" smooth={true} duration={500} offset={50} className="hover:text-gray-300">MyStory</Link>
                        <Link to="projects" smooth={true} duration={500} offset={-70} className="hover:text-gray-300">Projects</Link>
                        <Link to="resume" smooth={true} duration={500} offset={-400} className="hover:text-gray-300">Resume</Link>
                        <Link to="contact" smooth={true} duration={500} offset={-100} className="hover:text-gray-300">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
