import React, { useState } from 'react';
import { Shield, ShieldCheck, ShieldAlert, Check, Bone as Drone, Camera, Brain, Server, Clock, CreditCard, Mail, Phone, Building2, Cpu, Eye, Radio, MapPin, AlertTriangle, Zap, Cloud, Users, Database, Lock, Wifi, Sun, Battery, DollarSign, Truck, Notebook as Robot, Radar, Globe, Cctv } from 'lucide-react';

interface ProductDetailsProps {
  productId: 'aegis' | 'ogbunigwe-z' | 'ogbunigwe-v';
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const aegis = {
    name: 'Aegis-1 Smart Defense System (SDS)',
    icon: Shield,
    description: 'Two-Pillar Architecture for Rapid Community Security',
    image: 'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=80&w=2000',
    components: [
      { name: 'Aerial Surveillance Unit', icon: Drone },
      { name: 'Command & Control Center', icon: Brain },
      { name: 'AI-Powered Analytics', icon: Cpu },
      { name: 'Real-time Monitoring', icon: Eye },
      { name: 'Armed Village Responders', icon: Users },
      { name: 'Secure Communications', icon: Radio }
    ],
    features: {
      drone: [
        'Thermal & Night Vision Cameras',
        'AI-Powered Object Detection (YOLOv8)',
        'Live Video Streaming',
        'Autonomous Flight Patterns',
        'GPS & Optional RTK Support',
        'Rugged Design'
      ],
      ccc: [
        'Live Monitoring Interface',
        'Alerts & Event Logging',
        'Geofencing & Map-Based Tasking',
        'Data Storage & Reporting',
        'Integration with AVRs',
        'Remote Access Capability'
      ]
    },
    packages: [
      {
        name: 'Starter Pack',
        price: '$5,900',
        description: 'Ideal for Farms, Compounds, Small Estates',
        features: [
          '1 Drone',
          'CCC Lite',
          'Basic AI Detection',
          '6 months support'
        ]
      },
      {
        name: 'Community Pack',
        price: '$9,800',
        description: 'Perfect for Rural Villages, Cooperatives',
        features: [
          '2 Drones',
          'CCC Standard',
          'Multi-User Alerts',
          '6 months support'
        ]
      },
      {
        name: 'Shield Pack',
        price: '$14,700',
        description: 'For Estates, Camps, NGO Operations',
        features: [
          '3 Drones',
          'CCC Pro',
          'Thermal AI & Night Ops',
          '6 months support'
        ]
      },
      {
        name: 'Enterprise Pack',
        price: 'From $25,000',
        description: 'For Gov. Installations, Border Posts',
        features: [
          '5 Drones',
          'Mobile CCC',
          'Custom AI Models',
          'Priority Support'
        ]
      }
    ],
    subscriptions: [
      {
        name: 'Lite Access',
        price: '$199/month',
        features: [
          'Drone feed access',
          'Basic alerts',
          'Standard AI models',
          'Email support'
        ]
      },
      {
        name: 'Pro Defense',
        price: '$399/month',
        features: [
          'Advanced AI models',
          'Full dashboard access',
          'Priority alerts',
          '24/7 support'
        ]
      },
      {
        name: 'Elite Secure',
        price: '$699/month',
        features: [
          'Multi-location support',
          'Custom AI training',
          'Priority service',
          'Dedicated support team'
        ]
      }
    ],
    addons: [
      {
        name: 'Thermal/Night Vision Camera',
        price: '$800',
        icon: Eye
      },
      {
        name: 'Extra Drone Battery Pack',
        price: '$250',
        icon: Battery
      },
      {
        name: 'Mobile CCC (Vehicle Kit)',
        price: '$1,200',
        icon: Truck
      },
      {
        name: 'Solar Backup Power Unit',
        price: '$900',
        icon: Sun
      },
      {
        name: 'Custom AI Object Dataset',
        price: 'From $600',
        icon: Database
      }
    ]
  };

  const ogbunigweZ = {
    name: 'Ogbunigwe-Z Perimeter Guard',
    icon: ShieldCheck,
    description: 'Next-generation perimeter security solution with autonomous patrol and surveillance features.',
    image: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?auto=format&fit=crop&q=80&w=1200',
    components: [
      { name: '360-degree motion sensors', icon: Shield },
      { name: 'Night-vision cameras', icon: Camera },
      { name: 'Drones for aerial surveillance', icon: Drone },
      { name: 'Automated response systems', icon: Brain },
      { name: 'AI-powered analysis', icon: Server },
      { name: 'Command and Control Center (CCC)', icon: Building2 }
    ],
    pricing: {
      base: {
        name: 'Base System Package',
        price: '€50,000',
        includes: [
          'Main Perimeter Defense Unit',
          'Set of Motion Sensors',
          'Fixed Surveillance Cameras',
          'AI-Powered Data Analysis System',
          'Basic Control Console for CCC'
        ]
      },
      addons: [
        { name: 'Drones for Aerial Surveillance', price: '€15,000', unit: 'per drone unit' },
        { name: 'Mobile Surveillance Units', price: '€25,000', unit: 'per unit' },
        { name: 'Remote Perimeter Sensors', price: '€8,000', unit: 'per sensor' },
        { name: 'Night-Vision Cameras', price: '€6,000', unit: 'per camera' },
        { name: 'AI Local Server Integration', price: '€12,000', unit: 'one-time' }
      ],
      software: [
        { name: 'AI Training & Customization', price: '€10,000', unit: 'one-time' },
        { name: 'Cloud Data Management', price: '€500', unit: 'per month' },
        { name: 'AI Incident Reporting & Analysis', price: '€1,000', unit: 'per month' }
      ],
      maintenance: [
        { name: 'Standard Maintenance (1 year)', price: '€5,000' },
        { name: 'Extended Maintenance (2 years)', price: '€8,500' },
        { name: '24/7 On-Demand Support', price: '€2,500', unit: 'per month' }
      ],
      shipping: {
        standard: '€1,000 - €5,000 (location dependent)',
        installation: '€10,000'
      }
    },
    orderSteps: [
      {
        title: 'Initial Inquiry',
        description: 'Contact our sales team to start the process',
        contact: {
          email: 'sds@bigkokogroup.com',
          phone: '+46 (0) 734039923'
        }
      },
      {
        title: 'Customization and Quote',
        description: 'Our sales engineers will design a custom solution and provide a detailed quote within 3-5 business days'
      },
      {
        title: 'Order Confirmation',
        description: 'Review and confirm your order, followed by formal documentation and invoicing'
      },
      {
        title: 'Payment',
        description: '50% deposit required, with remaining balance due upon delivery',
        terms: '30-day payment terms, financing available for large deployments'
      },
      {
        title: 'Manufacturing & Delivery',
        description: '4-6 weeks production time, followed by coordinated shipping'
      },
      {
        title: 'Installation',
        description: 'Professional installation, configuration, and staff training included'
      }
    ],
    terms: [
      'Orders cancellable within 48 hours (10% fee after)',
      '1-year warranty on materials and workmanship',
      'Extended warranty options available',
      'Worldwide shipping available',
      'Returns only accepted for defective products'
    ]
  };

  const ogbunigweV = {
    name: 'Ogbunigwe-V Tactical Core',
    icon: ShieldAlert,
    description: 'State-of-the-art integrated defense system with AI-powered threat detection',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000',
    features: [
      { name: 'Real-Time Threat Detection', icon: AlertTriangle },
      { name: 'Autonomous Defense Units', icon: Robot },
      { name: 'Advanced Surveillance', icon: Cctv },
      { name: 'Command & Control Center', icon: Brain },
      { name: 'Perimeter Security', icon: Shield },
      { name: 'Rapid-Response Units', icon: Zap }
    ],
    pricing: {
      base: {
        name: 'Base System Package',
        price: '€150,000',
        includes: [
          'Centralized Command & Control Center (CCC)',
          '2 AI-Powered Drones',
          'Motion Detection Sensors',
          'Thermal and Night-Vision Cameras',
          'Ground Robot for Rapid Response',
          'Basic AI Threat Detection Software'
        ]
      },
      addons: [
        { name: 'Additional Drones', price: '€20,000', unit: 'per drone' },
        { name: 'Additional Ground Robots', price: '€25,000', unit: 'per unit' },
        { name: 'Thermal Cameras', price: '€8,000', unit: 'per camera' },
        { name: 'Advanced AI Threat Detection', price: '€30,000', unit: 'one-time' },
        { name: 'Smart Perimeter Sensors', price: '€7,000', unit: 'per sensor' },
        { name: 'Mobile Command Console', price: '€12,000', unit: 'one-time' },
        { name: 'AI Local Server', price: '€15,000', unit: 'one-time' }
      ],
      software: [
        { name: 'AI Training & Customization', price: '€15,000', unit: 'one-time' },
        { name: 'Cloud Data Management', price: '€1,000', unit: 'per month' },
        { name: 'Advanced Incident Reporting', price: '€2,500', unit: 'per month' }
      ],
      support: [
        { name: 'Basic Support (1 year)', price: '€7,000' },
        { name: 'Premium Support (2 years)', price: '€12,000' },
        { name: '24/7 Dedicated Support', price: '€3,000', unit: 'per month' }
      ],
      shipping: {
        standard: '€2,000 - €10,000 (location dependent)',
        installation: '€15,000'
      }
    },
    orderSteps: [
      {
        title: 'Initial Inquiry',
        description: 'Contact our sales team with your facility\'s specific security needs',
        contact: {
          email: 'sds@bigkokogroup.com',
          phone: '+46 (0) 734039923'
        }
      },
      {
        title: 'Consultation & Customization',
        description: 'Our engineers design a custom solution tailored to your needs'
      },
      {
        title: 'Order Confirmation',
        description: 'Review and confirm your selection with final system design'
      },
      {
        title: 'Payment',
        description: '50% deposit required, remaining balance due upon delivery'
      },
      {
        title: 'Manufacturing & Assembly',
        description: '6-8 weeks production time for system assembly'
      },
      {
        title: 'Installation & Configuration',
        description: 'Professional installation and staff training included'
      },
      {
        title: 'Final Testing and Handover',
        description: 'Thorough system testing and documentation delivery'
      }
    ],
    terms: [
      'Orders cancellable within 48 hours (15% fee after)',
      '2-year warranty on materials and workmanship',
      'Extended warranty options available',
      'International shipping available (duties may apply)',
      'Returns only accepted for defective products'
    ]
  };

  if (productId === 'ogbunigwe-v') {
    return (
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <img
              src={ogbunigweV.image}
              alt={ogbunigweV.name}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <ogbunigweV.icon className="w-12 h-12 text-[#EDAF3D]" />
                <h1 className="text-5xl font-bold">{ogbunigweV.name}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">{ogbunigweV.description}</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold">
                  Request Quote
                </button>
                <button className="px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-b border-[#EDAF3D]/20">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8 overflow-x-auto">
              {['overview', 'features', 'pricing', 'order'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#EDAF3D] text-[#EDAF3D]'
                      : 'border-transparent hover:border-[#EDAF3D]/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Overview Section */}
            {activeTab === 'overview' && (
              <div className="space-y-20">
                <div>
                  <h2 className="text-3xl font-bold mb-12">System Overview</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {ogbunigweV.features.map((feature) => (
                      <div key={feature.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8 transform hover:scale-105 transition-all">
                        <feature.icon className="w-12 h-12 text-[#EDAF3D] mb-6" />
                        <h3 className="text-xl font-bold">{feature.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Integration Diagram */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Integrated Defense System</h2>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#EDAF3D]/5 transform rotate-45" />
                    <div className="relative grid md:grid-cols-2 gap-8">
                      <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <Brain className="w-12 h-12 text-[#EDAF3D] mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Command & Control</h3>
                        <ul className="space-y-3">
                          {[
                            'Centralized monitoring dashboard',
                            'Real-time analytics',
                            'Multi-device synchronization',
                            'Automated reporting'
                          ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#EDAF3D]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <Shield className="w-12 h-12 text-[#EDAF3D] mb-6" />
                        <h3 className="text-2xl font-bold mb-4">Defense Units</h3>
                        <ul className="space-y-3">
                          {[
                            'AI-powered drones',
                            'Ground patrol robots',
                            'Smart perimeter sensors',
                            'Rapid response capabilities'
                          ].map((item) => (
                            <li key={item} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#EDAF3D]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeTab === 'features' && (
              <div className="space-y-20">
                {/* Technical Specifications */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Command & Control Center</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Monitoring Capacity', value: '1000+ devices' },
                          { label: 'Data Processing', value: '1TB/day' },
                          { label: 'Uptime', value: '99.999%' },
                          { label: 'Backup Frequency', value: 'Real-time' },
                          { label: 'User Access Levels', value: '5 tiers' }
                        ].map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Defense Units</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Drone Range', value: '10km' },
                          { label: 'Robot Patrol Speed', value: '15 km/h' },
                          { label: 'Sensor Coverage', value: '100m radius' },
                          { label: 'Response Time', value: '< 30 seconds' },
                          { label: 'Operating Temperature', value: '-30°C to 60°C' }
                        ].map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Capabilities */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">AI Capabilities</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        icon: Brain,
                        title: 'Threat Detection',
                        features: [
                          'Real-time object recognition',
                          'Behavioral analysis',
                          'Pattern detection',
                          'Anomaly identification'
                        ]
                      },
                      {
                        icon: Robot,
                        title: 'Autonomous Operation',
                        features: [
                          'Self-guided patrols',
                          'Adaptive routing',
                          'Obstacle avoidance',
                          'Multi-unit coordination'
                        ]
                      },
                      {
                        icon: Globe,
                        title: 'Integration',
                        features: [
                          'API connectivity',
                          'Third-party systems',
                          'Custom protocols',
                          'Secure data exchange'
                        ]
                      }
                    ].map((section) => (
                      <div key={section.title} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <section.icon className="w-12 h-12 text-[#EDAF3D] mb-6" />
                        <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                        <ul className="space-y-3">
                          {section.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#EDAF3D]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {activeTab === 'pricing' && (
              <div className="space-y-20">
                {/* Base Package */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Base System Package</h2>
                  <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-2xl font-bold">Package Price</h3>
                      <span className="text-3xl font-bold text-[#EDAF3D]">{ogbunigweV.pricing.base.price}</span>
                    </div>
                    <ul className="grid md:grid-cols-2 gap-4">
                      {ogbunigweV.pricing.base.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-[#EDAF3D]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Optional Add-ons</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ogbunigweV.pricing.addons.map((addon) => (
                      <div key={addon.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                        <h3 className="text-xl font-bold mb-2">{addon.name}</h3>
                        <div className="flex justify-between items-center">
                          <span className="text-[#EDAF3D] font-bold">{addon.price}</span>
                          <span className="text-sm text-gray-400">{addon.unit}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Software & Support */}
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Software & AI Services</h2>
                    <div className="space-y-6">
                      {ogbunigweV.pricing.software.map((item) => (
                        <div key={item.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-[#EDAF3D] font-bold">{item.price}</span>
                            <span className="text-sm text-gray-400">{item.unit}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-8">Support Packages</h2>
                    <div className="space-y-6">
                      {ogbunigweV.pricing.support.map((item) => (
                        <div key={item.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                          <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                          <div className="flex justify-between items-center">
                            <span className="text-[#EDAF3D] font-bold">{item.price}</span>
                            {item.unit && <span className="text-sm text-gray-400">{item.unit}</span>}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Order Section */}
            {activeTab === 'order' && (
              <div className="space-y-20">
                {/* Order Steps */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">How to Place an Order</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ogbunigweV.orderSteps.map((step, index) => (
                      <div key={step.title} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-8 h-8 rounded-full bg-[#EDAF3D] text-black flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-400 mb-4">{step.description}</p>
                        {step.contact && (
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-[#EDAF3D]" />
                              <a href={`mailto:${step.contact.email}`} className="text-[#EDAF3D] hover:underline">
                                {step.contact.email}
                              </a>
                            </div>
                            <div className="flex items-center gap-2">
                              <Phone className="w-4 h-4 text-[#EDAF3D]" />
                              <a href={`tel:${step.contact.phone}`} className="text-[#EDAF3D] hover:underline">
                                {step.contact.phone}
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Terms and Conditions</h2>
                  <div className="max-w-3xl mx-auto">
                    <ul className="space-y-4">
                      {ogbunigweV.terms.map((term) => (
                        <li key={term} className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-[#EDAF3D] mt-1" />
                          <span>{term}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (productId === 'aegis') {
    return (
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <img
              src={aegis.image}
              alt={aegis.name}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <aegis.icon className="w-12 h-12 text-[#EDAF3D]" />
                <h1 className="text-5xl font-bold">{aegis.name}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">{aegis.description}</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold">
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <div className="sticky top-16 bg-black/95 backdrop-blur-sm z-40 border-b border-[#EDAF3D]/20">
          <div className="container mx-auto px-4">
            <div className="flex space-x-8 overflow-x-auto">
              {['overview', 'features', 'packages', 'installation', 'avr'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-[#EDAF3D] text-[#EDAF3D]'
                      : 'border-transparent hover:border-[#EDAF3D]/50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            {/* Overview Section */}
            {activeTab === 'overview' && (
              <div className="space-y-20">
                {/* Two-Pillar Architecture */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Two-Pillar Architecture</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                      <Drone className="w-12 h-12 text-[#EDAF3D] mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Aerial Surveillance Unit</h3>
                      <p className="text-gray-400 mb-6">
                        Equipped with advanced sensors and intelligent software, providing real-time situational awareness from the sky.
                      </p>
                      <ul className="space-y-3">
                        {aegis.features.drone.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#EDAF3D]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                      <Brain className="w-12 h-12 text-[#EDAF3D] mb-6" />
                      <h3 className="text-2xl font-bold mb-4">Command & Control Center</h3>
                      <p className="text-gray-400 mb-6">
                        The brain of the system, bringing together real-time data and translating it into actionable intelligence.
                      </p>
                      <ul className="space-y-3">
                        {aegis.features.ccc.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#EDAF3D]" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Triangle of Defense */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Triangle of Defense</h2>
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#EDAF3D]/5 transform rotate-45" />
                    <div className="relative grid md:grid-cols-3 gap-8">
                      {[
                        {
                          icon: Drone,
                          title: 'Drones',
                          description: 'Detect threats or unusual activity from the air'
                        },
                        {
                          icon: Brain,
                          title: 'CCC',
                          description: 'Analyzes and classifies the data using AI'
                        },
                        {
                          icon: Users,
                          title: 'AVRs',
                          description: 'Receive alerts and act swiftly with local knowledge'
                        }
                      ].map((item) => (
                        <div key={item.title} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8 text-center">
                          <item.icon className="w-16 h-16 text-[#EDAF3D] mx-auto mb-6" />
                          <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Section */}
            {activeTab === 'features' && (
              <div className="space-y-20">
                {/* Key Components */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Key Components</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {aegis.components.map((component) => (
                      <div key={component.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <component.icon className="w-12 h-12 text-[#EDAF3D] mb-6" />
                        <h3 className="text-xl font-bold">{component.name}</h3>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Specifications */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Technical Specifications</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">Drone Specifications</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Flight Time', value: 'Up to 40 minutes' },
                          { label: 'Range', value: '7km (Line of Sight)' },
                          { label: 'Camera Resolution', value: '4K + Thermal' },
                          { label: 'AI Processing', value: 'Edge Computing' },
                          { label: 'Weather Resistance', value: 'IP54 Rated' }
                        ].map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold mb-6">CCC Specifications</h3>
                      <div className="space-y-4">
                        {[
                          { label: 'Processing Power', value: '12 TFLOPS' },
                          { label: 'Storage Capacity', value: '10TB' },
                          { label: 'Network', value: '4G/5G/LoRaWAN' },
                          { label: 'Power Supply', value: 'Solar + Battery' },
                          { label: 'User Interface', value: 'Web-based Dashboard' }
                        ].map((spec) => (
                          <div key={spec.label} className="flex justify-between items-center">
                            <span className="text-gray-400">{spec.label}</span>
                            <span className="font-semibold">{spec.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Packages Section */}
            {activeTab === 'packages' && (
              <div className="space-y-20">
                {/* Package Cards */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Choose Your Package</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {aegis.packages.map((pkg) => (
                      <div key={pkg.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold text-[#EDAF3D] mb-4">{pkg.price}</div>
                        <p className="text-gray-400 mb-6">{pkg.description}</p>
                        <ul className="space-y-3 mb-8">
                          {pkg.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#EDAF3D]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <button className="w-full px-6 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all font-semibold">
                          Select Package
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subscriptions */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Monthly Subscriptions</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {aegis.subscriptions.map((sub) => (
                      <div key={sub.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-2">{sub.name}</h3>
                        <div className="text-3xl font-bold text-[#EDAF3D] mb-6">{sub.price}</div>
                        <ul className="space-y-3">
                          {sub.features.map((feature) => (
                            <li key={feature} className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-[#EDAF3D]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Add-ons */}
                <div>
                  <h2 className="text-3xl font-bold mb-12">Available Add-ons</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    {aegis.addons.map((addon) => (
                      <div key={addon.name} className="flex items-center gap-4 bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                        <addon.icon className="w-8 h-8 text-[#EDAF3D]" />
                        <div>
                          <h3 className="font-semibold">{addon.name}</h3>
                          <div className="text-[#EDAF3D]">{addon.price}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Installation Section */}
            {activeTab === 'installation' && (
              <div className="space-y-20">
                <div>
                  <h2 className="text-3xl font-bold mb-12">Easy to Install, Simple to Use</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Quick Setup</h3>
                        <ul className="space-y-4">
                          {[
                            'Plug & Play Design with pre-configured components',
                            'Modular Equipment for easy assembly',
                            'No Complex Wiring required'
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Check className="w-5 h-5 text-[#EDAF3D] mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Seamless Connectivity</h3>
                        <ul className="space-y-4">
                          {[
                            'Integrates with existing mobile networks',
                            'Live drone video feeds via RTMP or HDMI',
                            'Wireless operation for maximum flexibility'
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Wifi className="w-5 h-5 text-[#EDAF3D] mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-6">AI-Powered Detection</h3>
                        <ul className="space-y-4">
                          {[
                            'Pre-trained YOLOv8 AI model',
                            'Automatic threat detection',
                            'No coding required'
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Brain className="w-5 h-5 text-[#EDAF3D] mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-6">Secure & Scalable</h3>
                        <ul className="space-y-4">
                          {[
                            'Encrypted data transmission',
                            'Role-based access control',
                            'Scalable from single property to network'
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <Lock className="w-5 h-5 text-[#EDAF3D] mt-1" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* AVR Section */}
            {activeTab === 'avr' && (
              <div className="space-y-20">
                <div>
                  <h2 className="text-3xl font-bold mb-12">Armed Village Responders (AVRs)</h2>
                  <div className="grid md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-2xl font-bold mb-6">The Human Layer</h3>
                      <p className="text-gray-400 mb-8">
                        AVRs play a vital role in the success of the Aegis-1 Smart Defense System,
                        providing fast, local action in remote or vulnerable areas.
                      </p>
                      <div className="space-y-6">
                        {[
                          {
                            title: 'Speed',
                            description: 'AVRs drastically reduce the response time once threats are identified'
                          },
                          {
                            title: 'Local Knowledge',
                            description: 'Understanding of terrain, escape routes, and potential hiding spots'
                          },
                          {
                            title: 'Scalability',
                            description: 'Efficient operation with well-placed, trained responders'
                          },
                          {
                            title: 'Community Trust',
                            description: 'Local responders create community cooperation and resilience'
                          }
                        ].map((item) => (
                          <div key={item.title} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                            <h4 className="font-bold mb-2">{item.title}</h4>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-6">Integration with Technology</h3>
                      <div className="space-y-8">
                        <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                          <h4 className="font-bold mb-4">With Drone Surveillance</h4>
                          <ul className="space-y-3">
                            {[
                              'Receive real-time aerial intelligence',
                              'Visual confirmation and coordinates',
                              'Live drone feeds through mobile apps',
                              'Guided intercept paths'
                            ].map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-[#EDAF3D]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                          <h4 className="font-bold mb-4">With Command & Control Center</h4>
                          <ul className="space-y-3">
                            {[
                              'Connected as verified response agents',
                              'Receive tactical guidance and maps',
                              'Real-time communication with operators',
                              'Post-action reporting and analysis'
                            ].map((item) => (
                              <li key={item} className="flex items-center gap-2">
                                <Check className="w-5 h-5 text-[#EDAF3D]" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (productId === 'ogbunigwe-z') {
    return (
      <div className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-black">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black" />
            <img
              src={ogbunigweZ.image}
              alt={ogbunigweZ.name}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <ogbunigweZ.icon className="w-12 h-12 text-[#EDAF3D]" />
                <h1 className="text-5xl font-bold">{ogbunigweZ.name}</h1>
              </div>
              <p className="text-xl text-gray-300 mb-8">{ogbunigweZ.description}</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105 font-semibold">
                  Request Quote
                </button>
                <button className="px-8 py-3 border-2 border-[#EDAF3D] rounded-full hover:bg-[#EDAF3D] hover:text-black transition-all transform hover:scale-105 font-semibold">
                  Download Specs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* System Components */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">System Components</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {ogbunigweZ.components.map((component) => (
                <div key={component.name} className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 transform hover:scale-105 transition-all">
                  <component.icon className="w-12 h-12 text-[#EDAF3D] mb-4" />
                  <h3 className="text-xl font-bold">{component.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Pricing Structure</h2>
            
            {/* Base Package */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Base System Package</h3>
              <div className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-8">
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-xl font-semibold">Package Price</h4>
                  <span className="text-2xl font-bold text-[#EDAF3D]">{ogbunigweZ.pricing.base.price}</span>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  {ogbunigweZ.pricing.base.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#EDAF3D]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Add-ons */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8">Add-Ons and Customization</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {ogbunigweZ.pricing.addons.map((addon) => (
                  <div key={addon.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                    <h4 className="text-lg font-semibold mb-2">{addon.name}</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-[#EDAF3D] font-bold">{addon.price}</span>
                      <span className="text-sm text-gray-400">{addon.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software & Maintenance */}
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold mb-8">Software & AI Services</h3>
                <div className="space-y-6">
                  {ogbunigweZ.pricing.software.map((item) => (
                    <div key={item.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-[#EDAF3D] font-bold">{item.price}</span>
                        <span className="text-sm text-gray-400">{item.unit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-8">Support & Maintenance</h3>
                <div className="space-y-6">
                  {ogbunigweZ.pricing.maintenance.map((item) => (
                    <div key={item.name} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                      <h4 className="text-lg font-semibold mb-2">{item.name}</h4>
                      <div className="flex justify-between items-center">
                        <span className="text-[#EDAF3D] font-bold">{item.price}</span>
                        {item.unit && <span className="text-sm text-gray-400">{item.unit}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Order Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">How to Place an Order</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ogbunigweZ.orderSteps.map((step, index) => (
                <div key={step.title} className="bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#EDAF3D] text-black flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 mb-4">{step.description}</p>
                  {step.contact && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-[#EDAF3D]" />
                        <a href={`mailto:${step.contact.email}`} className="text-[#EDAF3D] hover:underline">
                          {step.contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-[#EDAF3D]" />
                        <a href={`tel:${step.contact.phone}`} className="text-[#EDAF3D] hover:underline">
                          {step.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Terms of Sale */}
        <section className="py-20 bg-black/40">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Terms of Sale</h2>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-4">
                {ogbunigweZ.terms.map((term) => (
                  <li key={term} className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#EDAF3D] mt-1" />
                    <span>{term}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return null;
}