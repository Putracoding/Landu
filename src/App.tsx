/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import FeaturedGames from './components/FeaturedGames';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Banner / Hero Slider */}
        <Hero />
        
        {/* Categories */}
        <CategorySection />
        
        {/* Trending / Flash Sale Section Placeholder */}
        <section className="container mx-auto px-4 py-8">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-red-500/20">
            <div className="flex items-center gap-6">
              <div className="hidden sm:block text-5xl">⚡</div>
              <div>
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">FLASH SALE</h3>
                <p className="text-white/80 font-medium">Berakhir dalam: 02 : 45 : 12</p>
              </div>
            </div>
            <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
               {/* Simplified Flash Sale Items */}
               {[1, 2, 3].map((i) => (
                 <div key={i} className="flex-shrink-0 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/10 flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-800 rounded-lg"></div>
                   <div>
                     <p className="text-xs font-bold truncate w-24">MLBB 86 Diamonds</p>
                     <p className="text-sm font-black text-yellow-300">Rp 15.000</p>
                   </div>
                 </div>
               ))}
            </div>
          </div>
        </section>

        {/* Featured Games */}
        <FeaturedGames />

        {/* Why Choose Us */}
        <section className="py-16 bg-white/[0.02]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-black font-display mb-4">KENAPA MEMILIH L.TOPUP?</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Kami menyediakan layanan terbaik dengan standar keamanan tinggi untuk pengalaman gaming Anda.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h4 className="font-bold mb-2">Proses Instan</h4>
                <p className="text-sm text-gray-500">Produk terkirim otomatis di hari yang sama, hanya butuh hitungan detik.</p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">🛡️</div>
                <h4 className="font-bold mb-2">100% Aman</h4>
                <p className="text-sm text-gray-500">Legalitas terjamin dan keamanan data pelanggan adalah prioritas utama kami.</p>
              </div>
              <div className="p-8">
                <div className="text-4xl mb-4">🎧</div>
                <h4 className="font-bold mb-2">Dukungan 24/7</h4>
                <p className="text-sm text-gray-500">Tim CS kami siap membantu kendala Anda kapanpun Anda butuhkan.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
