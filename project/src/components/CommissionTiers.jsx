import React from 'react';
import { motion } from 'framer-motion';
import { User, Image as ImageIcon, Film } from 'lucide-react';

const tiers = {
  character: {
    title: 'Character Art',
    icon: User,
    color: 'pixel-yellow',
    items: [
      { name: '16-bit', price: '$3', detail: 'per 5 sprites' },
      { name: '22-bit', price: '$5', detail: 'per 7 sprites' },
      { name: '32-bit', price: '$7', detail: 'per 7 sprites' },
    ],
  },
  background: {
    title: 'Background Art',
    icon: ImageIcon,
    color: 'pixel-green',
    items: [
      { name: '256x256', price: '$9', detail: 'low detail' },
      { name: '256x256', price: '$11', detail: 'high detail' },
      { name: '512x512', price: '$15', detail: 'low detail' },
      { name: '512x512', price: '$17', detail: 'high detail' },
    ],
  },
  animations: {
    title: 'Animations',
    icon: Film,
    color: 'pixel-pink',
    items: [
      {
        name: 'Custom',
        price: 'By Quote',
        detail: 'Based on existing art or from scratch.',
      },
    ],
  },
};

const TierCard = ({ tier }) => {
  const Icon = tier.icon;
  return (
    <motion.div 
      className="pixel-box w-full"
      whileHover={{ y: -10, x: -5, boxShadow: '12px 12px 0px #ffffff' }}
    >
      <div className="flex items-center mb-4">
        <Icon className={`w-8 h-8 mr-4 text-${tier.color}`} />
        <h3 className={`text-2xl text-${tier.color} font-bold uppercase`}>{tier.title}</h3>
      </div>
      <ul className="space-y-4 text-base">
        {tier.items.map((item, index) => (
          <li key={index} className="flex justify-between items-baseline">
            <div className="flex flex-col">
              <span className="font-bold text-white">{item.name}</span>
              <span className="text-gray-400 text-sm">{item.detail}</span>
            </div>
            <span className={`text-xl font-bold text-${tier.color}`}>{item.price}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export function CommissionTiers() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-12 uppercase text-pixel-blue" style={{ textShadow: '3px 3px 0 #000' }}>Pricing</h2>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12">
          <TierCard tier={tiers.character} />
          <TierCard tier={tiers.background} />
          <TierCard tier={tiers.animations} />
        </div>
      </div>
    </section>
  );
}