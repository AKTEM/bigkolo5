import React from 'react';
import { Building2, Shield, Award, Truck } from 'lucide-react';

export function Suppliers() {
  const suppliers = [
    {
      name: 'TechCore Industries',
      specialty: 'AI Processing Units',
      location: 'Silicon Valley, USA',
      certification: 'ISO 9001:2015',
      icon: Shield
    },
    {
      name: 'SecureNet Systems',
      specialty: 'Security Hardware',
      location: 'Tokyo, Japan',
      certification: 'ISO 27001',
      icon: Building2
    },
    {
      name: 'DefenseTech Solutions',
      specialty: 'Surveillance Equipment',
      location: 'Berlin, Germany',
      certification: 'ISO/IEC 27001:2013',
      icon: Award
    },
    {
      name: 'GlobalGuard Manufacturing',
      specialty: 'Perimeter Systems',
      location: 'Seoul, South Korea',
      certification: 'ISO 14001:2015',
      icon: Truck
    }
  ];

  return (
    <section id="suppliers" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Trusted Suppliers</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {suppliers.map((supplier) => (
            <div
              key={supplier.name}
              className="p-6 rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 transform hover:scale-105 transition-all duration-300"
            >
              <supplier.icon className="w-12 h-12 text-[#EDAF3D] mb-4" />
              <h3 className="text-xl font-bold mb-2">{supplier.name}</h3>
              <p className="text-gray-400 mb-2">{supplier.specialty}</p>
              <p className="text-sm text-gray-500">{supplier.location}</p>
              <div className="mt-4 inline-block px-3 py-1 bg-[#EDAF3D]/10 rounded-full text-[#EDAF3D] text-sm">
                {supplier.certification}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}