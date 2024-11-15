import React, { useState } from 'react';

const images = [
    'https://cdn.openart.ai/published/6d4GwefM5o13AxhlQ73r/NIs7rfux_9lJT_1024.webp',
    'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg',
    'https://source.unsplash.com/600x400/?city,night',
    'https://source.unsplash.com/600x400/?technology',
];

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative w-full max-w-2xl mx-auto">
            <img 
                src={images[currentIndex]} 
                alt={`Slide ${currentIndex}`} 
                className="w-full h-auto rounded-lg"
            />
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button 
                    onClick={prevSlide} 
                    className="bg-gray-800 text-white rounded-full p-2 m-2 focus:outline-none hover:bg-gray-700"
                >
                    &#10094; {/* Left Arrow */}
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button 
                    onClick={nextSlide} 
                    className="bg-gray-800 text-white rounded-full p-2 m-2 focus:outline-none hover:bg-gray-700"
                >
                    &#10095; {/* Right Arrow */}
                </button>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 w-2 rounded-full mx-1 ${currentIndex === index ? 'bg-blue-500' : 'bg-gray-400'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
