import { motion } from 'framer-motion';
import { IdentiteSection } from '../components/sections/IdentiteSection';
import { HistoireSection } from '../components/sections/HistoireSection';
import { MissionVisionSection } from '../components/sections/MissionVisionSection';
import { DifferenceSection } from '../components/sections/DifferenceSection';

export function APropos() {
  return (
    <>
      {/* Hero Section À Propos */}
      <section className="bg-white px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center h-[30vh] min-h-[250px]">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">
              Le "cerveau" de l'ingénierie sanitaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold text-gray-900 tracking-tight">
              À Propos
            </h1>
          </motion.div>
        </div>
      </section>

      <IdentiteSection />
      <HistoireSection />
      <MissionVisionSection />
      <DifferenceSection />
    </>
  );
}
