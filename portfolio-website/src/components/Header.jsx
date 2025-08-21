import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Globe, ArrowRight, User, FolderOpen, Award, MessageCircle } from 'lucide-react';


const Header = ({ darkMode, toggleDarkMode, currentPage, setCurrentPage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigateToPage = (page) => {
        setCurrentPage(page);
        setIsMenuOpen(false);
    };

    const pages = [
        { id: 'home', name: 'Home', icon: User },
        { id: 'about', name: 'About', icon: User },
        { id: 'projects', name: 'Projects', icon: FolderOpen },
        { id: 'skills', name: 'Skills', icon: Award },
        { id: 'contact', name: 'Contact', icon: MessageCircle }
    ];

    return (
    <nav className={`fixed top-0 w-full z-50 backdrop-blur-md ${
      darkMode ? 'bg-gray-900/80 border-gray-700' : 'bg-white/80 border-gray-200'
    } border-b transition-all duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <button 
            onClick={() => navigateToPage('home')}
            className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Terrence Mbelenga
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => navigateToPage(page.id)}
                className={`hover:text-purple-500 transition-colors duration-200 font-medium ${
                  currentPage === page.id ? 'text-purple-500' : ''
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-all duration-200 ${
                darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`md:hidden ${darkMode ? 'bg-gray-900' : 'bg-white'} border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="px-4 py-2 space-y-2">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <button
                  key={page.id}
                  onClick={() => navigateToPage(page.id)}
                  className={`flex items-center w-full text-left py-3 px-2 rounded-lg hover:text-purple-500 transition-colors ${
                    currentPage === page.id ? 'text-purple-500 bg-purple-500/10' : ''
                  }`}
                >
                  <Icon size={18} className="mr-3" />
                  {page.name}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};
export default Header;