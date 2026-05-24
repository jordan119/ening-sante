import { motion } from 'framer-motion';
import { CiblesAccordion } from '../components/sections/CiblesAccordion';

export function Cibles() {
  return (
    <>
      {/* Hero Section Cibles */}
      <section className="bg-neutral-white py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center min-h-[40vh] md:h-[50vh] md:max-h-[500px]">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-mint-leaf-600 font-bold text-xs tracking-widest uppercase mb-4 block">
              Une expertise adaptée à vos enjeux
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 mb-6 tracking-tight">
              Nos Cibles
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
              Chaque secteur a ses risques spécifiques. ENING SANTÉ a développé des réponses adaptées à chaque contexte.
            </p>
          </motion.div>
        </div>
      </section>

      <CiblesAccordion />
    </>
  );
}
