'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define the navigation items in an array
  const navItems = [
    { href: '/games', name: 'Games' },
    { href: '/leaderboard', name: 'Leaderboard' },
    { href: '/shop', name: 'Shop' },
    { href: '/profile', name: 'Profile' },
  ];

  return (
    <nav className="bg-cardBlack text-cardWhite p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Brand */}
        <Link href="/">
          <span className="text-2xl font-extrabold text-cardGold hover:text-cardGreen transition duration-200">
            DeskMates
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {/* Map through navItems array to generate the links dynamically */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-cardGreen transition duration-200"
            >
              {item.name}
            </Link>
          ))}

          {/* Login and Signup buttons */}
          <Link href="/login">
            <button className="ml-4 px-4 py-2 bg-cardGreen text-cardWhite rounded-lg hover:bg-cardGold transition duration-200">
              Login
            </button>
          </Link>
          <Link href="/signup">
            <button className="ml-4 px-4 py-2 bg-cardGold text-cardBlack rounded-lg hover:bg-cardGreen transition duration-200">
              Signup
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-cardWhite">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-cardBlack p-4 mt-4`}>
        {/* Map through navItems array to generate the links dynamically for mobile */}
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block text-cardWhite py-2 hover:text-cardGreen transition duration-200"
          >
            {item.name}
          </Link>
        ))}

        {/* Mobile Login and Signup buttons */}
        <Link href="/login">
          <button className="block w-full mt-4 px-4 py-2 bg-cardGreen text-cardWhite rounded-lg hover:bg-cardGold transition duration-200">
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button className="block w-full mt-4 px-4 py-2 bg-cardGold text-cardBlack rounded-lg hover:bg-cardGreen transition duration-200">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
