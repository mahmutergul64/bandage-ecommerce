import React from 'react';
import PricingHero from '../components/pricing/PricingHero';
import PricingCards from '../components/pricing/PricingCards';
import PricingClients from '../components/pricing/PricingClients';
import PricingFaq from '../components/pricing/PricingFaq';
import PricingCTA from '../components/pricing/PricingCTA';

export default function PricingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <PricingHero />
      <PricingCards />
      <PricingClients />
      <PricingFaq />
      <PricingCTA />
    </div>
  );
}