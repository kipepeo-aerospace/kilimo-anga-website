import React from 'react';
import { Bone as Drone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            {/*<Drone className="h-8 w-8 text-green-600" />*/}
            <img src="/assets/kilimoanga_logo.png" className="h-8 w-8 text-green-600" alt="Kilimo Anga Logo" />
            <span className="ml-2 text-xl font-bold text-gray-900">Kilimo Anga</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#technology" className="text-gray-700 hover:text-green-600 transition-colors">Technology</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">How It Works</a>
            <a href="#partner" className="text-gray-700 hover:text-green-600 transition-colors">Partner</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="assets/shortdeck.pdf" target="_blank" className="bg-white text-green-60 px-4 py-2 rounded-lg hover:bg-green-700 hover:text-white transition-colors">
              Pitch Deck
            </a>
            <a href="https://angaview.kipepeo.space" target="_blank" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
              AngaView Dashboard
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
              <a href="#technology" className="block px-3 py-2 text-gray-700">Technology</a>
              <a href="#how-it-works" className="block px-3 py-2 text-gray-700">How It Works</a>
              <a href="#impact" className="block px-3 py-2 text-gray-700">Impact</a>
              <a href="#partner" className="block px-3 py-2 text-gray-700">Partner</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;