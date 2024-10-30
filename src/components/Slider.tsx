
import { slides } from '@/data';
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";


const Slider: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const nextSlide = (): void => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = (): void => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-96 md:h-80 lg:h-96 bg-black text-white overflow-hidden mt-5 md:mt-14">
            <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 md:px-4 lg:px-16">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <div className="flex justify-center md:justify-start items-center space-x-4 mb-4">
                        <img
                            src={slides[currentSlide].icon}
                            alt={`${slides[currentSlide].title} Icon`}
                            className="w-10 h-10"
                        />
                        <span className="text-sm md:text-base">{slides[currentSlide].title}</span>
                    </div>                
                    <h2 className="text-3xl lg:text-5xl font-medium mb-4 lg:leading-[60px]">{slides[currentSlide].description}</h2>                    
                    <button className="flex justify-center items-center space-x-2 mx-auto md:mx-0 pb-1">
                        <span className="border-b border-solid border-gray-200 text-sm md:text-base">Shop Now</span>
                        <FaArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>
                <div className="w-full md:w-1/2 mt-4 md:mt-0">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
                onClick={prevSlide}
                className="block md:hidden lg:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-200 focus:outline-none"
                aria-label="Previous slide"
            >
                <FaArrowLeft className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>
            <button 
                onClick={nextSlide}
                className="block md:hidden lg:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-2 transition-all duration-200 focus:outline-none"
                aria-label="Next slide"
            >
                <FaArrowRight className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </button>

            {/* Dot Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${i === currentSlide ? 'bg-[#DB4444] border-2 border-white' : 'bg-gray-400'}`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;