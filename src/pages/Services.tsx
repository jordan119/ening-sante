import { motion } from 'framer-motion';
import { PolesSection } from '../components/sections/PolesSection';

export function Services() {
  return (
    <>
      {/* Hero Section Services */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center min-h-[40vh] md:h-[60vh] md:max-h-[600px]">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">
              L'expertise de terrain
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Nos Services
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto">
              Le secteur de la santé au travail en Afrique centrale souffre d'un manque de structuration et de suivi. ENING SANTÉ intervient pour transformer vos obligations légales en outils de pilotage, <strong className="font-bold text-gray-700">en passant d'une médecine improvisée à une médecine organisée.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      <PolesSection />
    </>
  );
}
