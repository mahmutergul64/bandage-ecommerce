import React, { useEffect } from 'react';
import ContactCallToAction from '../components/contact/ContactCallToAction';

export default function ContactPage() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full bg-white animate-fadeIn">
      <ContactCallToAction />
    </div>
  );
}