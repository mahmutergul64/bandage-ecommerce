import React from 'react';
import { LayoutGrid, List, Search } from 'lucide-react';

export default function FilterBar({ total, filterText, setFilterText, sortOption, setSortOption, onFilter }) {
  return (
    <div className="bg-white border-y border-[#ECECEC]">
      <div className="container mx-auto px-4 max-w-[1050px] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="font-bold text-[#737373] text-sm">
          Showing all {total} results
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold text-[#737373] text-sm">Views:</span>
          <button className="p-2.5 border rounded-[5px] border-[#ECECEC] text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
            <LayoutGrid size={16} />
          </button>
          <button className="p-2.5 border rounded-[5px] border-[#ECECEC] text-[#737373] hover:border-[#23A6F0] hover:text-[#23A6F0] transition-colors">
            <List size={16} />
          </button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="border bg-[#F9F9F9] border-[#DDDDDD] p-2 pl-9 rounded-[5px] text-sm text-[#737373] outline-none"
            />
            <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <select 
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="bg-[#F9F9F9] border border-[#DDDDDD] text-[#737373] text-sm rounded-[5px] px-4 py-2 outline-none cursor-pointer"
          >
            <option value="">Popularity</option>
            <option value="price:asc">Price: Low to High</option>
            <option value="price:desc">Price: High to Low</option>
            <option value="rating:asc">Rating: Low to High</option>
            <option value="rating:desc">Rating: High to Low</option>
          </select>
          <button 
            onClick={onFilter}
            className="bg-[#23A6F0] hover:bg-blue-500 text-white font-bold text-sm px-6 py-2 rounded-[5px] transition-all shadow-md active:scale-95"
          >
            Filter
          </button>
        </div>
      </div>
    </div>
  );
}