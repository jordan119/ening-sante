import { Hospital } from 'lucide-react';
import { motion } from 'framer-motion';

export function IdentiteSection() {
  return (
    <section className="bg-white py-24 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4 block">
            Notre Identité
          </span>
          <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-extrabold text-gray-900 mb-8 leading-tight tracking-tight">
            Plus qu'une structure, une architecture de santé
          </h2>
          <div className="space-y-6 text-gray-600 text-[14px] leading-relaxed">
            <p>
              "ENING SANTÉ n'est pas une clinique. Nous sommes un pôle d'ingénierie sanitaire et de management hospitalier. Là où d'autres soignent des symptômes, nous structurons des systèmes pour protéger votre institution."
            </p>
            <p>
              Filiale du Groupe MEBA&KOUA, ENING SANTÉ bénéficie de la solidité d'une holding multisectorielle. Cette synergie nous permet d'allier la rigueur médicale à la puissance de gestion des grandes organisations, garantissant à nos clients une fiabilité sans faille au Cameroun.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-[#f6fbf8] border border-emerald-100/50 rounded-3xl p-10 md:p-14 text-center shadow-sm relative overflow-hidden">
            <div className="w-20 h-20 mx-auto bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6">
              <Hospital size={40} className="text-gray-800" strokeWidth={1.5} />
            </div>
            
            <div className="space-y-2 mb-8 relative z-10">
              <h3 className="text-primary font-black text-[20px] tracking-wider uppercase">MEBA&KOUA</h3>
              <p className="text-gray-900 font-bold text-[16px]">ENING SANTÉ SARL</p>
              <p className="text-gray-500 text-[14px]">Pôle d'Ingénierie Sanitaire</p>
            </div>

            <div className="w-2/3 mx-auto h-px bg-emerald-100 mb-8"></div>

            <div className="space-y-1 relative z-10">
              <p className="text-gray-400 text-[12px]">Filiale du</p>
              <p className="text-gray-900 font-bold text-[14px]">Groupe MEBA&KOUA</p>
              <p className="text-gray-500 text-[12px]">Holding Multisectorielle</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
