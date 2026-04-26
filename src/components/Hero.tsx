import { motion } from 'motion/react';
import { ChevronRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative py-8 md:py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative aspect-[21/9] md:aspect-[3/1] rounded-2xl overflow-hidden group">
          {/* Main Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue to-brand-cyan">
            <img 
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2070" 
              alt="Gaming Banner" 
              className="w-full h-full object-cover mix-blend-overlay opacity-60"
            />
          </div>
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-md"
            >
              <div className="inline-flex items-center gap-2 bg-dark-bg/40 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-cyan mb-4 uppercase tracking-widest border border-white/10">
                <Zap size={14} fill="currentColor" /> Non-Stop Gaming
              </div>
              <h1 className="text-3xl md:text-5xl font-black font-display leading-tight mb-4 drop-shadow-xl">
                TOP UP GAMES <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">MURAH & CEPAT</span>
              </h1>
              <p className="text-gray-200 text-sm md:text-lg mb-6 max-w-sm hidden sm:block">
                Dapatkan diamond, UC, dan point termurah se-Indonesia hanya di L.topup.
              </p>
              <button className="bg-white text-dark-bg font-bold py-3 px-8 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                Top Up Sekarang <ChevronRight size={20} />
              </button>
            </motion.div>
          </div>

          {/* Sub Banner Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-8 md:w-12 h-1.5 bg-white rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
