import React from 'react';

export default function Pagination({ 
  currentPage, 
  totalPages, 
  handleFirstPage, 
  handlePrevPage, 
  handleNextPage, 
  handleLastPage 
}) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mt-16 p-4 bg-white rounded-lg shadow-sm border border-gray-100 w-fit mx-auto">
      
      <button 
        onClick={handleFirstPage} 
        disabled={currentPage === 1}
        className="px-4 sm:px-6 py-2 rounded-md font-bold text-[#23A6F0] border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
      >
        First
      </button>
      
      <button 
        onClick={handlePrevPage} 
        disabled={currentPage === 1}
        className="px-4 sm:px-6 py-2 rounded-md font-bold text-[#23A6F0] border border-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition-colors disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
      >
        Prev
      </button>
      
      <span className="font-bold text-[#737373] px-2 text-sm sm:text-base">
        Page {currentPage} of {totalPages}
      </span>
      
      <button 
        onClick={handleNextPage} 
        disabled={currentPage === totalPages}
        className="px-4 sm:px-6 py-2 rounded-md font-bold text-white bg-[#23A6F0] hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
      >
        Next
      </button>

      <button 
        onClick={handleLastPage} 
        disabled={currentPage === totalPages}
        className="px-4 sm:px-6 py-2 rounded-md font-bold text-white bg-[#23A6F0] hover:bg-blue-600 transition-colors disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed text-sm sm:text-base"
      >
        Last
      </button>

    </div>
  );
}