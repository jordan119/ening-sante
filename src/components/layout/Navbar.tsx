import { useState } from 'react';
import { ShieldCheck, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const getLinkClass = (path: string) => {
    return location.pathname === path
      ? "bg-mint-leaf-100 text-mint-leaf-600 px-4 py-2 rounded-full font-medium text-sm transition-colors"
      : "text-dark-cyan-800 hover:text-mint-leaf-600 px-4 py-2 font-medium text-sm transition-colors";
  };

  const getMobileLinkClass = (path: string) => {
    return location.pathname === path
      ? "bg-mint-leaf-100 text-mint-leaf-600 px-4 py-3 rounded-xl font-medium text-base"
      : "text-dark-cyan-800 hover:text-mint-leaf-600 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium text-base";
  };

  return (
    <nav className="border-b border-gray-100 bg-neutral-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo area */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-mint-leaf-600 text-white p-1.5 rounded-lg">
              <ShieldCheck size={22} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight tracking-tight text-gray-900">MEBA&KOUA</span>
              <span className="text-mint-leaf-600 font-extrabold text-lg leading-tight tracking-tight">ENING SANTÉ</span>
            </div>
          </Link>
          
          {/* Nav links (Desktop) */}
          <div className="hidden md:flex space-x-2 lg:space-x-4">
            <Link to="/" className={getLinkClass("/")}>Accueil</Link>
            <Link to="/services" className={getLinkClass("/services")}>Nos Services</Link>
            <Link to="/cibles" className={getLinkClass("/cibles")}>Nos Cibles</Link>
            <Link to="/a-propos" className={getLinkClass("/a-propos")}>À Propos</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </div>

          {/* CTA Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/espace-client" className="text-mint-leaf-600 font-medium text-sm border border-gray-200 px-5 py-2.5 rounded-full hover:bg-gray-50 transition-colors">
              Espace Client
            </Link>
            <Link to="/diagnostic" className="bg-coral-apricot-600 text-white font-medium text-sm px-6 py-2.5 rounded-full hover:bg-coral-apricot-700 transition-colors shadow-lg shadow-coral-apricot-600/20">
              Diagnostic Flash
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-mint-leaf-600 p-2 focus:outline-none"
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown & Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay background */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="md:hidden fixed inset-0 top-20 bg-black/40 backdrop-blur-sm z-40"
            />
            
            {/* Menu Dropdown */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-20 left-0 right-0 border-t border-gray-100 bg-neutral-white overflow-hidden z-50 shadow-2xl"
            >
            <div className="px-4 pt-4 pb-6 space-y-2 flex flex-col bg-neutral-white">
              <Link to="/" onClick={toggleMenu} className={getMobileLinkClass("/")}>Accueil</Link>
              <Link to="/services" onClick={toggleMenu} className={getMobileLinkClass("/services")}>Nos Services</Link>
              <Link to="/cibles" onClick={toggleMenu} className={getMobileLinkClass("/cibles")}>Nos Cibles</Link>
              <Link to="/a-propos" onClick={toggleMenu} className={getMobileLinkClass("/a-propos")}>À Propos</Link>
              <Link to="/contact" onClick={toggleMenu} className={getMobileLinkClass("/contact")}>Contact</Link>
              
              <div className="h-px bg-gray-100 w-full my-4"></div>
              
              <div className="flex flex-col gap-3">
                <Link to="/espace-client" onClick={toggleMenu} className="text-mint-leaf-600 text-center font-medium border border-gray-200 px-5 py-3 rounded-xl hover:bg-gray-50">
                  Espace Client
                </Link>
                <Link to="/diagnostic" onClick={toggleMenu} className="bg-coral-apricot-600 text-center text-white font-medium px-6 py-3 rounded-xl hover:bg-coral-apricot-700 shadow-lg shadow-coral-apricot-600/20">
                  Demander un Diagnostic Flash
                </Link>
              </div>
            </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
