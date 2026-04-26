import GameCard from './GameCard';
import { ArrowRight } from 'lucide-react';

const games = [
  { id: '1', name: 'Mobile Legends', publisher: 'Moonton', image: 'https://images.unsplash.com/photo-1614680376593-902f74cc0d41?q=80&w=1974&auto=format&fit=crop' },
  { id: '2', name: 'Free Fire', publisher: 'Garena', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop' },
  { id: '3', name: 'PUBG Mobile', publisher: 'Tencent', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop' },
  { id: '4', name: 'Genshin Impact', publisher: 'HoYoverse', image: 'https://images.unsplash.com/photo-1627850604058-52e40de1b847?q=80&w=2070&auto=format&fit=crop' },
  { id: '5', name: 'Valorant', publisher: 'Riot Games', image: 'https://images.unsplash.com/photo-1614680376739-414d95af43df?q=80&w=1974&auto=format&fit=crop' },
  { id: '6', name: 'Honor of Kings', publisher: 'Tencent', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop' },
  { id: '7', name: 'Roblox', publisher: 'Roblox Corp', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2165&auto=format&fit=crop' },
  { id: '8', name: 'Steam Wallet', publisher: 'Valve', image: 'https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?q=80&w=2070&auto=format&fit=crop' },
];

export default function FeaturedGames() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-black font-display tracking-tight">GAME POPULER</h2>
            <div className="h-1 w-20 bg-brand-cyan mt-2 rounded-full"></div>
          </div>
          <button className="flex items-center gap-2 text-brand-cyan font-bold hover:underline">
            Lihat Semua <ArrowRight size={18} />
          </button>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
}
