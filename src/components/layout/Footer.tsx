import { ShieldCheck, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#151b19] text-gray-300 py-12 lg:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Colonne 1 : À propos & Contact */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-mint-leaf-600 text-white p-2 rounded-lg">
                  <ShieldCheck size={24} strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white leading-tight tracking-tight">MEBA&KOUA ENING SANTÉ</span>
                  <span className="text-gray-400 text-sm">Pôle d'Ingénierie Sanitaire</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Transformer la gestion sanitaire réactive en un levier de croissance durable pour les institutions d'Afrique Centrale.
            </p>

            <ul className="flex flex-col gap-3 mt-2 text-sm text-gray-400">
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <MapPin size={18} className="text-mint-leaf-600" />
                <span>Ekié – Complexe Beac – Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Phone size={18} className="text-mint-leaf-600" />
                <span>+237 622 114 428</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors">
                <Mail size={18} className="text-mint-leaf-600" />
                <a href="mailto:contact@mebakoua-sante.com">contact@mebakoua-sante.com</a>
              </li>
            </ul>
          </div>

          {/* Colonne 2 : Navigation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm">Navigation</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nos Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nos Cibles</a></li>
              <li><a href="#" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Espace Client</a></li>
            </ul>
          </div>

          {/* Colonne 3 : Cadre Légal */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold tracking-widest uppercase text-sm">Cadre Légal</h3>
            <div className="flex flex-col gap-3">
              {/* Carte 1 */}
              <div className="border border-gray-700/50 rounded-xl p-4 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <h4 className="text-white font-bold text-sm">Loi n° 92/007</h4>
                <p className="text-gray-400 text-xs mt-1">Santé & Sécurité au Travail, Cameroun</p>
              </div>
              {/* Carte 2 */}
              <div className="border border-gray-700/50 rounded-xl p-4 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <h4 className="text-white font-bold text-sm">Normes OHADA</h4>
                <p className="text-gray-400 text-xs mt-1">Gouvernance & Compliance régionale</p>
              </div>
              {/* Carte 3 */}
              <div className="border border-gray-700/50 rounded-xl p-4 bg-gray-800/20 hover:bg-gray-800/40 transition-colors">
                <h4 className="text-white font-bold text-sm">Filiale du Groupe</h4>
                <p className="text-gray-400 text-xs mt-1">MEBA&KOUA Holding Multisectorielle</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 MEBA&KOUA ENING SANTÉ SARL — Tous droits réservés</p>
          <p>Filiale du Groupe MEBA&KOUA</p>
        </div>
      </div>
    </footer>
  );
}
