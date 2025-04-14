import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Sun, Moon, ChevronDown } from 'lucide-react';

interface NavbarProps {
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

export function Navbar({ isDarkMode, onThemeToggle }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCatalogueOpen, setIsCatalogueOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '#about' },
    {
      label: 'Catalogue',
      href: '#catalogue',
      submenu: [
        { label: 'Aegis-1 SDS', href: '/products/aegis' },
        { label: 'Ogbunigwe-Z Perimeter Guard', href: '/products/ogbunigwe-z' },
        { label: 'Ogbunigwe-V Tactical Core', href: '/products/ogbunigwe-v' },
      ],
    },
    { label: 'Consultation', href: '#consultation' },
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || isOpen ? 'bg-opacity-95 backdrop-blur-sm shadow-lg' : 'bg-opacity-0'
    } ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Shield className="h-8 w-8 text-[#EDAF3D]" />
            <span className="ml-2 text-xl font-bold text-[#EDAF3D]">Bigkoko</span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setIsCatalogueOpen(!isCatalogueOpen)}
                      className="flex items-center text-[#EDAF3D] hover:text-[#EDAF3D]/80 transition-colors duration-200"
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isCatalogueOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isCatalogueOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg shadow-xl">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-4 py-3 text-[#EDAF3D] hover:bg-[#EDAF3D]/10 transition-colors duration-200"
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="text-[#EDAF3D] hover:text-[#EDAF3D]/80 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center md:hidden">
            <button
              onClick={onThemeToggle}
              className="p-2 rounded-full hover:bg-gray-800 transition-colors mr-4"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="text-[#EDAF3D]" /> : <Moon className="text-[#EDAF3D]" />}
            </button>

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
              <div key={item.label}>
                {item.submenu ? (
                  <div>
                    <button
                      onClick={() => setIsCatalogueOpen(!isCatalogueOpen)}
                      className="flex items-center w-full px-4 py-2 text-[#EDAF3D] hover:bg-[#EDAF3D]/10 transition-colors duration-200"
                    >
                      {item.label}
                      <ChevronDown className={`ml-1 w-4 h-4 transform transition-transform ${isCatalogueOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isCatalogueOpen && (
                      <div className="pl-8 space-y-2">
                        {item.submenu.map((subitem) => (
                          <a
                            key={subitem.label}
                            href={subitem.href}
                            className="block px-4 py-2 text-[#EDAF3D] hover:bg-[#EDAF3D]/10 transition-colors duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {subitem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-[#EDAF3D] hover:bg-[#EDAF3D]/10 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}