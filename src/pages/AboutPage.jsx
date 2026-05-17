import React, { useEffect } from 'react';
import AboutHero from '../components/about/AboutHero';
import AboutContent from '../components/about/AboutContent';
import AboutStats from '../components/about/AboutStats';
import AboutVideo from '../components/about/AboutVideo';
import AboutTeam from '../components/about/AboutTeam';
import AboutClients from '../components/about/AboutClients';
import AboutWorkWithUs from '../components/about/AboutWorkWithUs';

export default function AboutPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white animate-fadeIn">
      <AboutHero />
      <AboutContent />
      <AboutStats />
      <AboutVideo />
      <AboutTeam />
      <AboutClients />
      <AboutWorkWithUs />
    </div>
  );
}