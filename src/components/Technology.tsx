import React from 'react';

const TechnologyCarousel = () => {
  const slides = [
    {
      image: 'assets/TAI_Assembly.png',
      title: 'TAI',
      caption: 'In-house developed modular hybrid eVTOL drone designed to cover 1000 acres per flight with 120min endurance and 2cm mapping precision.',
      color: 'blue'
    },
    {
      image: 'assets/AngaCam.png',
      title: 'AngaCam',
      caption: 'In-house developed multispectral cameras capturing precise crop data with Red, Green, Blue & Near-Infrared imaging. AngaCam is purpose-built for agricultural applications with optimized spectral response.',
      color: 'green'
    },
    {
      image: 'assets/AngaView.png',
      title: 'AngaView',
      caption: 'Interactive dashboard delivering vegetative maps and actionable field insights. Powered by AngaCloud, a cloud-based analytics platform that transforms raw multispectral data to index maps and uses AI to generate inisghts and recommendations.',
      color: 'yellow'
    },
    {
      image: 'assets/fullkilimoanga.png',
      title: 'Pilot Deployment Stack',
      caption: 'Full stack solution for drone operations, data capture, processing, and advisory delivery. Designed for initial pilot deployment.',
      color: 'red'
    }
  ];

  const getTextColor = (color: string) => {
    const colors = {
      green: 'text-green-600',
      blue: 'text-blue-600',
      yellow: 'text-yellow-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Innovation Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how the integrated technology by Kipepeo Aerospace brings actionable insights from the sky directly to the field.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative mb-16">
          <div className="overflow-x-auto snap-x snap-mandatory flex space-x-6">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0 w-full sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <h3 className={`text-2xl font-bold mb-2 ${getTextColor(slide.color)}`}>
                  {slide.title}
                </h3>
                <p className="text-gray-600 text-center">{slide.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCarousel;
