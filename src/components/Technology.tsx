import React from 'react';
import { Plane, Camera, Cloud, Zap, Target, Globe, BarChart3 } from 'lucide-react';
import AngaViewVideo from './AngaViewVideo';

const Technology = () => {
  const technologies = [
    {
      icon: Camera,
      title: 'AngaCam',
      subtitle: 'Advanced Sensor Technology',
      description: 'In-house developed multispectral cameras capturing Red, Green, Blue, and Near-Infrared bands. AngaCam is purpose-built for agricultural applications with optimized spectral response.',
      features: [
        'R, G, B, NIR band capture',
        'High-resolution imaging',
        'Real-time data processing',
        'NDVI calculation ready'
      ],
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'AngaCloud',
      subtitle: 'Intelligent Analytics Engine',
      description: 'Cloud-based analytics platform that transforms raw multispectral data into actionable agricultural insights. Real-time processing with geo-tagged advisory generation.',
      features: [
        'NDVI & vegetation indices',
        'Crop stress detection',
        'Chlorophyll level analysis',
        'Yield prediction models'
      ],
      color: 'yellow'
    },
    {
      icon: BarChart3,
      title: 'AngaView',
      subtitle: 'Turning Data into Decisions',
      description: 'An intuitive dashboard interface designed for farmers, agronomists, and UAS operators. AngaView transforms complex multispectral datasets into clear, actionable visualizations accessible from any device.',
      features: [
        'Interactive NDVI & index maps',
        'Time-series crop monitoring',
        'Multi-farm and field comparison',
        'User-friendly mobile & web access'
      ],
      color: 'green'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'bg-green-100',
        hoverBg: 'group-hover:bg-green-200',
        icon: 'text-green-600',
        accent: 'text-green-600',
        border: 'border-green-200',
        gradient: 'from-green-500 to-green-600'
      },
      blue: {
        bg: 'bg-blue-100',
        hoverBg: 'group-hover:bg-blue-200',
        icon: 'text-blue-600',
        accent: 'text-blue-600',
        border: 'border-blue-200',
        gradient: 'from-blue-500 to-blue-600'
      },
      yellow: {
        bg: 'bg-yellow-100',
        hoverBg: 'group-hover:bg-yellow-200',
        icon: 'text-yellow-600',
        accent: 'text-yellow-600',
        border: 'border-yellow-200',
        gradient: 'from-yellow-500 to-yellow-600'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-green-600">Innovation Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three integrated pillars of technology working together to deliver unprecedented
            agricultural insights from sky to soil.
          </p>
        </div>
        {/* Innovation Stack */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => {
            const colors = getColorClasses(tech.color);
            const Icon = tech.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`${colors.bg} ${colors.hoverBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300`}>
                  <Icon className={`h-8 w-8 ${colors.icon}`} />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tech.title}</h3>
                <p className={`text-sm font-semibold ${colors.accent} mb-4 uppercase tracking-wide`}>
                  {tech.subtitle}
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tech.description}
                </p>

                <div className="space-y-3">
                  {tech.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${colors.gradient} mr-3`}></div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 🎥 Insert your AngaViewVideo here */}
        <AngaViewVideo />

        {/* Technical Specifications */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Excellence
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Precision Mapping</h4>
              <p className="text-3xl font-bold text-green-600 mb-2">2cm</p>
              <p className="text-gray-600">Ground resolution accuracy</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Flight Endurance</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">120min</p>
              <p className="text-gray-600">Continuous operation time</p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-yellow-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Area Coverage</h4>
              <p className="text-3xl font-bold text-yellow-600 mb-2">500ha</p>
              <p className="text-gray-600">Per single flight mission</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;