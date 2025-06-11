import React, { useState, useEffect } from 'react';
import { Sun, Moon, Circle, User, LogOut, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './Auth/AuthModal';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRotating, setIsRotating] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.user-menu-container')) {
        setShowUserMenu(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleThemeToggle = () => {
    setIsRotating(true);
    toggleTheme();
    setTimeout(() => setIsRotating(false), 500);
  };

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-5 h-5" />;
      case 'dark':
        return <Moon className="w-5 h-5" />;
      case 'black':
        return <Circle className="w-5 h-5 fill-current" />;
      default:
        return <Sun className="w-5 h-5" />;
    }
  };

  const handleAuthClick = (mode: 'login' | 'signup') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Adventures', href: '#adventures' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-primary/95 backdrop-blur-md shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-text-primary">
              Wanderlust
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-primary hover:text-accent transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Right Side Controls */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeToggle}
                className={`w-10 h-10 rounded-full bg-secondary border-2 border-accent/30 hover:border-accent transition-all duration-300 flex items-center justify-center text-text-primary hover:scale-110 ${
                  isRotating ? 'animate-spin' : ''
                }`}
                style={{
                  animation: isRotating ? 'spin 0.5s ease-in-out' : 'none',
                }}
                aria-label="Toggle theme"
              >
                {getThemeIcon()}
              </button>

              {/* User Authentication */}
              {user ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center space-x-2 bg-secondary hover:bg-accent/10 px-3 py-2 rounded-full transition-all duration-300 border border-accent/20 hover:border-accent"
                  >
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    ) : (
                      <User className="w-5 h-5 text-text-primary" />
                    )}
                    <span className="text-text-primary font-medium hidden sm:block">
                      {user.name}
                    </span>
                  </button>

                  {/* User Dropdown Menu */}
                  {showUserMenu && (
                    <div className="absolute right-0 mt-2 w-48 bg-primary border border-accent/20 rounded-lg shadow-xl py-2 z-50">
                      <div className="px-4 py-2 border-b border-accent/20">
                        <p className="text-sm font-medium text-text-primary">{user.name}</p>
                        <p className="text-xs text-text-secondary">{user.email}</p>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-text-primary hover:bg-secondary transition-colors duration-300 flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign Out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <button
                    onClick={() => handleAuthClick('login')}
                    className="text-text-primary hover:text-accent transition-colors duration-300 px-4 py-2 rounded-full hover:bg-secondary"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => handleAuthClick('signup')}
                    className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Sign Up
                  </button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden w-10 h-10 rounded-full bg-secondary border-2 border-accent/30 hover:border-accent transition-all duration-300 flex items-center justify-center text-text-primary"
              >
                {showMobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {showMobileMenu && (
            <div className="lg:hidden mt-4 pb-4 border-t border-accent/20">
              <div className="space-y-2 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-text-primary hover:text-accent transition-colors duration-300"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              
              {/* Mobile Auth Buttons */}
              {!user && (
                <div className="flex space-x-2 mt-4 sm:hidden">
                  <button
                    onClick={() => {
                      handleAuthClick('login');
                      setShowMobileMenu(false);
                    }}
                    className="flex-1 text-text-primary hover:text-accent transition-colors duration-300 px-4 py-2 rounded-full hover:bg-secondary border border-accent/20"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => {
                      handleAuthClick('signup');
                      setShowMobileMenu(false);
                    }}
                    className="flex-1 bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full font-semibold transition-all duration-300"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />
    </>
  );
};

export default Header;