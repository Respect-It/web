import React from 'react';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPreviews: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Hidden Gems of Southeast Asia: Off the Beaten Path',
      excerpt: 'Discover secret beaches, ancient temples, and local markets that most travelers never see. Our comprehensive guide reveals the best kept secrets.',
      image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Sarah Johnson',
      date: 'March 15, 2024',
      readTime: '8 min read',
      category: 'Destinations'
    },
    {
      id: 2,
      title: 'Solo Travel Safety: Essential Tips for Your Next Adventure',
      excerpt: 'Comprehensive safety guidelines and practical tips for solo travelers. Learn how to stay safe while maximizing your travel experiences.',
      image: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Chen',
      date: 'March 12, 2024',
      readTime: '6 min read',
      category: 'Travel Tips'
    },
    {
      id: 3,
      title: 'Sustainable Tourism: How to Travel Responsibly',
      excerpt: 'Learn how to minimize your environmental impact while traveling. Discover eco-friendly accommodations, transportation, and activities.',
      image: 'https://images.pexels.com/photos/1659437/pexels-photo-1659437.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Emma Rodriguez',
      date: 'March 10, 2024',
      readTime: '10 min read',
      category: 'Sustainability'
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
            Latest Stories
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Inspiring travel stories, expert tips, and insider guides from our community of adventurers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-secondary/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative overflow-hidden ${index === 0 ? 'h-64 lg:h-80' : 'h-48'}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                <h3 className={`font-bold text-text-primary mb-3 group-hover:text-accent transition-colors duration-300 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {post.title}
                </h3>

                <p className={`text-text-secondary mb-4 leading-relaxed ${
                  index === 0 ? 'text-lg' : ''
                }`}>
                  {post.excerpt}
                </p>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-accent">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Button */}
                <div className="mt-6">
                  <button className="flex items-center text-accent hover:text-accent-hover transition-colors duration-300 font-semibold group/btn">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <button className="bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreviews;