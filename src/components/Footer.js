import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-400 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-bold text-xl">Marc Lawrence</h3>
            <p className="text-sm opacity-90">&copy; {currentYear} Tous droits réservés</p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-yellow-200 transition-colors duration-200">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-yellow-200 transition-colors duration-200">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-yellow-200 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-yellow-200 transition-colors duration-200">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-200 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://www.facebook.com/marc-lawrence-tarologue/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-yellow-200 transform transition-all duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a 
              href="https://www.instagram.com/marc_lawrence_tarologue/" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-yellow-200 transform transition-all duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a 
              href="https://www.youtube.com/channel/marc-lawrence-tarologue" 
              target="_blank" 
              rel="noreferrer"
              className="hover:text-yellow-200 transform transition-all duration-200 hover:scale-110"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
        </div>

        {/* Bottom Links - Separated with a subtle border */}
        <div className="mt-4 pt-4 border-t border-white/10 flex justify-center">
          <Link 
            to="/mentions-legales" 
            className="text-xs hover:text-yellow-200 transition-colors duration-200"
          >
            Mentions légales
          </Link>
        </div>
      </div>

      {/* Background blur effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-200 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-yellow-300 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-float-delayed" />
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: -3s;
        }
      `}</style>
    </footer>
  );
}

export default Footer;