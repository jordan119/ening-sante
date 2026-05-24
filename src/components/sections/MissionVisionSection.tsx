import { Target, Telescope } from 'lucide-react';
import { motion } from 'framer-motion';

export function MissionVisionSection() {
  return (
    <section className="bg-neutral-white pb-24 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-neutral-white border border-gray-100 hover:border-emerald-200 transition-colors rounded-[24px] p-8 md:p-10 shadow-sm"
        >
          <div className="mb-6">
            <Target size={36} className="text-[#f75e5e]" strokeWidth={2} />
          </div>
          <span className="text-[#10b981] font-bold text-[11px] tracking-widest uppercase mb-3 block">
            Notre Mission
          </span>
          <h3 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-5 leading-snug">
            Sécuriser la continuité de vos activités
          </h3>
          <p className="text-slate-500 text-[16px] mb-5 leading-relaxed">
            "Transformer la gestion sanitaire réactive en un levier de croissance durable."
          </p>
          <p className="text-gray-500 text-[14.5px] leading-relaxed">
            Notre mission est de fournir aux décideurs — Banques, Administrations, Industries — les outils d'audit, de conformité et de management nécessaires pour éliminer les risques juridiques et les coûts invisibles liés à une santé mal organisée.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#f6fcf8] border border-emerald-50 rounded-[24px] p-8 md:p-10 shadow-sm"
        >
          <div className="mb-6">
            <Telescope size={36} className="text-gray-800" strokeWidth={2} />
          </div>
          <span className="text-[#10b981] font-bold text-[11px] tracking-widest uppercase mb-3 block">
            Notre Vision
          </span>
          <h3 className="text-[20px] md:text-[22px] font-extrabold text-gray-900 mb-5 leading-snug">
            Devenir le pôle de référence en Afrique Centrale
          </h3>
          <p className="text-slate-500 text-[16px] mb-5 leading-relaxed">
            "Bâtir un écosystème où la santé est pilotée comme un actif stratégique."
          </p>
          <p className="text-gray-500 text-[14.5px] leading-relaxed">
            Nous aspirons à redéfinir les standards de l'ingénierie hospitalière et sanitaire au Cameroun. Notre vision est celle d'un environnement professionnel où chaque institution dispose d'un "bouclier sanitaire" robuste, digitalisé et conforme aux exigences internationales et aux normes OHADA.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
