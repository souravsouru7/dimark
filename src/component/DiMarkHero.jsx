import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const DiMarkHero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden perspective-1000">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4 relative z-20">
        <div className="text-emerald-400 text-xl md:text-2xl font-bold group">
          <div className="transform transition-transform duration-300 hover:scale-110 hover:-rotate-3">
            DiMark
            <div className="text-[10px] md:text-xs text-emerald-400 animate-pulse">Marketing Management</div>
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:text-emerald-400 transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="text-white hover:text-emerald-400 relative group"
              style={{ animation: `slideIn 0.5s ${index * 0.1}s both` }}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        
        {/* Desktop Phone Button */}
        <div className="hidden md:block">
          <div className="bg-teal-800 text-white px-4 py-2 rounded-full transform hover:scale-105 transition-transform hover:shadow-lg hover:shadow-emerald-500/20">
            <a href="tel:+971-54-279-1548" className="flex items-center">
              <Phone size={16} className="mr-2 animate-bounce" />
              +971-54 279 1548
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`
        fixed inset-0 bg-black/95 backdrop-blur-lg z-10 transform transition-transform duration-300 
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <a 
              key={item}
              href="#" 
              className="text-white text-2xl hover:text-emerald-400 relative group"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          {/* Mobile Phone Button */}
          <div className="bg-teal-800 text-white px-6 py-3 rounded-full transform hover:scale-105 transition-transform mt-8">
            <a href="tel:+971-54-279-1548" className="flex items-center">
              <Phone size={20} className="mr-2 animate-bounce" />
              +971-54 279 1548
            </a>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mt-16 md:mt-32 px-4">
        <div className="inline-block bg-black/20 backdrop-blur-sm px-4 md:px-6 py-2 rounded-full text-white mb-6 md:mb-8 animate-fadeIn text-sm md:text-base hover:scale-105 transition-transform">
          Welcome to DiMark
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 md:mb-8 leading-tight perspective-1000">
          {['We Believe In', 'Turning Your', 'Vision', 'Into Action'].map((line, index) => (
            <div
              key={line}
              className="transform transition-all duration-500 hover:scale-105 hover:text-emerald-400"
              style={{
                animation: `slideInFromRight 0.8s ${index * 0.2}s both`,
                transformStyle: 'preserve-3d'
              }}
            >
              {line}
            </div>
          ))}
        </h1>

        <p className="text-gray-300 mb-8 max-w-2xl mx-auto animate-fadeIn opacity-0 text-sm md:text-base px-4" style={{ animationDelay: '1s' }}>
          We Blend Industry Insights With Creativity To Craft Solutions That Engage Your Audience And Fuel Growth.
        </p>

        <button className="group bg-emerald-600 text-white px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-emerald-700 transition-all duration-300 flex items-center mx-auto hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105 text-sm md:text-base">
          <span className="transform group-hover:translate-x-1 transition-transform">LEARN MORE</span>
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Wave Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-black opacity-80"></div>
        <div className="absolute inset-0 animate-pulse">
          <svg 
            viewBox="0 0 1000 1000" 
            className="w-full h-full opacity-30"
            preserveAspectRatio="none"
          >
            <path
              d="M0,500 C200,400 300,300 500,500 C700,700 800,600 1000,500 L1000,1000 L0,1000 Z"
              fill="url(#wave-gradient)"
            >
              <animate
                attributeName="d"
                dur="10s"
                repeatCount="indefinite"
                values="
                  M0,500 C200,400 300,300 500,500 C700,700 800,600 1000,500 L1000,1000 L0,1000 Z;
                  M0,500 C200,600 300,700 500,500 C700,300 800,400 1000,500 L1000,1000 L0,1000 Z;
                  M0,500 C200,400 300,300 500,500 C700,700 800,600 1000,500 L1000,1000 L0,1000 Z
                "
              />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#059669">
                  <animate
                    attributeName="stop-color"
                    values="#059669; #0d9488; #059669"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#0d9488">
                  <animate
                    attributeName="stop-color"
                    values="#0d9488; #134e4a; #0d9488"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#134e4a">
                  <animate
                    attributeName="stop-color"
                    values="#134e4a; #059669; #134e4a"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .animate-fadeIn {
          animation: fadeIn 1s forwards;
        }

        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default DiMarkHero;