import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const footerLinks = {
    destinations: ['Europe', 'Asia', 'Americas', 'Africa', 'Oceania'],
    company: ['About Us', 'Our Team', 'Careers', 'Press', 'Partners'],
    support: ['Help Center', 'Travel Insurance', 'Cancellation Policy', 'Payment Methods', 'Contact'],
    legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer']
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-secondary border-t border-accent/20">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-text-primary mb-4">Wanderlust</h3>
            <p className="text-text-secondary mb-6 leading-relaxed">
              Your trusted companion for unforgettable adventures around the globe. 
              We create memories that last a lifetime through expertly crafted travel experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-text-secondary">
                <MapPin className="w-5 h-5 mr-3 text-accent" />
                <span>123 Adventure Street, Travel City, TC 12345</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Phone className="w-5 h-5 mr-3 text-accent" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-text-secondary">
                <Mail className="w-5 h-5 mr-3 text-accent" />
                <span>hello@wanderlust.com</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-primary rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-text-primary mb-2">Stay Updated</h4>
            <p className="text-text-secondary">Get the latest travel tips and exclusive deals delivered to your inbox</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full bg-secondary text-text-primary placeholder-text-secondary border border-accent/20 focus:border-accent focus:outline-none transition-colors duration-300"
            />
            <button className="bg-accent hover:bg-accent-hover text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-accent/20">
          {/* Social Links */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-primary hover:bg-accent rounded-full flex items-center justify-center text-text-secondary hover:text-white transition-all duration-300 hover:scale-110"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-6 text-sm text-text-secondary">
            {footerLinks.legal.map((link, index) => (
              <React.Fragment key={link}>
                <a href="#" className="hover:text-accent transition-colors duration-300">
                  {link}
                </a>
                {index < footerLinks.legal.length - 1 && <span>•</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8">
          <p className="text-text-secondary">
            © 2024 Wanderlust. All rights reserved. Made with ❤️ for adventurers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;