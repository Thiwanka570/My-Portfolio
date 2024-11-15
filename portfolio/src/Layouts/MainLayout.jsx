import React, { useState } from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import MyStory from '../pages/MyStory';
import Contact from '../pages/Contact';
import Sidebar from '../component/Sidebar';
import Navbar from '../component/Navbar';

function MainLayout() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen">
            <div className="flex flex-col flex-grow">
                <Navbar />
                <Sidebar />

                <div className="fixed z-100 mt-16 flex w-100 p-8">
                    <Home/>
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
