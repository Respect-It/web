import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-text-primary px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <MapPin className="w-6 h-6 text-accent mr-2" />
            <span className="text-accent font-medium">Explore the World</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Adventure
            <span className="block text-accent">Awaits You</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-text-secondary leading-relaxed">
            Discover breathtaking destinations, create unforgettable memories, 
            and embark on the journey of a lifetime with our expert travel guides.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center group">
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="border-2 border-accent text-accent hover:bg-accent hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              View Destinations
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-text-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;