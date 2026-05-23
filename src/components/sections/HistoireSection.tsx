import { motion } from 'framer-motion';

export function HistoireSection() {
  return (
    <section className="bg-white pb-24 px-6 sm:px-10 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#151f1a] rounded-[24px] p-8 sm:p-12 md:p-16 shadow-xl"
        >
          <span className="text-[#10b981] font-bold text-[10px] tracking-widest uppercase mb-4 block">
            L'Histoire
          </span>
          <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-white mb-6 leading-tight tracking-tight">
            De la blouse blanche au pilotage stratégique
          </h2>
          <div className="space-y-5 text-gray-300 text-[13.5px] md:text-[14.5px] leading-relaxed max-w-4xl">
            <p>
              L'histoire d'ENING SANTÉ naît d'un constat de terrain : au Cameroun, la santé en entreprise est souvent le <strong className="text-white">"parent pauvre"</strong> de la stratégie, gérée dans l'urgence.
            </p>
            <p>
              Fondée par une experte alliant un <strong className="text-white">Doctorat en Médecine</strong> et un <strong className="text-white">Master 2 en Management Hospitalier</strong>, la SARL a été créée pour combler le vide entre la pratique clinique et la performance économique. Notre ADN est celui du <em>"Médecin-Manager"</em> : nous comprenons les pathologies humaines, mais nous maîtrisons surtout les indicateurs de performance de votre structure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
