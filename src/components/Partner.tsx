import React from 'react';
import { Users, Plane, Leaf, HandCoins, ArrowRight } from 'lucide-react';

const Partner = () => {
  const partnerTypes = [
    {
      icon: Leaf,
      title: 'Farmers & Cooperatives',
      description: 'Join the pilot to get actionable insights on your farms and boost yields this season.',
      benefits: [
        'Discounted pilot service offerings',
        'Real-time crop health insights & personalized recommendations',
        'Direct support and feedback from our team',
        'Early access to new features'
      ],
      cta: 'Join the Pilot',
      link: "https://angademo.kipepeo.space"
    },
    {
      icon: Plane,
      title: 'UAS / Drone Operators',
      description: 'Partner with us to expand your services and generate revenue through pilot missions.',
      benefits: [
        'Recurring revenue from pilot engagements',
        'Training and certification for precision agriculture operations',
        'Participate in defining UAS requirements for agricultural missions',
        'Technical support during pilot operations'
      ],
      cta: 'Explore Partnership',
      link: "https://angademo.kipepeo.space"
    },
    {
      icon: HandCoins,
      title: 'Agricultural Extension & NGOs',
      description: 'Support farmers more effectively with data-driven guidance during the pilot.',
      benefits: [
        'Register and monitor farmers under your programs',
        'Access to demo and pilot reports',
        'Track measurable impact for stakeholders',
        'Strengthen community agricultural outcomes'
      ],
      cta: 'Collaborate',
      link: "https://angademo.kipepeo.space"
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
            Join the Kilimo Anga pilot and be part of Kenya's precision agriculture revolution. 
            Whether you are a farmer, a drone operator, or in agricultural extension services, 
            there are tangible benefits for you over the next 6-12 months.
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

                <a
                  href={partner.link}
                  className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center">
                  {partner.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">Why Partner with us?</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join the forefront of agricultural innovation in Kenya and across East Africa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">SDG 2</div>
              <div className="opacity-90">Drive Food Security</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="opacity-90">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="opacity-90">Commitment to Local Innovation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;