import React, { useState, useRef } from 'react';
import { Sun, Moon, Shield, ShieldCheck, ShieldAlert, Users, Package, Clock, Award, Lock, Shield as ShieldIcon, Fingerprint, Scan, ShieldOff, KeyRound, Target, Cpu, Brain, Rocket, Users2 } from 'lucide-react';
import { useCountUp } from './hooks/useCountUp';
import { useIntersectionObserver } from './hooks/useIntersectionObserver';
import { Navbar } from './components/Navbar';
import { Catalogue } from './components/Catalogue';
import { Pricing } from './components/Pricing';
import { VideoSection } from './components/VideoSection';
import { Suppliers } from './components/Suppliers';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { ProductDetails } from './components/ProductDetails';
import { Consultation } from './components/Consultation';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsVisible = useIntersectionObserver(statsRef);

  const path = window.location.pathname;

  const getProductId = () => {
    if (path === '/products/aegis') return 'aegis';
    if (path === '/products/ogbunigwe-z') return 'ogbunigwe-z';
    if (path === '/products/ogbunigwe-v') return 'ogbunigwe-v';
    return null;
  };

  const productId = getProductId();

  const stats = [
    { label: 'Years of Excellence', value: 15, suffix: '+', icon: Award },
    { label: 'Happy Customers', value: 500, suffix: '+', icon: Users },
    { label: 'Units Delivered', value: 2000, suffix: '+', icon: Package },
    { label: 'On-time Delivery', value: 99, suffix: '%', icon: Clock },
  ];

  // Pre-calculate all counts upfront to maintain hook order
  const counts = stats.map(stat => useCountUp(stat.value, 2000, isStatsVisible));

  // If we're on a product page, show the product details
  if (productId) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Navbar isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode(!isDarkMode)} />
        <ProductDetails productId={productId as 'aegis' | 'ogbunigwe-z' | 'ogbunigwe-v'} />
      </div>
    );
  }

  const securityIcons = [Lock, ShieldIcon, Fingerprint, Scan, ShieldOff, KeyRound];

  const offerings = [
    "AI-powered threat detection and response systems",
    "Advanced perimeter security solutions with autonomous capabilities",
    "Integrated command and control systems for comprehensive security",
    "Real-time monitoring and analytics platforms",
    "Customized security protocols and implementations",
    "24/7 technical support and maintenance services",
    "Regular system updates and security patches"
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "Michael Okonkwo",
      role: "Head of Security Operations",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200"
    },
    {
      name: "David Park",
      role: "AI Research Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
    }
  ];

  // Pre-calculate random positions for icons
  const iconPositions = securityIcons.map(() => ({
    x1: -50 + Math.random() * 100,
    y1: -50 + Math.random() * 100,
    x2: -50 + Math.random() * 100,
    y2: -50 + Math.random() * 100,
    x3: -50 + Math.random() * 100,
    y3: -50 + Math.random() * 100,
    x4: -50 + Math.random() * 100,
    y4: -50 + Math.random() * 100,
  }));

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode(!isDarkMode)} />

      {/* Hero Section */}
      <section id="home" className="relative scroll-mt-16">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2% 50%, rgba(237, 175, 61, 0.15) 0%, transparent 25%),
                             radial-gradient(circle at 98% 50%, rgba(237, 175, 61, 0.1) 0%, transparent 25%),
                             linear-gradient(0deg, transparent 0%, ${isDarkMode ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.7)'} 100%)`
          }}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l9.9-9.9h-2.83zM32 0l-3.486 3.485-1.414 1.414L40.97 0H32zM0 5.373l.828-.83L2.243 5.96 0 8.2V5.374zm0 5.656l.828-.829L5.657 5.373 4.243 3.96 0 8.2v2.83zm0 5.657l.828-.828L8.485 13.03 7.07 11.617 0 18.686v-2zm0 5.657l.828-.828L11.313 18.7l-1.414-1.414L0 24.343v-2.657zm0 5.657l.828-.828L14.142 24.23l-1.414-1.414L0 30v-2.657zm0 5.657l.828-.828L16.97 29.8l-1.414-1.414L0 35.657V33zm0 5.657l.828-.828L19.8 35.485l-1.414-1.414L0 41.314v-2.657zm0 5.657l.828-.828L22.627 41.14l-1.414-1.414L0 47v-2.686zm0 5.657l.828-.828L25.455 46.97l-1.414-1.414L0 52.627V50zm0 5.657l.828-.828L28.283 52.8l-1.414-1.414L0 58.313v-2.656zm0 5.657l.828-.828L31.112 58.63 29.7 57.214 0 64v-2.7zm0 5.657l.828-.828L33.94 64 0 64v-2.657z' fill='%23EDAF3D' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.5
          }}></div>
        </div>
        
        {/* Animated Security Icons */}
        <div className="absolute inset-0 overflow-hidden">
          {securityIcons.map((Icon, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                animation: `float-${index} 8s linear infinite`,
                opacity: 0.15
              }}
            >
              <Icon
                className="text-[#EDAF3D]"
                style={{
                  width: `${30 + (index * 10)}px`,
                  height: `${30 + (index * 10)}px`,
                  animation: `spin-${index} 6s linear infinite`
                }}
              />
            </div>
          ))}
        </div>

        <style>
          {securityIcons.map((_, index) => {
            const pos = iconPositions[index];
            return `
              @keyframes float-${index} {
                0% {
                  transform: translate(${pos.x1}vw, ${pos.y1}vh);
                }
                25% {
                  transform: translate(${pos.x2}vw, ${pos.y2}vh);
                }
                50% {
                  transform: translate(${pos.x3}vw, ${pos.y3}vh);
                }
                75% {
                  transform: translate(${pos.x4}vw, ${pos.y4}vh);
                }
                100% {
                  transform: translate(${pos.x1}vw, ${pos.y1}vh);
                }
              }
              @keyframes spin-${index} {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(${index % 2 === 0 ? 360 : -360}deg);
                }
              }
            `;
          }).join('\n')}
        </style>

        {/* Content */}
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-bold mb-8 leading-tight">
              Next-Generation{' '}
              <span className="text-[#EDAF3D] relative">
                Defense Systems
                <span className="absolute -inset-1 bg-[#EDAF3D] opacity-20 blur rounded-lg transform -skew-x-12"></span>
              </span>
            </h1>
            <p className="text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
              Protecting what matters most with cutting-edge{' '}
              <span className="text-[#EDAF3D] font-semibold">AI-powered</span> security solutions
            </p>
            <div className="flex justify-center gap-6">
              <button className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold">
                Explore Solutions
              </button>
              <button className={`px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center transform hover:scale-105 transition-transform">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#EDAF3D]" />
              <div className="text-4xl font-bold mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} scroll-mt-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
          
          {/* Dummy Text Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <p className="text-lg leading-relaxed italic text-gray-400">
              At Bigkoko Defense Systems, we believe in pushing the boundaries of what's possible in security technology. 
              Our commitment to innovation and excellence has positioned us at the forefront of the defense industry, 
              where we continue to develop groundbreaking solutions that protect and empower organizations worldwide.
            </p>
          </div>
          
          {/* Who We Are */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex items-center mb-8">
              <Shield className="w-8 h-8 text-[#EDAF3D] mr-3" />
              <h3 className="text-2xl font-bold">Who We Are</h3>
            </div>
            <p className="text-lg leading-relaxed">
              Bigkoko Defense Systems is a pioneering force in AI-powered security solutions. With over 15 years of experience,
              we've established ourselves as industry leaders in developing cutting-edge defense systems that protect
              organizations and infrastructure across the globe.
            </p>
          </div>

          {/* Our Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To revolutionize global security through innovative AI-driven solutions,
                making advanced defense technology accessible and reliable for organizations worldwide.
              </p>
            </div>
            <div className={`p-8 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
              <div className="flex items-center mb-6">
                <Rocket className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-lg leading-relaxed">
                To deliver state-of-the-art security systems that seamlessly integrate AI technology,
                ensuring unparalleled protection and peace of mind for our clients.
              </p>
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-20">
            <div className="flex items-center mb-8 justify-center">
              <Package className="w-8 h-8 text-[#EDAF3D] mr-3" />
              <h3 className="text-2xl font-bold">What We Offer</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {offerings.map((offering, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-[#EDAF3D] mt-1 flex-shrink-0" />
                  <p className="text-lg">{offering}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Team & Leadership */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-8">
                <Users2 className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Our Team</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Our diverse team of experts brings together decades of experience in cybersecurity,
                artificial intelligence, and defense technologies. We're united by our passion for
                innovation and commitment to excellence.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {teamMembers.map((member) => (
                  <div key={member.name} className="text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-3 object-cover"
                    />
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center mb-8">
                <Brain className="w-8 h-8 text-[#EDAF3D] mr-3" />
                <h3 className="text-2xl font-bold">Leadership & Vision</h3>
              </div>
              <p className="text-lg leading-relaxed mb-6">
                Our leadership team combines strategic insight with technical expertise,
                driving innovation in the security industry. We're committed to pushing
                the boundaries of what's possible in defense technology while maintaining
                the highest standards of reliability and performance.
              </p>
              <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg`}>
                <h4 className="text-xl font-semibold mb-4">Core Values</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Unwavering commitment to security</span>
                  </li>
                  <li className="flex items-center">
                    <Cpu className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Continuous innovation</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="w-5 h-5 text-[#EDAF3D] mr-3" />
                    <span>Client-centric approach</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Catalogue />
      <VideoSection />
      <Suppliers />
      <Consultation />
      <Pricing />
      <FAQ />
      <Blog />
      <Contact />

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Bigkoko Smart Defense Systems. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;