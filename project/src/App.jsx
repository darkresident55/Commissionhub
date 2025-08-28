import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { Hero } from '@/components/Hero';
import { CommissionTiers } from '@/components/CommissionTiers';
import { Gallery } from '@/components/Gallery';
import { Process } from '@/components/Process';
import { Terms } from '@/components/Terms';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

function App() {

  const handleBMACClick = () => {
    window.open('https://bmc.link/anemunt', '_blank');
  };

  const handleCashAppClick = () => {
    window.open('https://cash.app/$Anemunt', '_blank');
  };

  const handleDiscordClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <>
      <Helmet>
        <title>Anemunt Pixel Art Commissions</title>
        <meta name="description" content="Pixel art commissions for characters, backgrounds, and animations. Add some retro charm to your game project!" />
        <meta property="og:title" content="Anemunt Pixel Art Commissions" />
        <meta property="og:description" content="Pixel art commissions for characters, backgrounds, and animations. Add some retro charm to your game project!" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Helmet>

      <main className="font-pixel bg-pixel-bg text-white overflow-hidden">
        <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width="40"%20height="40"%20viewBox="0%200%2040%2040"%20xmlns="http://www.w3.org/2000/svg"%3E%3Cg%20fill="%23ffffff"%20fill-opacity="0.05"%20fill-rule="evenodd"%3E%3Cpath%20d="M0%2040L40%200H20L0%2020M40%2040V20L20%2040"/%3E%3C/g%3E%3C/svg%3E')]`}></div>
        <div className="relative">
          <Hero />
          <CommissionTiers />
          <Process />
          <Gallery />
          <Terms />
          <CTA handleDiscordClick={handleDiscordClick} />
          <Footer handleBMACClick={handleBMACClick} handleCashAppClick={handleCashAppClick} />
          <Toaster />
        </div>
      </main>
    </>
  );
}

export default App;