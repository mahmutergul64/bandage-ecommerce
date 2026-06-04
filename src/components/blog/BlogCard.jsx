import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ image, title, description, date, comments }) => {
  return (
    <div className="flex flex-col bg-white shadow-sm border border-gray-100 rounded-md overflow-hidden transition-transform hover:shadow-md hover:-translate-y-1 duration-300">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-[300px] object-cover" />
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded shadow">
          NEW
        </span>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex gap-4 text-xs font-semibold mb-4">
          <span className="text-blue-300">Google</span>
          <span className="text-gray-500">Trending</span>
          <span className="text-gray-500">New</span>
        </div>

        <h3 className="text-xl font-normal text-gray-800 mb-3 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center text-xs text-gray-400 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
            <span>{comments} comments</span>
          </div>
        </div>

        <Link to="#" className="text-blue-500 font-bold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors w-max">
          Learn More
          <span className="text-lg leading-none">›</span>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;