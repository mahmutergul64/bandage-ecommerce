import React from 'react';

const statsData = [
  { id: 1, number: "15K", text: "Happy Customers" },
  { id: 2, number: "150K", text: "Monthly Visitors" },
  { id: 3, number: "15", text: "Countries Worldwide" },
  { id: 4, number: "100+", text: "Top Partners" },
];

export default function AboutStats() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 md:gap-8 text-center">
          
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center gap-4 md:gap-2">
              
              <h1 className="text-[50px] md:text-[58px] font-bold text-[#252B42] leading-none">
                {stat.number}
              </h1>
              
              <h5 className="text-[#737373] font-bold text-base tracking-wide">
                {stat.text}
              </h5>
              
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}