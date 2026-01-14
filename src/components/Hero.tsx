import React from 'react';
import { useState } from "react";
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {

  const [showNDVI, setShowNDVI] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-16">
      <div className="absolute inset-0 group overflow-hidden rounded-xl">
        {/* Normal farm image */}
        <img
          src="assets/scene.png"
          alt="Farm View"
          className={`w-full h-full object-cover transition-opacity duration-500 ${showNDVI ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* NDVI image */}
        <img
          src="assets/scene.png"
          alt="NDVI View"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showNDVI ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Toggle Button 
        <button
          onClick={() => setShowNDVI(!showNDVI)}
          className="absolute bottom-6 right-6 bg-white/80 text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-white transition hidden sm:block"
        >
          {showNDVI ? "Original" : "NDVI"}
        </button> */}

      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          From Sky to Soil:
          <br />
          <span className="text-green-400">Data-Driven Farming</span>
          <br />
          Starts Here
        </h1>
            
        <p className="font-bold text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed">
          
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="assets/teaser.pdf"
            target="_blank"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center"
          >
            <Play className="mr-2 h-5 w-5" />
            View our Pitch Deck
          </a>
          <a
            href="https://angademo.kipepeo.space"
            target="_blank"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            AngaView Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          {/* NDVI toggle button - mobile only 
          <button
            onClick={() => setShowNDVI(!showNDVI)}
            className="bg-white/80 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg shadow hover:bg-white transition-all duration-300 block sm:hidden"
          >
            {showNDVI ? "Original" : "NDVI"}
          </button>*/}
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-8 animate-bounce">
          <div className="w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute top-1/3 right-12 animate-bounce delay-75">
          <div className="w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bounce delay-150">
          <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-60"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;