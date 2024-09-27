"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';
 // Utilisation d'Heroicons pour les icônes

const VerticalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Inverse l'état (ouvrir/fermer la navbar)
  };

  return (
    <div>
      <button
        className="flex flex-row space-x-3 p-4 text-white fixed top-14 left-3 z-50 rounded-lg"
        onClick={toggleNavbar}
      >
        {isOpen ? <XIcon className="h-9 w-9" /> : <MenuIcon className="h-6 w-6" />}
      </button>

      {/* Navbar verticale */}
      <nav
        className={`fixed top-0 left-0 h-screen w-64 bg-blue-950 text-white flex flex-col py-4 px-4 space-y-6 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col space-y-4">
          <Link href="/" className="hover:bg-blue-700 py-2 px-4 rounded-lg">
            Accueil
          </Link>
          <Link href="/about" className="hover:bg-blue-700 py-2 px-4 rounded-lg">
            À propos
          </Link>
          <Link href="/services" className="hover:bg-blue-700 py-2 px-4 rounded-lg">
            Services
          </Link>
          <Link href="/contact" className="hover:bg-blue-700 py-2 px-4 rounded-lg">
           Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default VerticalNavbar;
