import React from 'react';
import { Plane, Camera, BarChart3, Cloud } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What is <span className="text-green-600">Kilimo Anga</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Kilimo Anga is Kipepeo Aerospace's flagship initiative addressing the critical gap in
            agricultural data utilization. We equip UAS operators with cutting-edge
            multispectral imaging systems and powerful cloud-based analytics to transform raw aerial data into
            actionable farm-level insights that drive better agricultural decisions across Kenya and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <Camera className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Multispectral Imaging</h3>
            <p className="text-gray-600">
              In-house developed multispectral cameras capturing R, G, B, and NIR bands for precise NDVI and vegetation analysis.
            </p>
          </div>
          {/*
          <div className="text-center group">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <Plane className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Custom Drone Hardware</h3>
            <p className="text-gray-600">
              Proprietary fixed-wing VTOL drones engineered specifically for long-range agricultural mapping and data collection.
            </p>
          </div>
          */}

          <div className="text-center group">
            <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
              <Cloud className="h-10 w-10 text-yellow-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Engine</h3>
            <p className="text-gray-600">
              Cloud-based engine delivering real-time crop health diagnostics, vegetation indices, and predictive models.
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <BarChart3 className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Visualization & Insights</h3>
            <p className="text-gray-600">
              An intuitive dashboard that transforms raw multispectral data into interactive maps, time-series trends, and customizable farm reports.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Bridging the Gap Between Data and Decision
              </h3>
              <p className="text-gray-600 mb-6">
                Traditional farming relies on instinct and experience. Modern agriculture demands data-driven decisions.
                Kilimo Anga provides the missing link, transforming complex aerial imagery into simple, actionable insights
                that farmers and agricultural professionals can immediately implement.
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
                      <span>Early stress and disease detection</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                      <span>Optimized input resource utilization</span>
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