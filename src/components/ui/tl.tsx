import React from 'react';
import Image from 'next/image';

const CruiseCard: React.FC = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* Image Section */}
      <div className="relative">
        <Image
          src="/cruise-image.jpg" // Placeholder image path
          alt="Caribbean Luxury Escape"
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        {/* Navigation dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4">
        {/* Category */}
        <p className="text-teal-600 text-sm font-semibold uppercase">
          Luxury & Relaxation
        </p>

        {/* Title and Price */}
        <div className="flex justify-between items-center mt-2">
          <h2 className="text-xl font-bold text-gray-800">
            Caribbean Luxury Escape
          </h2>
          <p className="text-2xl font-bold text-teal-600">$1200</p>
        </div>

        {/* Duration */}
        <p className="text-gray-600 text-sm mt-1">
          Duration - 7 March - 25 March
        </p>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button className="text-teal-600 font-semibold text-sm hover:underline">
            Discover More
          </button>
          <button className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition">
            Book your stay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseCard;