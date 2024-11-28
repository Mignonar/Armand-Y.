import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LanguageSwitch } from './LanguageSwitch';

export const Navigation: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { key: 'home', to: '/' },
    { key: 'portfolio', to: '/portfolio' },
    { key: 'services', to: '/services' },
    { key: 'about', to: '/about' },
    { key: 'blog', to: '/blog' },
    { key: 'contact', to: '/contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Palette className="w-8 h-8 text-indigo-600" />
              <span className="font-bold text-xl">Design Studio</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map(({ key, to }) => (
              <Link
                key={key}
                to={to}
                className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {t(`navigation.${key}`)}
              </Link>
            ))}
            <LanguageSwitch />
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(({ key, to }) => (
              <Link
                key={key}
                to={to}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {t(`navigation.${key}`)}
              </Link>
            ))}
            <div className="px-3 py-2">
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};