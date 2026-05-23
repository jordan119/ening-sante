import { AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export function ConstatSection() {
  return (
    <section className="bg-[#151b19] min-h-[40vh] py-12 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-700/50 bg-gray-800/30 text-[10px] sm:text-[11px] font-bold tracking-widest uppercase mb-8"
        >
          <AlertTriangle size={16} className="text-yellow-500" />
          <span className="text-gray-300">Le constat sans langue de bois</span>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-xl md:text-[22px] lg:text-2xl leading-relaxed md:leading-relaxed lg:leading-loose text-gray-300 max-w-4xl mx-auto">
            "Au Cameroun, la santé en entreprise est trop souvent gérée dans <span className="font-bold text-white">l'improvisation.</span> Absence de prévention, non-conformité réglementaire et coûts invisibles de l'absentéisme pèsent sur vos bilans. <span className="font-bold text-emerald-500">ENING SANTÉ transforme cette gestion réactive en une stratégie de performance organisée.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
