'use client';

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="py-6 w-full">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <img 
              src="/assets/logos/Aglivo Logo(large).png"
              alt="Aglivo Logo"
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <span className="text-white text-2xl font-bold hidden">AGLIVO</span>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-white hover:text-gray-300 nav-link uppercase text-sm font-medium">HOME</Link>
          <Link href="/about" className="text-white hover:text-gray-300 nav-link uppercase text-sm font-medium">ABOUT</Link>
          <Link href="/services" className="text-white hover:text-gray-300 nav-link uppercase text-sm font-medium">SERVICES</Link>
          <Link href="/projects" className="text-white hover:text-gray-300 nav-link uppercase text-sm font-medium">PROJECTS</Link>
          <Link href="/contact" className="text-white hover:text-gray-300 nav-link uppercase text-sm font-medium">CONTACT</Link>
        </div>
        
        <button className="bg-white text-black hover:bg-gray-200 rounded-full px-6 py-2 font-medium">
          Let's Talk
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
