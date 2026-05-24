import { Landmark, Building2, Factory, Scale, Hospital } from 'lucide-react';
import { motion } from 'framer-motion';

export function SecteursSection() {
  const secteurs = [
    {
      icon: <Landmark size={24} className="text-gray-800" strokeWidth={1.5} />,
      title: "Institutions Financières",
      subtitle: "Gestion du stress & Ergonomie des agences"
    },
    {
      icon: <Building2 size={24} className="text-gray-800" strokeWidth={1.5} />,
      title: "Administrations Publiques",
      subtitle: "Conformité réglementaire & Audit CHS"
    },
    {
      icon: <Factory size={24} className="text-gray-800" strokeWidth={1.5} />,
      title: "Industries & BTP",
      subtitle: "HSE & Gestion déléguée des infirmeries de site"
    },
    {
      icon: <Scale size={24} className="text-gray-800" strokeWidth={1.5} />,
      title: "Cabinets Professionnels",
      subtitle: "Continuité d'activité & Prévention du burn-out"
    },
    {
      icon: <Hospital size={24} className="text-gray-800" strokeWidth={1.5} />,
      title: "Cliniques Privées",
      subtitle: "Optimisation du plateau technique & Management"
    }
  ];

  return (
    <section className="bg-neutral-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center min-h-[40vh] md:max-h-[50vh]">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-mint-leaf-600 font-bold text-xs tracking-widest uppercase mb-3 block">
            Secteurs d'intervention
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-[32px] font-extrabold text-gray-900 tracking-tight">
            Expertise adaptée à vos enjeux sectoriels
          </h2>
        </div>

        {/* Chips */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {secteurs.slice(0, 3).map((secteur, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#f0fdf4] border border-emerald-100/50 rounded-2xl p-4 flex items-center gap-4 w-full sm:w-[340px] md:w-[320px] lg:w-[350px] hover:shadow-md transition-shadow"
              >
                <div className="shrink-0">{secteur.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px]">{secteur.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{secteur.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 w-full">
            {secteurs.slice(3, 5).map((secteur, idx) => (
              <motion.div
                key={idx + 3}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx + 3) * 0.1 }}
                className="bg-[#f0fdf4] border border-emerald-100/50 rounded-2xl p-4 flex items-center gap-4 w-full sm:w-[340px] md:w-[320px] lg:w-[350px] hover:shadow-md transition-shadow"
              >
                <div className="shrink-0">{secteur.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-[15px]">{secteur.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5 leading-snug">{secteur.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
