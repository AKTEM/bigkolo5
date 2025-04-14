import React, { useState, useRef } from 'react';
import { 
  Sun, Moon, Shield, ShieldCheck, ShieldAlert, Users, Package, Clock, Award, Lock, 
  Shield as ShieldIcon, Fingerprint, Scan, ShieldOff, KeyRound, Target, Cpu, Brain, 
  Rocket, Users2, Globe, Zap, Server, Database, PenTool as Tool, Laptop, Radio, Battery, 
  Camera, Bone as Drone, Monitor, HardDrive, Cloud, Settings, FileText, AlertTriangle 
} from 'lucide-react';
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

  const counts = stats.map(stat => useCountUp(stat.value, 2000, isStatsVisible));

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

  const localCustomization = [
    {
      title: "Swedish and EU Compliance",
      description: "Hardware reliability and regulatory compliance through Swedish and EU-based suppliers",
      icon: Shield
    },
    {
      title: "Local African Partnerships",
      description: "Culturally and logistically sensitive deployment through local partners",
      icon: Globe
    },
    {
      title: "Open-source AI",
      description: "Cost-effective and agile solutions through open-source AI ecosystems",
      icon: Brain
    }
  ];

  const expertTeam = [
    {
      title: "Defense Technologists",
      icon: Shield,
      description: "Experts in military-grade security systems"
    },
    {
      title: "AI & Drone Specialists",
      icon: Drone,
      description: "Integration of cutting-edge AI and drone technology"
    },
    {
      title: "Security Planners",
      icon: FileText,
      description: "Strategic security and logistics planning"
    },
    {
      title: "Rural Consultants",
      icon: Zap,
      description: "Specialists in rural electrification"
    },
    {
      title: "Cybersecurity Experts",
      icon: Lock,
      description: "Digital security and policy advisors"
    }
  ];

  const supplierCategories = [
    {
      title: "Drone & UAV Technologies",
      icon: Drone,
      items: [
        "Fixed-wing and multi-rotor UAVs",
        "Thermal & night vision cameras",
        "RTMP streaming controllers",
        "Custom payload solutions"
      ]
    },
    {
      title: "Command & Control",
      icon: Monitor,
      items: [
        "Rugged communication hardware",
        "Touchscreen interfaces",
        "Edge AI processing units",
        "Dashboard systems"
      ]
    },
    {
      title: "Power Systems",
      icon: Battery,
      items: [
        "Solar hybrid systems",
        "Lithium-ion batteries",
        "Backup generators",
        "Energy management"
      ]
    },
    {
      title: "AI & Analytics",
      icon: Brain,
      items: [
        "YOLOv8 AI training",
        "Cybersecurity protocols",
        "Mapping APIs",
        "Cloud storage"
      ]
    }
  ];

  const technicalSpecs = [
    {
      title: "Core Components",
      icon: Server,
      items: [
        "AI Surveillance Drones",
        "Command & Control Center",
        "AI Local Server",
        "Dual Monitor Setup",
        "Communication Systems"
      ]
    },
    {
      title: "Detection Capabilities",
      icon: Camera,
      items: [
        "Human Detection",
        "Armed Intruder Alert",
        "Livestock Monitoring",
        "Vehicle Recognition",
        "Night Vision Surveillance"
      ]
    },
    {
      title: "Power Solutions",
      icon: Zap,
      items: [
        "Solar Power System",
        "Battery Backup",
        "UPS Integration",
        "Off-grid Operation",
        "Power Management"
      ]
    }
  ];

  const iconPositions = securityIcons.map(() => ({
    x: -20 + Math.random() * 40,
    y: -20 + Math.random() * 40,
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
                left: '50%',
                top: '50%',
                transform: `translate(${iconPositions[index].x}%, ${iconPositions[index].y}%)`,
                opacity: 0.15,
                transition: 'transform 3s ease-in-out'
              }}
            >
              <Icon
                className="text-[#EDAF3D]"
                style={{
                  width: `${30 + (index * 10)}px`,
                  height: `${30 + (index * 10)}px`,
                  animation: 'gentle-rotate 20s linear infinite'
                }}
              />
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes gentle-rotate {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }
          `}
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

      {/* Local & Regional Customization Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Local & Regional Customization</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {localCustomization.map((item) => (
              <div key={item.title} className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20">
                <item.icon className="w-12 h-12 text-[#EDAF3D] mb-4" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Expert Team Grid */}
          <h3 className="text-3xl font-bold text-center mb-12">Our Experts</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {expertTeam.map((expert) => (
              <div key={expert.title} className="text-center p-6 rounded-lg bg-black/30 backdrop-blur-sm border border-[#EDAF3D]/10">
                <expert.icon className="w-10 h-10 text-[#EDAF3D] mx-auto mb-4" />
                <h4 className="font-semibold mb-2">{expert.title}</h4>
                <p className="text-sm text-gray-400">{expert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Sourcing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Strategic Sourcing with a Scandinavian Backbone</h2>
          
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1565514020179-026b92b2d0b5?auto=format&fit=crop&q=80&w=1200" 
                alt="Swedish Engineering"
                className="rounded-lg shadow-xl mb-6"
              />
              <p className="text-lg text-gray-400">
                As a Sweden-based company, we prioritize working with Swedish and Nordic suppliers 
                who are known for their excellence in engineering, sustainability practices, and 
                prompt delivery.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {supplierCategories.map((category) => (
                <div key={category.title} className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20">
                  <category.icon className="w-10 h-10 text-[#EDAF3D] mb-4" />
                  <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="text-sm text-gray-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#EDAF3D] rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Technical Specifications</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {technicalSpecs.map((spec) => (
              <div key={spec.title} className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20">
                <spec.icon className="w-12 h-12 text-[#EDAF3D] mb-4" />
                <h3 className="text-xl font-bold mb-4">{spec.title}</h3>
                <ul className="space-y-3">
                  {spec.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-400">
                      <ShieldCheck className="w-5 h-5 text-[#EDAF3D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Talk</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Want to explore how Bigkoko can help you build a smart security system for your region? 
            Book a free consultation session with our team.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
            <a 
              href="https://sds.bigkokogroup.com" 
              className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold"
            >
              Visit Website
            </a>
            <a 
              href="mailto:sds@bigkokogroup.com"
              className="px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

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