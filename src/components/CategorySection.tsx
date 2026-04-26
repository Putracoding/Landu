import { Zap, Ticket, Users, Briefcase, Sparkles, Smartphone } from 'lucide-react';

const categories = [
  { id: 'topup', name: 'Top Up', icon: Zap, color: 'text-yellow-400' },
  { id: 'voucher', name: 'Voucher', icon: Ticket, color: 'text-blue-400' },
  { id: 'item', name: 'Item', icon: Sparkles, color: 'text-purple-400' },
  { id: 'akun', name: 'Akun', icon: Users, color: 'text-green-400' },
  { id: 'pulsa', name: 'Pulsa', icon: Smartphone, color: 'text-red-400' },
  { id: 'jasa', name: 'Jasa Joki', icon: Briefcase, color: 'text-indigo-400' },
];

export default function CategorySection() {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className="flex flex-col items-center gap-3 p-4 glass-card group cursor-pointer"
            >
              <div className={`p-3 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform ${cat.color}`}>
                <cat.icon size={28} />
              </div>
              <span className="text-sm font-semibold text-gray-300">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
