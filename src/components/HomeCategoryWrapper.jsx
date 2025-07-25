import React from "react";
import CategoryCard from "./CategoryCard";
const categories = [
  {
    name: "Bedroom",
    subtitle: "furniture",
    discount: "UPTO 48% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Living Room",
    subtitle: "furniture",
    discount: "UPTO 60% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Dining Room",
    subtitle: "furniture",
    discount: "UPTO 62% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1617806118233-5cf3b44b434c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Study Room",
    subtitle: "furniture",
    discount: "UPTO 75% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Outdoor",
    subtitle: "furniture",
    discount: "UPTO 75% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1598532221323-793e4244a5a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Kids Room",
    subtitle: "furniture",
    discount: "UPTO 61% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1578899952109-a1b89a4a4b89?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const HomeCategoryWrapper = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Title for the showcase */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Shop By Room</h1>
          <p className="text-gray-500 mt-2">
            Discover curated furniture collections for every space in your home.
          </p>
        </div>

        {/* Responsive grid for the category cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map over the categories data to render a card for each one */}
          {categories.map((category) => (
            <CategoryCard
              key={category.name}
              name={category.name}
              subtitle={category.subtitle}
              discount={category.discount}
              imageUrl={category.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryWrapper;
