import { Brain, Eye, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function DifferenceSection() {
  const differences = [
    {
      icon: <Brain size={24} className="text-[#10b981]" strokeWidth={2} />,
      title: "L'Approche \"Cerveau\"",
      description: "Nous n'attendons pas que vos agents soient malades. Nous concevons les systèmes qui évitent qu'ils le deviennent."
    },
    {
      icon: <Eye size={24} className="text-[#10b981]" strokeWidth={2} />,
      title: "Le Double Regard",
      description: "Nous sommes la seule structure capable de dialoguer avec vos médecins de site pour la qualité des soins, et avec votre Direction Financière pour l'optimisation des coûts."
    },
    {
      icon: <Target size={24} className="text-[#10b981]" strokeWidth={2} />,
      title: "La Culture du Résultat",
      description: "Pour nous, un audit n'est réussi que s'il se traduit par une baisse de votre taux d'absentéisme et une mise en conformité totale face à l'Inspection du Travail."
    },
    {
      icon: <Users size={24} className="text-[#10b981]" strokeWidth={2} />,
      title: "L'Agilité Commando",
      description: "Grâce à notre réseau d'experts consultants (HSE, Ergonomes, Spécialistes), nous mobilisons la meilleure compétence pour chaque mission, sans les lourdeurs d'une structure hospitalière classique."
    }
  ];

  return (
    <section className="bg-white pb-24 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold text-[10px] tracking-widest uppercase mb-4 block">
              Ce qui nous distingue
            </span>
            <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-extrabold text-gray-900 tracking-tight">
              Pourquoi sommes-nous différents ?
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differences.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-gray-100 hover:border-emerald-200 transition-colors rounded-[24px] p-6 lg:p-8 shadow-sm flex flex-col sm:flex-row gap-5 items-start"
            >
              <div className="bg-[#f0f9f4] p-4 rounded-xl shrink-0">
                {diff.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-[16px] md:text-[18px] font-bold text-gray-900">
                  {diff.title}
                </h3>
                <p className="text-slate-500 text-[13.5px] md:text-[14.5px] leading-relaxed">
                  {diff.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
