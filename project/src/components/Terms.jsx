import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle, ArrowUpCircle } from 'lucide-react';

const rules = [
    {
        icon: XCircle,
        color: "text-red-400",
        text: "Absolutely no NSFW Drawing requests."
    },
    {
        icon: CheckCircle,
        color: "text-pixel-green",
        text: "Separate images per animation frame is perfectly fine and does not affect the price."
    },
    {
        icon: ArrowUpCircle,
        color: "text-pixel-blue",
        text: "Upscaling art (e.g., 16-bit to 22-bit) is available for a small fee ($1.50)."
    },
    {
        icon: ArrowUpCircle,
        color: "text-pixel-yellow",
        text: "Price for larger upscales may vary based on detail and complexity."
    }
];

export function Terms() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase text-pixel-pink" style={{ textShadow: '3px 3px 0 #000' }}>
          Terms of Request
        </h2>
        <motion.div 
          className="pixel-box"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ul className="space-y-6 text-lg">
            {rules.map((rule, index) => {
                const Icon = rule.icon;
                return (
                    <li key={index} className="flex items-start">
                        <Icon className={`w-8 h-8 mr-4 shrink-0 ${rule.color}`} />
                        <span>{rule.text}</span>
                    </li>
                );
            })}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}