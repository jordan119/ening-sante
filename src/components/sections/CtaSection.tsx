import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function CtaSection() {
  return (
    <section className="bg-primary py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Un besoin qui couvre plusieurs pôles ?
          </h2>
          <p className="text-emerald-50 text-[17px] md:text-lg mb-8">
            Commencez par un Diagnostic Flash 48h — nous identifions vos priorités.
          </p>
          <button className="inline-flex items-center gap-2 bg-white text-primary font-semibold text-[15px] px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors shadow-lg group">
            <Zap size={18} className="group-hover:scale-110 transition-transform" />
            Réserver mon Diagnostic Flash Gratuit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
