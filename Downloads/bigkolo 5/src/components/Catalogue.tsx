import React from 'react';
import { Shield, ShieldCheck, ShieldAlert } from 'lucide-react';

interface Product {
  name: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  icon: typeof Shield;
  image: string;
}

export function Catalogue() {
  const products: Product[] = [
    {
      name: 'Aegis-1 SDS',
      description: 'Advanced Smart Defense System with AI-powered threat detection and response capabilities.',
      features: [
        'Real-time threat detection and analysis',
        'AI-powered response automation',
        'Multi-layer security architecture',
        'Integrated command and control interface',
        'Scalable deployment options'
      ],
      specifications: {
        'Processing Power': '12 TFLOPS',
        'Response Time': '<10ms',
        'AI Model': 'Custom Neural Network',
        'Coverage Area': 'Up to 10,000 sq ft',
        'Integration': 'REST API, WebSocket'
      },
      icon: Shield,
      image: 'https://images.unsplash.com/photo-1624969862644-791f3dc98927?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'Ogbunigwe-Z Perimeter Guard',
      description: 'Next-generation perimeter security solution with autonomous patrol and surveillance features.',
      features: [
        'Autonomous perimeter monitoring',
        'Advanced motion detection',
        'Night vision capabilities',
        'Weather-resistant design',
        'Integrated alarm system'
      ],
      specifications: {
        'Range': '500m',
        'Detection Accuracy': '99.9%',
        'Operating Temperature': '-30°C to 60°C',
        'Power Consumption': '45W',
        'Battery Life': '48 hours'
      },
      icon: ShieldCheck,
      image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200'
    },
    {
      name: 'Ogbunigwe-V Tactical Core',
      description: 'Centralized command and control system for integrated security operations.',
      features: [
        'Centralized monitoring dashboard',
        'Real-time analytics',
        'Multi-device synchronization',
        'Automated reporting',
        'Custom alert configuration'
      ],
      specifications: {
        'Monitoring Capacity': '1000+ devices',
        'Data Processing': '1TB/day',
        'Uptime': '99.999%',
        'Backup Frequency': 'Real-time',
        'User Access Levels': '5 tiers'
      },
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
    }
  ];

  return (
    <section id="catalogue" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Product Catalogue</h2>
        <div className="space-y-20">
          {products.map((product, index) => (
            <div key={product.name} className={`flex flex-col lg:flex-row gap-12 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className="lg:w-1/2">
                <div className="relative group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-3">
                  <product.icon className="w-8 h-8 text-[#EDAF3D]" />
                  <h3 className="text-3xl font-bold">{product.name}</h3>
                </div>
                <p className="text-lg text-gray-400">{product.description}</p>
                
                <div>
                  <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Shield className="w-5 h-5 text-[#EDAF3D]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4">Technical Specifications</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key}>
                        <dt className="text-sm text-gray-400">{key}</dt>
                        <dd className="font-semibold">{value}</dd>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}