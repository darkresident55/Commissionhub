import React from 'react';
import { Coffee, DollarSign } from 'lucide-react';

export function Footer({ handleBMACClick, handleCashAppClick }) {
  const paymentLinks = [
    { name: 'Buy Me a Coffee', icon: Coffee, handler: handleBMACClick, color: 'hover:text-orange-400' },
    { name: 'Cash App', icon: DollarSign, handler: handleCashAppClick, color: 'hover:text-green-400' },
  ];

  return (
    <footer className="py-8 px-4 border-t-4 border-pixel-border">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-sm mb-4 md:mb-0">
          Parented by Tereno Labs™ LLC. 2023-2025
        </p>
        <div className="flex space-x-6">
          {paymentLinks.map((link) => (
            <button key={link.name} onClick={link.handler} className={`transition-colors duration-300 ${link.color}`} aria-label={link.name}>
              <link.icon className="w-8 h-8" />
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}