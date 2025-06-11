import React, { useState } from 'react';
import { X, Heart, Share2 } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Northern Lights over mountain landscape',
      location: 'Iceland'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Tropical beach with crystal clear water',
      location: 'Maldives'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Ancient temple in jungle setting',
      location: 'Cambodia'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1451360/pexels-photo-1451360.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Mountain peak with snow',
      location: 'Nepal'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/1433648/pexels-photo-1433648.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Desert dunes at sunset',
      location: 'Morocco'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Colorful coral reef underwater',
      location: 'Australia'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'City skyline at night',
      location: 'Japan'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Forest path with sunlight',
      location: 'Canada'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Waterfall in tropical setting',
      location: 'Costa Rica'
    }
  ];

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const selectedImg = images.find(img => img.id === selectedImage);

  return (
    <section id="gallery" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Travel Gallery
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A visual journey through some of the world's most spectacular destinations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              } ${
                index === 0 || index === 3 ? 'lg:col-span-1' : ''
              }`}
              onClick={() => openModal(image.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-semibold">{image.location}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && selectedImg && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors duration-300 z-10"
              >
                <X className="w-8 h-8" />
              </button>

              {/* Image */}
              <img
                src={selectedImg.src}
                alt={selectedImg.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="flex items-center justify-between text-white">
                  <div>
                    <p className="font-semibold text-lg">{selectedImg.location}</p>
                    <p className="text-sm opacity-80">{selectedImg.alt}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="hover:text-accent transition-colors duration-300">
                      <Heart className="w-6 h-6" />
                    </button>
                    <button className="hover:text-accent transition-colors duration-300">
                      <Share2 className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;