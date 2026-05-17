import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto px-4 max-w-[1050px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3 className="text-2xl font-bold text-[#252B42]">Bandage</h3>
          <div className="flex items-center gap-5 text-[#23A6F0]">
            <svg className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
            <svg className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            <svg className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
          </div>
        </div>
      </div>
      <div className="bg-white py-14">
        <div className="container mx-auto px-4 max-w-[1050px] flex flex-wrap lg:flex-nowrap gap-8 justify-between">
          {[
            { title: "Company Info", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
            { title: "Legal", links: ["About Us", "Carrier", "We are hiring", "Blog"] },
            { title: "Features", links: ["Business Marketing", "User Analytic", "Live Chat", "Unlimited Support"] },
            { title: "Resources", links: ["IOS & Android", "Watch a Demo", "Customers", "API"] }
          ].map((col, index) => (
            <div key={index} className="flex flex-col gap-4 w-full sm:w-[150px]">
              <h5 className="font-bold text-[#252B42] text-base mb-1">{col.title}</h5>
              {col.links.map((link, i) => (
                <a key={i} href="#" className="text-[#737373] font-bold text-sm hover:text-[#23A6F0] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          ))}
          <div className="flex flex-col gap-4 w-full lg:w-[320px]">
            <h5 className="font-bold text-[#252B42] text-base mb-1">Get In Touch</h5>
            <div className="flex h-14">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="flex-1 bg-[#F9F9F9] border border-[#E6E6E6] border-r-0 rounded-l-[5px] px-5 outline-none text-[#737373] font-normal"
              />
              <button className="bg-[#23A6F0] hover:bg-[#1A8CD8] text-white font-normal px-6 rounded-r-[5px] transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-[#737373] text-xs">Lore imp sum dolor Amit</p>
          </div>

        </div>
      </div>

      <div className="bg-[#FAFAFA] py-6">
        <div className="container mx-auto px-4 max-w-[1050px]">
          <p className="text-[#737373] font-bold text-sm text-center lg:text-left">
            Made With Love By Finland All Right Reserved
          </p>
        </div>
      </div>

    </footer>
  );
}