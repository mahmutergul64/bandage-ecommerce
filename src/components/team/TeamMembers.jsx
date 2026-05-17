import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const teamData = [
  { id: 1, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 8, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 9, name: "Username", role: "Profession", img: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

export default function TeamMembers() {
  return (
    <div className="w-full bg-white py-24">
      <div className="container mx-auto px-4 max-w-[1050px]">
        
        <h2 className="text-4xl font-bold text-[#252B42] text-center mb-16 sm:mb-28">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-24">
          
          {teamData.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-[230px] object-cover mb-6 rounded-sm shadow-sm"
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