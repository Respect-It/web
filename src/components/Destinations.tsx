import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';

const Destinations: React.FC = () => {
  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      image: 'https://images.pexels.com/photos/161815/santorini-travel-holidays-vacation-161815.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      duration: '7 Days',
      description: 'Experience the magic of white-washed buildings and stunning sunsets over the Aegean Sea.',
      price: '$1,299'
    },
    {
      id: 2,
      name: 'Bali, Indonesia',
      image: 'https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      duration: '10 Days',
      description: 'Discover tropical paradise with pristine beaches, ancient temples, and vibrant culture.',
      price: '$999'
    },
    {
      id: 3,
      name: 'Swiss Alps',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      duration: '14 Days',
      description: 'Adventure through majestic mountains, crystal-clear lakes, and charming alpine villages.',
      price: '$2,199'
    },
    {
      id: 4,
      name: 'Machu Picchu, Peru',
      image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.9,
      duration: '8 Days',
      description: 'Explore the ancient Incan citadel and trek through breathtaking Andean landscapes.',
      price: '$1,599'
    },
    {
      id: 5,
      name: 'Northern Lights, Iceland',
      image: 'https://images.pexels.com/photos/1434819/pexels-photo-1434819.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.7,
      duration: '6 Days',
      description: 'Witness the aurora borealis dance across the sky in this Nordic wonderland.',
      price: '$1,799'
    },
    {
      id: 6,
      name: 'Safari, Kenya',
      image: 'https://images.pexels.com/photos/631292/pexels-photo-631292.jpeg?auto=compress&cs=tinysrgb&w=800',
      rating: 4.8,
      duration: '12 Days',
      description: 'Experience wildlife in their natural habitat on an unforgettable African safari.',
      price: '$2,499'
    }
  ];

  return (
    <section id="destinations" className="py-20 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Top Destinations
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Handpicked destinations that offer unique experiences and unforgettable memories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="group relative bg-secondary rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full font-semibold">
                  {destination.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors duration-300">
                    {destination.name}
                  </h3>
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-text-secondary">{destination.rating}</span>
                  </div>
                </div>

                <p className="text-text-secondary mb-4 leading-relaxed">
                  {destination.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-text-secondary">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{destination.duration}</span>
                  </div>
                  
                  <button className="flex items-center text-accent hover:text-accent-hover transition-colors duration-300 font-semibold">
                    <MapPin className="w-4 h-4 mr-1" />
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;