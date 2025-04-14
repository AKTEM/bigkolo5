import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-gray-400 mb-8">
              Have questions about our security solutions? Our team is here to help.
              Reach out to us for expert consultation and support.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#EDAF3D]" />
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-400">123 Security Plaza, Tech Valley, CA 94025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[#EDAF3D]" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-[#EDAF3D]" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-400">contact@bigkoko.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#EDAF3D]/20 focus:border-[#EDAF3D] focus:ring-1 focus:ring-[#EDAF3D] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#EDAF3D]/20 focus:border-[#EDAF3D] focus:ring-1 focus:ring-[#EDAF3D] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-[#EDAF3D]/20 focus:border-[#EDAF3D] focus:ring-1 focus:ring-[#EDAF3D] transition-colors"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#EDAF3D] text-black rounded-lg hover:bg-[#EDAF3D]/90 transition-colors font-semibold"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}