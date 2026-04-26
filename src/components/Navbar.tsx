import { Search, ShoppingCart, User, Menu, Gamepad2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-brand-cyan rounded-lg flex items-center justify-center text-dark-bg">
            <Gamepad2 size={24} strokeWidth={2.5} />
          </div>
          <span className="text-xl md:text-2xl font-bold font-display tracking-tight">
            L.<span className="text-brand-cyan">topup</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-2xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
            <input 
              type="text" 
              placeholder="Cari game, voucher, atau item..." 
              className="w-full bg-dark-card border border-dark-border py-2 pl-10 pr-4 rounded-full focus:outline-none focus:border-brand-cyan transition-colors text-sm"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button className="p-2 text-gray-400 hover:text-white transition-colors">
            <Search className="md:hidden" size={24} />
          </button>
          <button className="hidden sm:flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <ShoppingCart size={22} />
            <span className="hidden lg:inline text-sm font-medium">Keranjang</span>
          </button>
          <div className="h-6 w-[1px] bg-dark-border hidden sm:block"></div>
          <button className="flex items-center gap-2 bg-dark-card border border-dark-border px-3 py-1.5 rounded-lg hover:border-gray-500 transition-colors">
            <User size={20} className="text-brand-cyan" />
            <span className="text-sm font-medium hidden sm:inline">Masuk</span>
          </button>
          <button className="p-2 text-gray-400 hover:text-white md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}
