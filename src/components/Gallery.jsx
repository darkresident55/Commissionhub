import React from 'react';
import { motion } from 'framer-motion';

const galleryItems = [
  { alt: "Pixel art characters for 'The Waking Soul' game", description: "The Waking Soul Characters" },
  { alt: "32-bit pixel art background of a vibrant sky with clouds", description: "32-bit Background/Skies" },
  { alt: "Small, expressive pixel art character animations", description: "Small Character Animations" },
  { alt: "Pixel art character portraits showing various emotions for dialogue", description: "Dialogue Emotion Art" },
];

export function Gallery() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-12 uppercase text-pixel-purple" style={{ textShadow: '3px 3px 0 #000' }}>
          Examples
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <motion.div
            className="pixel-box p-4"
            whileHover={{ y: -5, x: -3, boxShadow: '10px 10px 0px #ffffff' }}
          >
            <div className="bg-white aspect-video flex items-center justify-center mb-4 border-4 border-pixel-border">
              <img  class="w-full h-full object-cover" alt="Pixel art characters for 'The Waking Soul' game" src="https://images.unsplash.com/photo-1588990779542-ddd8b7b07476" />
            </div>
            <p className="text-center font-bold text-lg text-white">The Waking Soul Characters</p>
          </motion.div>
          <motion.div
            className="pixel-box p-4"
            whileHover={{ y: -5, x: -3, boxShadow: '10px 10px 0px #ffffff' }}
          >
            <div className="bg-white aspect-video flex items-center justify-center mb-4 border-4 border-pixel-border">
              <img  class="w-full h-full object-cover" alt="32-bit pixel art background of a vibrant sky with clouds" src="https://images.unsplash.com/photo-1676552088106-ea266cc77c4e" />
            </div>
            <p className="text-center font-bold text-lg text-white">32-bit Background/Skies</p>
          </motion.div>
          <motion.div
            className="pixel-box p-4"
            whileHover={{ y: -5, x: -3, boxShadow: '10px 10px 0px #ffffff' }}
          >
            <div className="bg-white aspect-video flex items-center justify-center mb-4 border-4 border-pixel-border">
              <img  class="w-full h-full object-cover" alt="Small, expressive pixel art character animations" src="https://images.unsplash.com/photo-1693310293097-3458cdc83dc0" />
            </div>
            <p className="text-center font-bold text-lg text-white">Small Character Animations</p>
          </motion.div>
          <motion.div
            className="pixel-box p-4"
            whileHover={{ y: -5, x: -3, boxShadow: '10px 10px 0px #ffffff' }}
          >
            <div className="bg-white aspect-video flex items-center justify-center mb-4 border-4 border-pixel-border">
              <img  class="w-full h-full object-cover" alt="Pixel art character portraits showing various emotions for dialogue" src="https://images.unsplash.com/photo-1635220339528-4dbe86b2fdda" />
            </div>
            <p className="text-center font-bold text-lg text-white">Dialogue Emotion Art</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}