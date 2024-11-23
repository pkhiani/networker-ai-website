import React from 'react';
import { Download, Target, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: Download,
    title: 'Install the extension',
    description: 'Get started with a simple click from the Chrome Web Store'
  },
  {
    icon: Target,
    title: 'Select your purpose',
    description: 'Choose from Career Advice, Networking, or Collaboration'
  },
  {
    icon: MessageCircle,
    title: 'Generate perfect messages',
    description: 'Let AI craft the ideal message for your connection'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-[#047fc2]/20" />
              )}
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                  <step.icon className="h-10 w-10 text-[#047fc2]" />
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}