import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent text-white fixed top-0 left-0 w-full z-50 shadow-none">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-3xl font-bold">MyPortfolio</Link>
        <button onClick={toggleMenu} className="lg:hidden px-4 py-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul className={`lg:flex space-x-6 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/web-learn" className="hover:text-gray-400">WebLearn</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-2 p-4">
          <li><Link href="/" className="hover:text-gray-400">Home</Link></li>
          <li><Link href="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link href="/web-learn" className="hover:text-gray-400">WebLearn</Link></li>
          <li><Link href="/contact" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

