import { ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConstatSection } from '../components/sections/ConstatSection';
import { PiliersSection } from '../components/sections/PiliersSection';
import { PourquoiSection } from '../components/sections/PourquoiSection';
import { SecteursSection } from '../components/sections/SecteursSection';

export function Home() {
  return (
    <>
      <main className="h-[calc(100svh-80px)] min-h-[480px] flex flex-col justify-center items-center w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto flex flex-col items-center text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-primary px-3 py-1.5 rounded-full text-[11px] font-semibold tracking-wide uppercase mb-5">
              <Activity size={16} />
              Ingénierie sanitaire & Management hospitalier
            </div>

            <h1 className="text-4xl lg:text-[56px] font-extrabold text-text-main leading-[1.1] tracking-tight mb-4">
              MEBA&KOUA <br/>
              <span className="text-primary">ENING SANTÉ</span>
            </h1>

            <p className="text-lg lg:text-xl font-semibold text-text-main mb-3 leading-snug">
              Sécurisez votre institution et optimisez la performance de votre capital humain.
            </p>
            
            <p className="text-base text-text-muted mb-6 max-w-2xl mx-auto">
              Votre partenaire stratégique en santé au travail et management hospitalier en Afrique Centrale. Filiale du Groupe MEBA&KOUA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-base hover:bg-primary-hover transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-3 group">
                <ShieldCheck size={20} className="group-hover:scale-110 transition-transform" />
                Demander un Diagnostic Flash (48h)
              </button>
              
              <button className="bg-white text-primary border border-gray-200 px-6 py-3 rounded-xl font-semibold text-base hover:border-primary/30 hover:bg-accent/30 transition-all flex items-center justify-center gap-2 group">
                Consulter nos pôles d'expertise
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </main>

      <ConstatSection />
      <PiliersSection />
      <PourquoiSection />
      <SecteursSection />
    </>
  );
}
