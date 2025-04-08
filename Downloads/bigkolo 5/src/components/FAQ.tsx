import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const faqs = [
    {
      question: 'What makes your security systems unique?',
      answer: 'Our systems integrate cutting-edge AI technology with advanced hardware, providing predictive threat detection and autonomous response capabilities that adapt to evolving security challenges.'
    },
    {
      question: 'How long does installation typically take?',
      answer: 'Installation time varies based on system complexity and site requirements. Typically, basic installations take 2-3 days, while comprehensive security solutions might require 1-2 weeks.'
    },
    {
      question: 'Do you offer maintenance services?',
      answer: 'Yes, we provide comprehensive maintenance packages including regular system checks, software updates, and 24/7 technical support.'
    },
    {
      question: 'What kind of warranty do you offer?',
      answer: 'Our products come with a standard 3-year warranty covering hardware defects and system malfunctions. Extended warranty options are available.'
    },
    {
      question: 'Can your systems integrate with existing security infrastructure?',
      answer: 'Yes, our systems are designed with open architecture, allowing seamless integration with most existing security systems and protocols.'
    },
    {
      question: 'What kind of training do you provide?',
      answer: 'We offer comprehensive training programs for system operators, including hands-on training, documentation, and ongoing support.'
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <Disclosure key={index} as="div" className="mb-4">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-6 py-4 text-left rounded-lg bg-black/40 backdrop-blur-sm border border-[#EDAF3D]/20 hover:bg-[#EDAF3D]/10 transition-colors duration-200">
                    <span className="text-lg font-semibold">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#EDAF3D] transform transition-transform duration-200 ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 py-4 text-gray-400">
                    {faq.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}