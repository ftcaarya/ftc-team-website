import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`nav-tech ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold flex items-center">
            <span className="text-accent mr-2"><i className="fas fa-bolt"></i></span>
            <span className="font-rajdhani">CIRCUIT BREAKERS</span>
            <span className="ml-2 text-xs bg-accent text-dark px-2 py-1 rounded">21829</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#robot" className="hover:text-accent transition-colors">Robot</a>
            <a href="#competitions" className="hover:text-accent transition-colors">Competitions</a>
            <a href="#team" className="hover:text-accent transition-colors">Team</a>
            <a href="#sponsors" className="hover:text-accent transition-colors">Sponsors</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden focus:outline-none">
            <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden mt-4 bg-dark bg-opacity-95 rounded-md p-4 tech-border`}>
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="hover:text-accent transition-colors">Home</a>
            <a href="#about" className="hover:text-accent transition-colors">About</a>
            <a href="#robot" className="hover:text-accent transition-colors">Robot</a>
            <a href="#competitions" className="hover:text-accent transition-colors">Competitions</a>
            <a href="#team" className="hover:text-accent transition-colors">Team</a>
            <a href="#sponsors" className="hover:text-accent transition-colors">Sponsors</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 