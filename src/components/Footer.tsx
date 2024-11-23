import React from 'react';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-8 md:mb-0">
            <img
              src="/icon.png"
              alt="Networker.ai"
              className="h-8 w-8 text-[#047fc2]"
            />
            <span className="text-xl font-bold">Networker.ai</span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#047fc2]">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#047fc2]">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#047fc2]">
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Networker.ai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
