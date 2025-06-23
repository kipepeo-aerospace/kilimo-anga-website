import React from 'react';
import { Users, Building, GraduationCap, ArrowRight } from 'lucide-react';

const Partner = () => {
  const partnerTypes = [
    {
      icon: Users,
      title: 'UAS Operators',
      description: 'Professional drone service providers looking to expand into precision agriculture',
      benefits: ['Advanced analytics platform', 'Specialized agricultural sensors', 'Training and certification programs', 'Marketing support'],
      cta: 'Join Our Network'
    },
    {
      icon: Building,
      title: 'Agribusinesses',
      description: 'Companies seeking to integrate precision agriculture data into their operations',
      benefits: ['Custom API integrations', 'Bulk data processing', 'White-label solutions', 'Technical support'],
      cta: 'Partner With Us'
    },
    {
      icon: GraduationCap,
      title: 'Research Institutions',
      description: 'Universities and research centers advancing agricultural technology',
      benefits: ['Research collaboration', 'Data sharing agreements', 'Student internship programs', 'Technology access'],
      cta: 'Collaborate'
    }
  ];

  return (
    <section id="partner" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Partner <span className="text-green-600">With Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join Kenya's leading precision agriculture ecosystem. Whether you're a drone operator, 
            agribusiness, or research institution, we have partnership opportunities that drive mutual growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.title}</h3>
                <p className="text-gray-600 mb-6">{partner.description}</p>
                
                <div className="space-y-3 mb-8">
                  {partner.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                  {partner.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Partner with Kilimo Anga?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the forefront of agricultural innovation in Kenya and across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5x</div>
              <div className="opacity-90">Market Growth Potential</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Commitment to Innovation</div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Get Started Today
            </h3>
            <p className="text-gray-600 text-center mb-8">
              Ready to transform agriculture with precision technology? Let's discuss how we can work together.
            </p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Company/Institution"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partnership Type</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>UAS Operator</option>
                    <option>Agribusiness</option>
                    <option>Research Institution</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Tell us about your organization and partnership interests..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors duration-300 flex items-center justify-center"
              >
                Start Partnership Discussion
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;