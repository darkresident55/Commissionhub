import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, ClipboardCopy } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export function CTA({ handleDiscordClick }) {
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText('anemunt7');
    toast({
      title: 'Copied!',
      description: 'Discord username "anemunt7" copied to clipboard.',
      className: 'bg-pixel-green text-black font-pixel',
    });
  };

  return (
    <section className="py-20 px-4 text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="pixel-box p-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase" style={{ textShadow: '3px 3px 0 #000' }}>Interested?</h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            If you're curious about my work, or want to get in contact with me? Feel free. My Discord is located here under these 2 Discord servers if you'd like to get in contact with my Discord account or meet my community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              onClick={() => handleDiscordClick('https://discord.gg/VwPJGJrT')}
              className="pixel-button bg-pixel-purple text-black px-4 py-2 text-lg font-bold uppercase w-full sm:w-auto"
            >
              Treron server
            </Button>
            <Button
              onClick={() => handleDiscordClick('https://discord.gg/JeEMprwn')}
              className="pixel-button bg-pixel-blue text-black px-4 py-2 text-lg font-bold uppercase w-full sm:w-auto"
            >
              The Waking Soul Server
            </Button>
          </div>
          <div>
            <h3 className="text-2xl font-bold uppercase mb-4 text-pixel-yellow">Direct Contact</h3>
            <Button
              onClick={copyToClipboard}
              className="pixel-button bg-pixel-green text-black px-4 py-2 text-lg font-bold uppercase"
            >
              anemunt7 <ClipboardCopy className="w-6 h-6 ml-3" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}