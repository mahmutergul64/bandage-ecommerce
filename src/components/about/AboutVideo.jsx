import React, { useState } from 'react';

export default function AboutVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-full bg-white pt-20 pb-16 md:pt-0 md:pb-32 animate-fadeIn">
      <div className="container mx-auto px-4 max-w-[1050px] flex justify-center">
        
        <div className="relative w-full max-w-[989px] aspect-square md:aspect-video rounded-[20px] overflow-hidden shadow-2xl group border-4 border-white">
          
          {!isPlaying ? (
            <div 
              className="w-full h-full cursor-pointer relative"
              onClick={() => setIsPlaying(true)}
            >
              <img 
                src="https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                alt="About Video Thumbnail" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:bg-black/20"></div>
              
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] md:w-[92px] md:h-[92px] bg-[#23A6F0] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-8 md:h-8 ml-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
              </button>
            </div>
          ) : (
            <iframe 
              className="w-full h-full animate-fadeIn"
              src="https://www.youtube.com/embed/t2LMvk7CKJ0?autoplay=1&rel=0&modestbranding=1" 
              title="Bandage Clothing Brand Commercial"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )}

        </div>

      </div>
    </div>
  );
}