import React from 'react';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '25%',
      label: 'Average Yield Increase',
      description: 'Farmers using Kilimo Anga report significant improvements in crop yields'
    },
    {
      icon: Users,
      value: '150+',
      label: 'UAS Operators Equipped',
      description: 'Professional drone operators across Kenya utilizing our technology'
    },
    {
      icon: Leaf,
      value: '50,000ha',
      label: 'Agricultural Land Monitored',
      description: 'Hectares under precision agriculture management through our platform'
    },
    {
      icon: Award,
      value: '95%',
      label: 'Accuracy Rate',
      description: 'Precision in crop health assessment and yield prediction models'
    }
  ];

  const useCases = [
    {
      title: 'Smallholder Maize Farmers',
      description: 'Early pest detection and nutrient deficiency identification for subsistence and commercial maize production.',
      impact: 'Reduced crop loss by 30% through timely interventions',
      color: 'green'
    },
    {
      title: 'Agricultural Cooperatives',
      description: 'Large-scale field monitoring and yield forecasting for cooperative members and bulk marketing decisions.',
      impact: 'Improved market positioning through accurate yield predictions',
      color: 'blue'
    },
    {
      title: 'UAS Service Providers',
      description: 'Professional drone services enhanced with specialized agricultural analytics and reporting capabilities.',
      impact: 'Expanded service offerings and increased revenue streams',
      color: 'yellow'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Measurable <span className="text-green-600">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from agricultural professionals and farmers across Kenya 
            leveraging precision agriculture technology.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg text-center group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            );
          })}
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Transforming Agricultural Sectors
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => {
              const colorClasses = {
                green: 'border-green-200 bg-green-50',
                blue: 'border-blue-200 bg-blue-50',
                yellow: 'border-yellow-200 bg-yellow-50'
              };
              
              return (
                <div key={index} className={`border-2 ${colorClasses[useCase.color as keyof typeof colorClasses]} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{useCase.description}</p>
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <p className="text-sm font-semibold text-green-700">{useCase.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Study Highlight */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Success Story: Nakuru Maize Cooperative
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                The Nakuru Farmers Cooperative, representing over 500 smallholder farmers, partnered 
                with Kilimo Anga to implement precision agriculture across 2,000 hectares of maize production. 
                Through regular drone surveys and data-driven insights, they achieved remarkable results.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">32% reduction in fertilizer waste through precision application</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">Early pest detection prevented 40% crop loss</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-4"></div>
                  <span className="text-gray-700">28% increase in overall yield productivity</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-bold mb-6">Results Achieved</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold">2,000ha</div>
                    <div className="text-sm opacity-90">Area monitored</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-90">Farmers benefited</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">KES 12M</div>
                    <div className="text-sm opacity-90">Additional revenue generated</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;