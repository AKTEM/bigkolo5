import React from 'react';
import { ClipboardList, Map, Wrench, HeadphonesIcon, Building2, Users2, Warehouse, Tractor, Mountain, Shield } from 'lucide-react';

export function Consultation() {
  const stages = [
    {
      title: "Needs Assessment & Site Analysis",
      icon: ClipboardList,
      items: [
        "Risk profiling: human threats, wildlife intrusion, smuggling, armed raids, etc.",
        "Terrain scanning using satellite data or site visits",
        "Infrastructure mapping: power availability, cellular signal strength, physical barriers",
        "Identifying local response capacity (if any)"
      ]
    },
    {
      title: "System Design & Customization",
      icon: Wrench,
      items: [
        "Selection of drone types, payloads (thermal, night vision, etc.)",
        "Command & Control Center configuration (static vs. mobile)",
        "AI model tuning: training object detection for specific threats",
        "Integration planning with existing CCTV or early warning systems"
      ]
    },
    {
      title: "Implementation Strategy",
      icon: Map,
      items: [
        "Deployment timeline and training calendar",
        "Power strategy for off-grid setups (solar, hybrid, generator backup)",
        "Establishing SOPs for armed village responders (AVRs) or local security teams",
        "Optional leasing or phased procurement models"
      ]
    },
    {
      title: "Post-Deployment Support",
      icon: HeadphonesIcon,
      items: [
        "Real-time monitoring support (optional)",
        "Model updates and re-training for evolving threats",
        "Field troubleshooting and continuous user training",
        "Annual audits and security upgrades"
      ]
    }
  ];

  const clients = [
    { icon: Building2, text: "Local governments & municipalities" },
    { icon: Shield, text: "NGOs & humanitarian operations" },
    { icon: Warehouse, text: "Private estate developers" },
    { icon: Tractor, text: "Farming cooperatives" },
    { icon: Mountain, text: "Mining operations" },
    { icon: Users2, text: "National security partners" }
  ];

  return (
    <section id="consultation" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Consultancy Services</h2>
        
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <p className="text-lg text-gray-400 leading-relaxed">
            At Bigkoko Transcontinental Gruppen Filial, we understand that no two defense needs are the same. That's why we offer dedicated consultancy services to help our clients—from small communities to national agencies—design, deploy, and scale intelligent defense systems tailored to their unique risk profiles.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mt-4">
            Whether you're a rural cooperative facing security threats, a government institution protecting strategic assets, or a private organization looking to enhance perimeter surveillance, our expert team will walk with you from initial concept to full deployment.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">What We Offer</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div 
                key={stage.title}
                className="relative group bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#EDAF3D]/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg blur transition-opacity duration-300" />
                <div className="relative">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-[#EDAF3D]/10 rounded-full flex items-center justify-center mr-3">
                      <stage.icon className="w-6 h-6 text-[#EDAF3D]" />
                    </div>
                    <span className="text-[#EDAF3D] text-sm font-semibold">Stage {index + 1}</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{stage.title}</h4>
                  <ul className="space-y-2">
                    {stage.items.map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 bg-[#EDAF3D] rounded-full mt-1.5 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who Should Engage */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12">Who Should Engage Our Consultancy Team?</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {clients.map((client) => (
              <div 
                key={client.text}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#EDAF3D]/10 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <client.icon className="w-8 h-8 text-[#EDAF3D]" />
                </div>
                <p className="text-sm text-gray-400">{client.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}