import { Star } from 'lucide-react';
import { motion } from 'motion/react';

interface GameCardProps {
  id: string;
  name: string;
  image: string;
  publisher: string;
  rating?: number;
}

export default function GameCard({ name, image, publisher, rating = 4.8 }: GameCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="glass-card flex flex-col group cursor-pointer"
    >
      <div className="relative aspect-square overflow-hidden mb-0">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>
      <div className="p-4 flex flex-col gap-1">
        <h3 className="font-bold text-base truncate group-hover:text-brand-cyan transition-colors">{name}</h3>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{publisher}</p>
        <div className="flex items-center gap-1 mt-2">
          <Star size={12} fill="#fbbf24" className="text-yellow-400" />
          <span className="text-xs font-bold text-gray-400">{rating}</span>
        </div>
      </div>
    </motion.div>
  );
}
