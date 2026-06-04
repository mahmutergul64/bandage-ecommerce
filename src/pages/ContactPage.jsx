import React from 'react';
import ContactHero from '../components/contact/ContactHero';
import ContactOffice from '../components/contact/ContactOffice';
import ContactCTA from '../components/contact/ContactCTA';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <ContactHero />
      <ContactOffice />
      <ContactCTA />
    </div>
  );
}