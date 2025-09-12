import React from 'react';
import { Plane, Camera, Upload, Eye, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: 'Launch & Capture',
      description: 'Deploy AngaCam to capture high-resolution multispectral imagery across your target agricultural area.',
      details: 'Autonomous flight planning with GPS waypoints ensures comprehensive field coverage and optimal data collection.',
      color: 'green'
    },
    {
      icon: Upload,
      title: 'Upload & Process',
      description: 'Seamlessly upload captured data to AngaCloud for real-time processing and analysis.',
      details: 'Advanced algorithms process multispectral bands to generate vegetation indices and crop health metrics.',
      color: 'blue'
    },
    {
      icon: Eye,
      title: 'Analyze & Act',
      description: 'Access actionable crop insights through AngaView with geo-tagged recommendations and alerts.',
      details: 'View NDVI maps, identify crop stress areas, and receive specific recommendations for targeted interventions.',
      color: 'yellow'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      green: {
        bg: 'bg-green-100',
        icon: 'text-green-600',
        accent: 'bg-green-600',
        border: 'border-green-200'
      },
      blue: {
        bg: 'bg-blue-100',
        icon: 'text-blue-600',
        accent: 'bg-blue-600',
        border: 'border-blue-200'
      },
      yellow: {
        bg: 'bg-yellow-100',
        icon: 'text-yellow-600',
        accent: 'bg-yellow-600',
        border: 'border-yellow-200'
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It <span className="text-green-600">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From flight to insight in three simple steps. Our streamlined process
            transforms aerial data into actionable agricultural intelligence.
          </p>
        </div>

        <div className="relative">
          {/* Connection lines for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2"></div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              const Icon = step.icon;

              return (
                <div key={index} className="relative">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 lg:relative lg:top-0 lg:left-0 lg:transform-none lg:mb-8">
                    <div className={`${colors.accent} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto lg:mx-0`}>
                      {index + 1}
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 mt-8 lg:mt-0">
                    <div className={`${colors.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                      <Icon className={`h-8 w-8 ${colors.icon}`} />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 mb-4 text-center lg:text-left leading-relaxed">
                      {step.description}
                    </p>

                    <p className="text-sm text-gray-500 text-center lg:text-left">
                      {step.details}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-6 lg:hidden">
                      <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Flow Summary */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              End-to-End Agricultural Intelligence
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our integrated workflow ensures seamless data collection, processing, and delivery
              of actionable insights that drive better farming decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">15min</div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-yellow-600">30min</div>
              <div className="text-sm text-gray-600">Processing Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">Real-time</div>
              <div className="text-sm text-gray-600">Insight Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;