import React from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/icon.png"
              alt="Networker.ai"
              className="h-8 w-8 text-[#047fc2]"
            />
            <span className="text-xl font-bold">Networker.ai</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-[#047fc2]">
              Home
            </a>
            <a href="#features" className="text-gray-600 hover:text-[#047fc2]">
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-[#047fc2]"
            >
              How It Works
            </a>
            <a href="#faq" className="text-gray-600 hover:text-[#047fc2]">
              FAQ
            </a>
            <button className="bg-[#047fc2] text-white px-6 py-2 rounded-full hover:bg-[#036ba4] transition-colors">
              Get Started
            </button>
          </div>

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </nav>
    </header>
  );
}
