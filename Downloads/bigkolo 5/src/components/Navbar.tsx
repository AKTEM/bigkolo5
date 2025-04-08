import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ isDarkMode, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Catalogue', href: '#catalogue' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact Us', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-opacity-0'
    } ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-[#EDAF3D]" />
            <span className="ml-2 text-xl font-bold text-[#EDAF3D]">Bigkoko</span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="text-[#EDAF3D] hover:text-[#EDAF3D]/80 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center md:hidden">
            {/* Theme toggle */}
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors mr-4"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="text-[#EDAF3D]" /> : <Moon className="text-[#EDAF3D]" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#EDAF3D] hover:text-[#EDAF3D]/80"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden transition-all duration-300 ${
            isOpen 
              ? 'max-h-[calc(100vh-4rem)] opacity-100 visible'
              : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className={`py-4 space-y-4 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className="block w-full px-4 py-2 text-left text-[#EDAF3D] hover:bg-[#EDAF3D]/10 transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}