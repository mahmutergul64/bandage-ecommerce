import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function PricingFaq() {
  const faqs = Array(6).fill({
    question: 'the quick fox jumps over the lazy dog',
    answer: 'Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.'
  });

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="text-center mb-16">
          <h2 className="text-[40px] font-bold text-[#252B42] mb-4">Pricing FAQs</h2>
          <p className="text-[#737373] text-sm max-w-[450px] mx-auto leading-relaxed">
            Problems trying to resolve the conflict between the two major realms of Classical physics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 max-w-[900px] mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="flex items-start gap-4">
              <ChevronRight className="text-[#23A6F0] shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-[#252B42] font-bold text-base mb-2">{faq.question}</h3>
                <p className="text-[#737373] text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#737373] text-xl">
            Haven't got your answer? Contact our support
          </p>
        </div>

      </div>
    </div>
  );
}