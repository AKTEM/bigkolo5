import React from 'react';
import { Check, Shield, ShieldCheck, ShieldAlert } from 'lucide-react';

export function Pricing() {
  const pricingPlans = [
    {
      name: 'Aegis-1 SDS',
      icon: Shield,
      price: '25,000',
      description: 'Advanced Smart Defense System',
      features: [
        'AI-powered threat detection',
        'Real-time response system',
        '24/7 technical support',
        'Annual maintenance included',
        'Software updates'
      ]
    },
    {
      name: 'Ogbunigwe-Z',
      icon: ShieldCheck,
      price: '35,000',
      description: 'Perimeter Guard System',
      features: [
        'Autonomous surveillance',
        'Weather-resistant hardware',
        'Extended range coverage',
        'Integration support',
        'Custom configuration'
      ]
    },
    {
      name: 'Ogbunigwe-V',
      icon: ShieldAlert,
      price: '45,000',
      description: 'Tactical Core System',
      features: [
        'Centralized control',
        'Multi-device management',
        'Advanced analytics',
        'Priority support',
        'Custom development'
      ]
    }
  ];

  const purchaseTerms = [
    'Initial consultation and site assessment required',
    'Custom configuration and setup included',
    'Training and documentation provided',
    'Warranty and support package included',
    'Flexible payment terms available',
    'Volume discounts for multiple units'
  ];

  const orderSteps = [
    'Schedule a consultation with our team',
    'Receive customized solution proposal',
    'Review and approve technical specifications',
    'Complete purchase agreement',
    'Schedule installation and setup',
    'Receive training and handover'
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing & Orders</h2>

        {/* Pricing Plans */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EDAF3D]/20 to-transparent rounded-lg blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              <div className="relative bg-black/40 p-8 rounded-lg backdrop-blur-sm border border-[#EDAF3D]/20">
                <plan.icon className="w-12 h-12 text-[#EDAF3D] mb-6" />
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-3xl font-bold mb-6">
                  ${plan.price}
                  <span className="text-sm text-gray-400">/unit</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-[#EDAF3D]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full mt-8 px-6 py-3 bg-[#EDAF3D] text-black rounded-full hover:bg-opacity-90 transition-colors font-semibold">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* How to Place Order */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-2xl font-bold mb-6">How to Place Order</h3>
            <div className="space-y-4">
              {orderSteps.map((step, index) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EDAF3D] text-black flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <p className="text-lg">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Purchase Order Terms</h3>
            <ul className="space-y-4">
              {purchaseTerms.map((term) => (
                <li key={term} className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#EDAF3D] mt-1" />
                  <span>{term}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}