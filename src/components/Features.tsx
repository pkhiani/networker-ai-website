import React from 'react';
import { MessageSquare, Clock, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Personalized Messages',
    description: 'Tailored outreach crafted instantly for each connection.'
  },
  {
    icon: Clock,
    title: 'Time-Saving Efficiency',
    description: 'Write compelling messages in seconds, not hours.'
  },
  {
    icon: TrendingUp,
    title: 'Higher Response Rates',
    description: 'Messages recruiters and peers love to read and respond to.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose Networker.ai</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center group hover:bg-blue-50 p-8 rounded-xl transition-colors">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-[#047fc2] mb-6 group-hover:bg-[#047fc2] group-hover:text-white transition-colors">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}