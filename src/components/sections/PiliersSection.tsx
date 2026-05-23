import { ShieldAlert, Settings, TrendingUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';

export function PiliersSection() {
  const piliers = [
    {
      icon: <ShieldAlert size={32} strokeWidth={1.5} />,
      title: "Sécurité & Conformité Légale",
      probleme: "Risques pénaux et amendes de l'Inspection du Travail (Loi 92/007).",
      solution: "Audit de conformité, mise en place du CHS et du Document Unique.",
      resultat: "Une sérénité juridique totale."
    },
    {
      icon: <Settings size={32} strokeWidth={1.5} />,
      title: "Ingénierie & Management des Soins",
      probleme: "Gaspillage des ressources santé et infirmeries de site mal gérées.",
      solution: "Audit de performance, gestion déléguée (Outsourcing) et conseil en investissement biomédical (Master 2).",
      resultat: "Une rentabilité optimisée de vos infrastructures."
    },
    {
      icon: <TrendingUp size={32} strokeWidth={1.5} />,
      title: "Protection du Capital Humain",
      probleme: "AVC en plein bureau, stress chronique et baisse de productivité.",
      solution: "Dépistages ciblés (HTA/Diabète) et prévention des risques psychosociaux.",
      resultat: "Des équipes opérationnelles à 100%."
    }
  ];

  return (
    <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-3 block">
            Notre approche
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
            3 Piliers d'Intervention
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            De la détection du problème à la mise en œuvre de la solution
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {piliers.map((pilier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:shadow-black/5 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="mb-6 text-gray-800 group-hover:scale-110 transition-transform origin-left">
                {pilier.icon}
              </div>

              {/* Title */}
              <h3 className="text-[19px] font-bold text-gray-900 mb-6 leading-snug">
                {pilier.title}
              </h3>

              {/* Problème */}
              <div className="bg-red-50/50 border border-red-100 rounded-xl p-4 mb-4">
                <h4 className="text-[11px] font-bold text-red-500 uppercase tracking-widest mb-2">
                  Problème
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {pilier.probleme}
                </p>
              </div>

              {/* Solution */}
              <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-4 mb-6">
                <h4 className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest mb-2">
                  Solution
                </h4>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {pilier.solution}
                </p>
              </div>

              {/* Spacer pour pousser le footer vers le bas */}
              <div className="flex-grow"></div>

              {/* Ligne de séparation */}
              <div className="w-full h-px bg-gray-100 mb-4"></div>

              {/* Résultat */}
              <div className="flex items-start gap-2 text-primary font-semibold text-sm">
                <Check size={18} className="mt-0.5 shrink-0" strokeWidth={2.5} />
                <span>{pilier.resultat}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
