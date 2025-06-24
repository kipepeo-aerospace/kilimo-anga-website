import React from 'react';
import { useState } from "react";
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {

  const [showNDVI, setShowNDVI] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background with gradient overlay simulating drone field imagery 
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/30 to-yellow-900/20">
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-sky-500/20"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-green-400 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-red-400 rounded-full blur-3xl"></div>
        </div>
      </div> */}

      {/*<div className="absolute inset-0 group overflow-hidden">
        <img
          src="assets/Vari_Farm_Before.png"
          alt="Farm View"
          className="w-full h-full object-cover transition-opacity duration-500"
          loading="lazy"
        />

        <img
          src="assets/Vari_Farm_After.png"
          alt="NDVI View"
          className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          loading="lazy"
        />
      </div>*/}

      <div className="absolute inset-0 group overflow-hidden rounded-xl">
        {/* Normal farm image */}
        <img
          src="assets/Vari_Farm_Before.png"
          alt="Farm View"
          className={`w-full h-full object-cover transition-opacity duration-500 ${showNDVI ? "opacity-0" : "opacity-100"
            }`}
        />

        {/* NDVI image */}
        <img
          src="assets/Vari_Farm_After.png"
          alt="NDVI View"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${showNDVI ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Toggle Button */}
        <button
          onClick={() => setShowNDVI(!showNDVI)}
          className="absolute bottom-6 right-6 bg-white/80 text-sm font-semibold px-4 py-2 rounded-md shadow hover:bg-white transition"
        >
          {showNDVI ? "Show Farm Image" : "Show NDVI"}
        </button>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          From Sky to Soil:
          <br />
          <span className="text-green-400">Data-Driven Farming</span>
          <br />
          Starts Here
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
          Revolutionizing precision agriculture through custom drone technology,
          multispectral imaging, and intelligent data analytics for actionable farm insights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#partner"
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            Partner With Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>

          <a
            href="#technology"
            className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 border border-white/30 flex items-center"
          >
            <Play className="mr-2 h-5 w-5" />
            See Our Technology
          </a>
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