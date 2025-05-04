'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Handle cases where pathname might include sub-routes like /projects/[slug]
    if (pathname.startsWith('/projects')) {
      setActiveTab('/projects');
    } else if (pathname.startsWith('/blogs')) {
      setActiveTab('/blogs');
    } else {
      setActiveTab(pathname);
    }
  }, [pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/projects', label: 'Past projects' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const navigateHome = () => {
    router.push('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full py-4 px-6 md:px-12 flex justify-between items-center bg-white/80 shadow-lg shadow-black/20 z-100 sticky top-0"> {/* Added sticky and top-0 */}
      <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <h1
            className="text-3xl font-bold text-green-500 hover:cursor-pointer"
            onClick={navigateHome}
          >
            BT
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-28 font-agrandir">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${activeTab === link.href
                  ? 'text-green-500 font-semibold' // Active link style
                  : 'text-gray-600' // Inactive link style
                } hover:text-green-500 transition-colors duration-200`} // Hover style for all links
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 shadow-md py-2 px-4 md:hidden z-50 backdrop-blur-sm"> {/* Adjusted top, background, added backdrop-blur */}
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${activeTab === link.href
                      ? 'text-green-500 font-semibold' // Active link style
                      : 'text-gray-600' // Inactive link style
                    } hover:text-green-500 py-2 transition-colors duration-200`} // Hover style for all links
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;