import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-green-600">Kilimo Anga</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kilimo Anga is a drone-enabled <span className="font-bold text-green-600">agricultural extension service</span> offered by Kipepeo Aerospace. 
            It supports farmers with timely, field-specific crop insights derived from aerial imagery and data analysis.
            These insights help farmers <span className="font-bold text-green-600">identify early signs of crop stress, variability, 
            and potential yield loss</span>, enabling more targeted interventions across their fields. The service is powered by 
            Kipepeo Aerospace's <span className="font-bold text-green-600">in-house drone platforms, multispectral imaging systems, and analytics tools</span>, ensuring reliable data collection and consistent 
            advisory outputs tailored to local farming conditions.
          </p>
        </div>   
              
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Bridging the Gap Between Data and Decision
              </h3>
              <p className="text-gray-600 mb-6">
                Farmers often rely on experience and intuition to manage their crops, but this can leave critical problems unnoticed until it's too late. 
                Kilimo Anga highlights where attention is needed and what actions to take, helping farmers 
                respond early to stress, disease, or uneven growth across their fields.
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                <span>Empowering agricultural transformation</span>
                <div className="w-2 h-2 bg-green-600 rounded-full ml-2 animate-pulse"></div>
              </div>
            </div>
            <div className="relative">
              <div className=" bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">Mission Impact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Precision data collection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Real-time crop health insights</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Early stress and pest detection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Optimized input utilization</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Actionable recommendations for yield growth</span>
                    </div>
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

export default About;