import { useState } from 'react';
import { Landmark, Building2, Factory, Scale, Hospital, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type CibleContent = {
  problemes: string[];
  impacts: string[];
  solutions: string[];
};

const ciblesData: { id: string; title: string; icon: JSX.Element; content: CibleContent | null }[] = [
  {
    id: "finance",
    title: "Institutions Financières & Banques",
    icon: <Landmark size={24} className="text-gray-800" strokeWidth={1.5} />,
    content: {
      problemes: [
        "Sédentarité extrême et mauvaise ergonomie des postes (caisses et bureaux).",
        "Charge mentale élevée et fatigue décisionnelle des cadres.",
        "Forte exposition au public (risques sanitaires et stress relationnel)."
      ],
      impacts: [
        "Multiplication des Troubles Musculosquelettiques (douleurs dos/nuque).",
        "Baisse de la vigilance et erreurs opérationnelles coûteuses.",
        "Absentéisme de courte durée désorganisant les agences."
      ],
      solutions: [
        "Audit Ergonomique 360° : Optimisation physique des espaces de travail.",
        "Programme \"Haute Performance\" : Gestion du stress et dépistage cardiovasculaire."
      ]
    }
  },
  {
    id: "admin",
    title: "Administrations Publiques & Grandes Institutions",
    icon: <Building2 size={24} className="text-gray-800" strokeWidth={1.5} />,
    content: {
      problemes: [
        "Effectifs pléthoriques difficiles à suivre médicalement.",
        "Infrastructures de santé internes (infirmeries) souvent obsolètes.",
        "Lourdeur des procédures de mise en conformité."
      ],
      impacts: [
        "Risques juridiques et pénaux pour le dirigeant (Loi 92/007).",
        "Coût exorbitant de la couverture santé par manque de prévention.",
        "Climat social dégradé lié à l'insécurité sanitaire."
      ],
      solutions: [
        "Mise en Conformité Légale : Structuration du CHS et du Document Unique.",
        "AMO Modernisation : Réhabilitation technique de vos centres de santé."
      ]
    }
  },
  {
    id: "industry",
    title: "Industries, BTP & Secteur Minier",
    icon: <Factory size={24} className="text-gray-800" strokeWidth={1.5} />,
    content: {
      problemes: [
        "Environnements hostiles (poussières, bruit, engins lourds).",
        "Éloignement géographique des structures de soins de référence.",
        "Difficulté à recruter et fidéliser du personnel soignant qualifié sur site."
      ],
      impacts: [
        "Accidents de travail graves et arrêts de chantiers immédiats.",
        "Maladies professionnelles chroniques (problèmes respiratoires/auditifs).",
        "Lourdes sanctions financières lors des inspections de sécurité."
      ],
      solutions: [
        "Gestion Déléguée (Outsourcing) : Direction complète de vos infirmeries de site.",
        "Audit HSE Terrain : Cartographie réelle des risques et plans de prévention."
      ]
    }
  },
  {
    id: "pro",
    title: "Cabinets Professionnels (Avocats, Notaires, Experts-Comptables)",
    icon: <Scale size={24} className="text-gray-800" strokeWidth={1.5} />,
    content: {
      problemes: [
        "Horaires de travail étendus et manque de coupures réelles.",
        "Pression sur les délais et enjeux de responsabilité civile élevés.",
        "Culture du \"présentéisme\" (travailler même en étant malade)."
      ],
      impacts: [
        "Risque élevé de burn-out et d'accidents vasculaires (AVC/HTA).",
        "Fuite des talents vers la concurrence par manque de bien-être.",
        "Dossiers critiques bloqués par l'absence d'un associé clé."
      ],
      solutions: [
        "Check-up Santé Dirigeant : Prévention sur-mesure pour les décideurs.",
        "Audit de Santé Organisationnelle : Équilibrer performance et bien-être."
      ]
    }
  },
  {
    id: "health",
    title: "Établissements de Soins & Cliniques Privées",
    icon: <Hospital size={24} className="text-gray-800" strokeWidth={1.5} />,
    content: {
      problemes: [
        "Manque de pilotage administratif et financier des soins.",
        "Obsolescence ou mauvais entretien du plateau technique.",
        "Risques biologiques (AES) mal maîtrisés pour le personnel."
      ],
      impacts: [
        "Gaspillage des consommables et baisse de la rentabilité.",
        "Démotivation du personnel soignant et turn-over élevé.",
        "Risque de retrait d'agrément lors des contrôles ministériels."
      ],
      solutions: [
        "Ingénierie Hospitalière : Audit de performance et optimisation des flux.",
        "Coaching Managérial : Accompagnement des promoteurs (Médecin-Manager)."
      ]
    }
  }
];

export function CiblesAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-4">
        {ciblesData.map((cible, index) => {
          const isOpen = openId === cible.id;
          
          return (
            <motion.div
              key={cible.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/30 shadow-md ring-1 ring-primary/10' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
            >
              <button
                onClick={() => toggleAccordion(cible.id)}
                className="w-full flex items-center justify-between p-5 sm:p-6 bg-white focus:outline-none"
              >
                <div className="flex items-center gap-5 text-left">
                  <div className="shrink-0 bg-[#f6fbf8] p-3 rounded-xl">
                    {cible.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base sm:text-[17px]">
                    {cible.title}
                  </h3>
                </div>
                <div className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} className="text-gray-400" />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    {cible.content ? (
                      <div className="border-t border-gray-100 bg-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {/* Problèmes */}
                        <div className="p-6">
                          <h4 className="text-[#f75e5e] font-bold text-[13px] tracking-wider uppercase mb-5">Problèmes</h4>
                          <ul className="space-y-4">
                            {cible.content.problemes.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#f75e5e] border-b-[4px] border-b-transparent mt-1.5 shrink-0"></div>
                                <span className="text-gray-700 text-[14.5px] leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Impacts */}
                        <div className="p-6">
                          <h4 className="text-[#e2932b] font-bold text-[13px] tracking-wider uppercase mb-5">Impacts</h4>
                          <ul className="space-y-4">
                            {cible.content.impacts.map((item, i) => (
                              <li key={i} className="flex gap-3 items-start">
                                <div className="w-0 h-0 border-t-[4px] border-t-transparent border-l-[6px] border-l-[#e2932b] border-b-[4px] border-b-transparent mt-1.5 shrink-0"></div>
                                <span className="text-gray-700 text-[14.5px] leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {/* Solutions */}
                        <div className="p-6 bg-[#f9fcf9] md:bg-transparent">
                          <h4 className="text-primary font-bold text-[13px] tracking-wider uppercase mb-5">Solutions Ening Santé</h4>
                          <ul className="space-y-4">
                            {cible.content.solutions.map((item, i) => (
                              <li key={i} className="flex gap-2.5 items-start">
                                <Check size={18} className="text-primary shrink-0 mt-0.5" strokeWidth={2.5} />
                                <span className="text-gray-800 text-[14.5px] leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ) : (
                      <div className="p-5 sm:p-6 border-t border-gray-100 bg-gray-50/50">
                        <p className="text-gray-500 italic text-[15px]">En attente du contenu...</p>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
