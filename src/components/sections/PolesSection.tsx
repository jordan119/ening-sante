import { ShieldAlert, Settings, TrendingUp, Folder, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const polesData = [
  {
    id: "01",
    title: "Pôle Audit & Mise en Conformité",
    icon: <ShieldAlert size={32} className="text-gray-800" strokeWidth={1.5} />,
    items: [
      { title: "Audit de Conformité Réglementaire", desc: "Vérification systématique de l'agrément de vos services de santé et de la tenue des registres obligatoires (Loi n° 92/007)." },
      { title: "Élaboration du Document Unique (EVRP)", desc: "Inventaire réel des dangers physiques et psychosociaux. Nous ne nous contentons pas de lister, nous priorisons les actions." },
      { title: "Structuration du CHS", desc: "Accompagnement à la mise en place effective du Comité d'Hygiène et de Sécurité (élections, PV de réunions, suivi des recommandations)." },
      { title: "Audit Ergonomique", desc: "Analyse concrète des postes (caisses, bureaux, dépôts) pour réduire les douleurs chroniques et l'absentéisme de confort." }
    ]
  },
  {
    id: "02",
    title: "Management & Ingénierie Hospitalière",
    icon: <Settings size={32} className="text-gray-800" strokeWidth={1.5} />,
    items: [
      { title: "Assistance à Maîtrise d'Ouvrage (AMO)", desc: "Nous pilotons vos projets de création ou de rénovation d'infirmeries de site (choix du matériel, respect des normes, optimisation des flux)." },
      { title: "Audit de Performance des Soins", desc: "Analyse de vos dépenses santé et de la qualité des prestations fournies à vos agents pour stopper le gaspillage." },
      { title: "Gestion Déléguée (Outsourcing)", desc: "Direction opérationnelle de vos unités de soins. Nous gérons le personnel et les protocoles, vous vous concentrez sur votre métier." }
    ]
  },
  {
    id: "03",
    title: "Prévention & Capital Humain",
    icon: <TrendingUp size={32} className="text-gray-800" strokeWidth={1.5} />,
    items: [
      { title: "Campagnes de Dépistage Ciblées", desc: "Détection précoce des pathologies lourdes (HTA, Diabète) pour éviter les crises cardiovasculaires en plein bureau." },
      { title: "Ingénierie de Formation", desc: "Séminaires pratiques pour vos cadres et soignants sur le secourisme, l'hygiène et la gestion du stress en milieu professionnel." }
    ]
  },
  {
    id: "04",
    title: "Suivi & Reporting — Le \"Digital\" Pragmatique",
    icon: <Folder size={32} className="text-gray-800" strokeWidth={1.5} />,
    items: [
      { title: "Centralisation des Rapports", desc: "Chaque intervention donne lieu à un rapport d'audit clair (format PDF interactif), archivé et accessible sur demande pour vos contrôles." },
      { title: "Tableau de Bord de Conformité", desc: "Un état des lieux visuel (Rouge/Orange/Vert) de votre situation sanitaire pour une prise de décision rapide par la Direction Générale." },
      { title: "Confidentialité garantie", desc: "Archivage sécurisé respectant scrupuleusement le secret médical et les normes de protection des données." }
    ]
  }
];

export function PolesSection() {
  return (
    <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10 lg:space-y-12">
        {polesData.map((pole, index) => (
          <motion.div
            key={pole.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="border border-gray-200 rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
          >
            {/* Header */}
            <div className="bg-[#f6fbf8] p-6 sm:px-8 sm:py-7 flex items-center gap-5 border-b border-gray-200">
              <div className="shrink-0 bg-white shadow-sm p-3 rounded-xl border border-gray-100">
                {pole.icon}
              </div>
              <div>
                <span className="text-primary font-bold text-[11px] tracking-widest uppercase mb-1.5 block">
                  Pôle {pole.id}
                </span>
                <h2 className="text-xl md:text-[22px] font-extrabold text-gray-900 tracking-tight">
                  {pole.title}
                </h2>
              </div>
            </div>

            {/* Body */}
            <div className="flex flex-col">
              {pole.items.map((item, i) => (
                <div key={i} className={`p-6 sm:px-8 sm:py-6 ${i !== pole.items.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex gap-4">
                    <div className="shrink-0 mt-1.5">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-sm shadow-primary/30"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-[15px] mb-1.5">{item.title}</h3>
                      <p className="text-gray-500 text-[14px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="bg-[#f6fbf8] p-5 sm:px-8 sm:py-5 border-t border-gray-200 flex justify-end">
              <button className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary-hover transition-colors shadow-md shadow-primary/20 group">
                <Zap size={16} fill="currentColor" className="group-hover:scale-110 transition-transform" />
                Demander un devis pour ce pôle
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
