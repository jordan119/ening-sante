import { motion } from 'framer-motion';
import { 
  Zap, MapPin, Phone, Mail, Clock, MessageCircle, 
  ShieldCheck, FileText, CheckCircle2 
} from 'lucide-react';

export function Contact() {
  return (
    <div className="bg-white min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-white py-16 px-6 sm:px-10 lg:px-16 flex flex-col justify-center items-center text-center">
        <div className="max-w-3xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#10b981] font-bold text-[10px] tracking-widest uppercase mb-4 block">
              Passez à l'action
            </span>
            <h1 className="text-[28px] md:text-[34px] lg:text-[40px] font-extrabold text-gray-900 tracking-tight mb-4">
              Contact & Diagnostic Flash
            </h1>
            <p className="text-gray-500 text-[14.5px] leading-relaxed max-w-2xl mx-auto">
              <strong className="text-gray-700">Votre institution est-elle réellement protégée ?</strong> Ne laissez pas l'improvisation sanitaire menacer votre performance et votre responsabilité juridique.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column (Forms) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            
            {/* Diagnostic Flash Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white border border-gray-200 rounded-[24px] overflow-hidden shadow-sm"
              id="diagnostic-flash"
            >
              {/* Header */}
              <div className="bg-[#155e42] p-6 text-white flex items-center gap-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Zap size={24} className="text-white" />
                </div>
                <div>
                  <h2 className="text-white text-[20px] font-bold">Diagnostic Flash — 48h</h2>
                  <p className="text-emerald-100 text-[13px]">Gratuit • Confidentiel • Sans engagement</p>
                </div>
              </div>

              <div className="p-6 md:p-8">
                {/* 3 boxes */}
                <div className="mb-8">
                  <h3 className="text-gray-900 font-bold text-[15px] mb-4">Pourquoi demander votre Diagnostic Flash ?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="border border-emerald-100 bg-[#f4fbf7] p-4 rounded-xl text-center">
                      <h4 className="text-[#10b981] font-bold text-[11px] uppercase mb-1">Rapidité</h4>
                      <p className="text-gray-500 text-[12px] leading-tight">Une analyse concise de votre situation sanitaire en 48 heures ouvrées.</p>
                    </div>
                    <div className="border border-emerald-100 bg-[#f4fbf7] p-4 rounded-xl text-center">
                      <h4 className="text-[#10b981] font-bold text-[11px] uppercase mb-1">Confidentialité</h4>
                      <p className="text-gray-500 text-[12px] leading-tight">Un échange direct sous le sceau du secret médical et professionnel.</p>
                    </div>
                    <div className="border border-emerald-100 bg-[#f4fbf7] p-4 rounded-xl text-center">
                      <h4 className="text-[#10b981] font-bold text-[11px] uppercase mb-1">Clarté</h4>
                      <p className="text-gray-500 text-[12px] leading-tight">Un pré-rapport identifiant vos 3 risques majeurs (Légaux, Humains, Organisationnels).</p>
                    </div>
                  </div>
                </div>

                {/* Form fields */}
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Nom *</label>
                      <input type="text" placeholder="Votre nom" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Entreprise *</label>
                      <input type="text" placeholder="Nom de votre institution" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Ville</label>
                      <input type="text" placeholder="Ex: Yaoundé" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Nombre d'employés</label>
                      <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors">
                        <option>Sélectionner</option>
                        <option>1 - 50</option>
                        <option>51 - 200</option>
                        <option>201 - 500</option>
                        <option>500+</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Problématique principale *</label>
                    <textarea rows={3} placeholder="Ex : Inspection du travail prévue, non-conformité CHS, absentéisme élevé..." className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors resize-none"></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-[#155e42] hover:bg-[#0f4a33] text-white font-bold text-[14.5px] py-3.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                    <Zap size={18} />
                    Réserver mon Diagnostic Flash Gratuit
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Classic Contact Form */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-[24px] p-6 md:p-8 shadow-sm"
            >
              <div className="mb-6">
                <h3 className="text-gray-900 font-extrabold text-[18px] mb-1">Formulaire de Contact Classique</h3>
                <p className="text-gray-500 text-[13px]">Pour les demandes spécifiques (Appels d'offres, Partenariats).</p>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Nom *</label>
                    <input type="text" placeholder="Votre nom" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Email *</label>
                    <input type="email" placeholder="vous@entreprise.com" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Téléphone</label>
                    <input type="tel" placeholder="+237 6XX XXX XXX" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Entreprise</label>
                    <input type="text" placeholder="Nom de votre institution" className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Objet de la demande *</label>
                  <select className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors">
                    <option>Sélectionner un objet</option>
                    <option>Appel d'offres</option>
                    <option>Partenariat</option>
                    <option>Demande d'information</option>
                    <option>Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 text-[13px] font-bold mb-1.5">Message *</label>
                  <textarea rows={4} placeholder="Décrivez votre besoin..." className="w-full bg-gray-50 border border-gray-200 text-gray-800 text-[14px] rounded-lg focus:ring-[#10b981] focus:border-[#10b981] block p-2.5 outline-none transition-colors resize-none"></textarea>
                </div>
                
                <button type="button" className="w-full bg-white hover:bg-gray-50 text-[#155e42] border border-[#155e42] font-bold text-[14.5px] py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                  Envoyer ma demande
                </button>
              </form>
            </motion.div>

          </div>

          {/* Right Column (Info) */}
          <div className="lg:col-span-5 xl:col-span-4 space-y-6">
            
            {/* Contact Info Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#f2faf5] border border-emerald-100 rounded-[24px] p-6 shadow-sm"
            >
              <h3 className="text-gray-900 font-extrabold text-[16px] mb-1">Coordonnées & Accès Direct</h3>
              <p className="text-gray-500 text-[12px] italic mb-6">Parce qu'au Cameroun, le relationnel et la réactivité priment.</p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13.5px]">Siège Social</h4>
                    <p className="text-gray-500 text-[13px]">Groupe MEBA&KOUA<br/>Ekié – Complexe Beac<br/>Yaoundé, Cameroun</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone size={18} className="text-red-600 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13.5px]">Ligne Directe (WhatsApp Business)</h4>
                    <p className="text-primary font-bold text-[14px] mt-0.5">+237 622 114 428</p>
                    <p className="text-gray-400 text-[11px] mt-0.5">Réponse prioritaire pour les urgences de conformité.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13.5px]">Email Institutionnel</h4>
                    <a href="mailto:contact@mebakoua-sante.com" className="text-primary text-[13px] hover:underline">contact@mebakoua-sante.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} className="text-gray-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-gray-900 font-bold text-[13.5px]">Horaires</h4>
                    <p className="text-gray-500 text-[13px]">Lundi – Vendredi : 08h00 – 17h30</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.a 
              href="https://wa.me/237622114428"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#22c55e] hover:bg-[#16a34a] transition-colors rounded-[16px] p-4 flex items-center gap-4 text-white shadow-md block"
            >
              <div className="bg-white/20 p-2.5 rounded-full shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h4 className="font-bold text-[14.5px]">Échanger avec la Direction</h4>
                <p className="text-green-50 text-[12px]">WhatsApp Business — Réponse rapide</p>
              </div>
            </motion.a>

            {/* Regulation Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white border border-gray-200 rounded-[24px] p-5 shadow-sm text-center"
            >
              <span className="text-gray-400 font-bold text-[10px] tracking-widest uppercase mb-3 block">
                Cadre Réglementaire
              </span>
              <div className="space-y-3">
                <div>
                  <h4 className="text-gray-900 font-bold text-[13px]">Loi n° 92/007 du Cameroun</h4>
                  <p className="text-gray-500 text-[12px]">Santé & Sécurité au Travail</p>
                </div>
                <div className="w-1/3 mx-auto h-px bg-gray-100"></div>
                <div>
                  <h4 className="text-gray-900 font-bold text-[13px]">Normes OHADA</h4>
                  <p className="text-gray-500 text-[12px]">Gouvernance & Compliance</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
