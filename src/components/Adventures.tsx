import React from 'react';
import { Mountain, Waves, Compass, Camera } from 'lucide-react';

const Adventures: React.FC = () => {
  const adventures = [
    {
      icon: Mountain,
      title: 'Mountain Expeditions',
      description: 'Conquer peaks and witness breathtaking views from the world\'s highest mountains.',
      image: 'https://images.pexels.com/photos/618833/pexels-photo-618833.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Waves,
      title: 'Ocean Adventures',
      description: 'Dive into crystal-clear waters and explore vibrant marine ecosystems.',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Compass,
      title: 'Desert Exploration',
      description: 'Navigate vast landscapes and experience the silence of endless dunes.',
      image: 'https://images.pexels.com/photos/1670045/pexels-photo-1670045.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: Camera,
      title: 'Wildlife Photography',
      description: 'Capture rare moments and document incredible wildlife in their natural habitat.',
      image: 'https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="adventures" className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Epic Adventures
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Push your boundaries and create stories worth telling with our adventure experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {adventures.map((adventure, index) => (
            <div
              key={index}
              className="group relative bg-secondary/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={adventure.image}
                  alt={adventure.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-overlay group-hover:bg-overlay-hover transition-colors duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 h-64 flex flex-col justify-end">
                <div className="mb-4">
                  <adventure.icon className="w-12 h-12 text-accent mb-4 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h3 className="text-2xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300">
                  {adventure.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {adventure.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Adventures;