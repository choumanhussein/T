import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from "../image/logo.png";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: "/", text: "Accueil" },
    { to: "/qui-suis-je", text: "Qui suis-je ?" },
    { to: "/a-propos", text: "À propos" },
    { to: "/services", text: "Services" },
    { to: "/bibliotheque", text: "Bibliothèque" },
    { to: "/blog", text: "Blog" },
    { to: "/contact", text: "Contact" }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'py-2 shadow-lg bg-gradient-to-r from-yellow-400/95 via-yellow-500/95 to-yellow-600/95 backdrop-blur-sm' 
      : 'py-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600'
    }`}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4">
        <Link 
          to="/" 
          className="relative group flex items-center text-white text-2xl sm:text-3xl font-bold mb-4 sm:mb-0 transition-transform duration-300 hover:scale-105"
        >
          <img 
            src={logo} 
            alt="Logo Marc Lawrence" 
            className="h-12 sm:h-16 mr-2 transition-transform duration-300 group-hover:rotate-6" 
          />
          <span className="relative">
            Marc Lawrence
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <nav className="relative">
          <ul className="flex flex-wrap sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 text-white text-lg justify-center">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="relative group px-2 py-1 transition-colors duration-300 whitespace-nowrap"
                  onMouseEnter={() => setActiveLink(link.to)}
                  onMouseLeave={() => setActiveLink('')}
                >
                  {link.text}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-200 transform origin-left transition-transform duration-300 ${
                    activeLink === link.to ? 'scale-x-100' : 'scale-x-0'
                  }`}></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden sm:flex space-x-6">
          {[
            { icon: faFacebook, href: "https://www.facebook.com/marc-lawrence-tarologue/" },
            { icon: faInstagram, href: "https://www.instagram.com/marc_lawrence_tarologue/" },
            { icon: faYoutube, href: "https://www.youtube.com/channel/marc-lawrence-tarologue" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-white transform transition-all duration-300 hover:scale-110 hover:text-yellow-200"
            >
              <FontAwesomeIcon 
                icon={social.icon} 
                size="2x" 
                className="hover:animate-bounce" 
              />
            </a>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .hover\\:animate-bounce:hover {
          animation: bounce 0.5s ease infinite;
        }
      `}</style>
    </header>
  );
}

export default Header;