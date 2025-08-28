import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-4 text-center">
      <div className="z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-pixel-yellow uppercase tracking-widest" style={{ textShadow: '4px 4px 0 #000' }}>
            Anemunt
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-pixel-green uppercase" style={{ textShadow: '3px 3px 0 #000' }}>
            Pixel Art
          </h2>
          
          <div className="pixel-box p-6 md:p-8 mb-8 text-lg md:text-xl leading-relaxed text-gray-200 max-w-3xl mx-auto">
             <p className="mb-4">Hey there! I do pixel art, mainly for my own game The Waking Soul.</p>
             <p>But I also take commissions if anyone needs help with their projects! I focus on both characters and background objects/environments, so if you’re looking for someone to add a bit of <span className="text-pixel-pink font-bold">retro charm</span> to your game, I’m here for it.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            onClick={scrollToPricing}
            className="pixel-button bg-pixel-pink text-black px-6 py-2 text-xl font-bold uppercase"
          >
            <ArrowDown className="w-7 h-7 mr-3" />
            See Pricing!
          </Button>
        </motion.div>
      </div>
    </section>
  );
}