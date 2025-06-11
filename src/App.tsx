import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Destinations from './components/Destinations';
import Adventures from './components/Adventures';
import Gallery from './components/Gallery';
import BlogPreviews from './components/BlogPreviews';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="min-h-screen bg-primary text-text-primary transition-colors duration-300">
          <Header />
          <Hero />
          <Destinations />
          <Adventures />
          <Gallery />
          <BlogPreviews />
          <Footer />
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;