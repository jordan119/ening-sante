import { Microscope, Building, FileBarChart } from 'lucide-react';
import { motion } from 'framer-motion';

export function PourquoiSection() {
  const raisons = [
    {
      icon: <Microscope size={24} className="text-primary" />,
      title: "Expertise Hybride",
      description: "La seule structure alliant pratique clinique et Haute Gestion Hospitalière au Cameroun."
    },
    {
      icon: <Building size={24} className="text-primary" />,
      title: "Rigueur du Groupe",
      description: "Une filiale de la Holding MEBA&KOUA, gage de solidité financière et de gouvernance conforme aux normes OHADA."
    },
    {
      icon: <FileBarChart size={24} className="text-primary" />,
      title: "Reporting Pragmatique",
      description: "Pas de gadgets. Des rapports d'audit PDF sécurisés et des indicateurs de performance (KPI) clairs pour votre Direction Générale."
    }
  ];

  return (
    <section className="bg-[#f2fcf6] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4 block">
            Pourquoi Ening Santé ?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[40px] font-extrabold text-gray-900 leading-tight">
            "Nous ne faisons pas seulement de la médecine. <br className="hidden md:block" />
            <span className="text-primary">Nous structurons la santé.</span>"
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {raisons.map((raison, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6">
                {raison.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {raison.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                {raison.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
