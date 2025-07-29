import React from "react";
import { useRouter } from "next/navigation";

const CategoryCard = ({ name, subtitle, discount, imageUrl, route }) => {
  const router = useRouter();

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  return (
    // The main container for the card with responsive height and styling
    <div
      className="relative h-64 md:h-72 w-full bg-cover bg-center rounded-lg overflow-hidden group shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      aria-label={`Go to ${name} category`}
   
    >
      {/* Semi-transparent overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-30 transition-all duration-300"></div>

      {/* Container for the text content */}
      <div className="relative z-10 p-5 text-white">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-sm font-light uppercase tracking-wider">
          {subtitle}
        </p>
        <p className="mt-2 text-xs font-semibold bg-white/20 backdrop-blur-sm inline-block px-2 py-1 rounded">
          {discount}
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;
