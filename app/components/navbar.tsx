"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full left-60 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">All</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Gaming</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Thoughts</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Music</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Thrillers</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Mixe</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Avatar</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Film criticisma</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Korean dramas</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Characters</Link>
          <Link href="#" className="text-gray-400 block lg:inline-block px-9 py-2">Eating</Link>
        </div>
      </div>
    </nav>
  );
}
