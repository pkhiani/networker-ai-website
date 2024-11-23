import React from 'react';
import { Chrome } from 'lucide-react';
import YouTubeEmbed from './YouTubeEmbed';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Generate personalized LinkedIn messages
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Making quality connections just got a whole lot easier
            </p>
            <button className="inline-flex items-center px-8 py-3 bg-[#047fc2] text-white rounded-full hover:bg-[#036ba4] transition-colors text-lg">
              <Chrome className="mr-2 h-5 w-5" />
              Get the Extension for Free
            </button>
          </div>
          <div className="flex-1 w-full max-w-2xl mx-auto">
            <div className="bg-white p-4 rounded-2xl shadow-2xl">
              <YouTubeEmbed 
                videoId="OzWQ179Kjek"
                title="Networker.ai Demo Video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}