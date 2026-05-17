import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamData = [
  { id: 1, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function AboutTeam() {
  return (
    <div className="w-full bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <div className="text-center max-w-[600px] mx-auto mb-16 md:mb-24 flex flex-col items-center">
          
          <h2 className="text-[40px] font-bold text-[#252B42] mb-6 leading-tight">
            Meet Our <br className="block md:hidden" /> Team
          </h2>
          
          <p className="text-[#737373] text-sm md:text-base font-semibold leading-relaxed max-w-[280px] md:max-w-none mx-auto">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          
          {teamData.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full aspect-[3/4] md:h-[330px] object-cover mb-6 shadow-sm rounded-sm"
              />
              
              <h5 className="text-[#252B42] font-bold text-base mb-2">
                {member.name}
              </h5>
              <h6 className="text-[#737373] font-bold text-sm mb-4">
                {member.role}
              </h6>
              
              <div className="flex items-center gap-5 text-[#23A6F0]">
                <FaFacebook size={24} className="cursor-pointer hover:text-blue-700 transition-colors" />
                <FaInstagram size={24} className="cursor-pointer hover:text-pink-600 transition-colors" />
                <FaTwitter size={24} className="cursor-pointer hover:text-blue-400 transition-colors" />
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}