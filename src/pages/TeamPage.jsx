import React, { useEffect } from 'react';
import TeamHero from '../components/team/TeamHero';
import TeamMembers from '../components/team/TeamMembers';
import TeamCTA from '../components/team/TeamCTA';

export default function TeamPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white animate-fadeIn">
      <TeamHero />
      <TeamMembers />
      <TeamCTA />
    </div>
  );
}