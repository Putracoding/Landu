import { Facebook, Instagram, Twitter, Youtube, Gamepad2, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-dark-border pt-16 pb-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-cyan rounded-lg flex items-center justify-center text-dark-bg">
                <Gamepad2 size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold font-display tracking-tight">
                L.<span className="text-brand-cyan">topup</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform top up game dan produk digital terpercaya di Indonesia. 
              Proses instan, harga kompetitif, dan layanan 24/7.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:text-brand-cyan transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Pranala Luar</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Hubungi Kami</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Bantuan</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Cara Top Up</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Bantuan Pelanggan</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Lacak Pesanan</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Metode Pembayaran</a></li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Metode Pembayaran</h4>
            <div className="grid grid-cols-4 gap-2 opacity-50">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-[3/2] bg-gray-700 rounded-md"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-dark-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 L.topup. Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Build with <Heart size={12} className="text-red-500 fill-red-500" /> for Gamers Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
