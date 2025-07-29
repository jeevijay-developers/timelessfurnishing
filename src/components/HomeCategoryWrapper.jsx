import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  {
    name: "Bedroom",
    subtitle: "furniture",
    discount: "UPTO 48% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1567016526105-22da7c13161a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=bedroom&_id=6880b8f8ab4acb2fb8401a07",
  },
  {
    name: "Living Room",
    subtitle: "furniture",
    discount: "UPTO 60% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=undefined&_id=6880b8e2ab4acb2fb8401a01",
  },
  {
    name: "Dining Room",
    subtitle: "furniture",
    discount: "UPTO 62% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1616486886892-ff366aa67ba4?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=dining-kitchen&_id=6880b914ab4acb2fb8401a0d",
  },
  {
    name: "Study Room",
    subtitle: "furniture",
    discount: "UPTO 75% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1587270804625-48c99a3cc707?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=study-office&_id=6880b964ab4acb2fb8401a1a",
  },
  {
    name: "Outdoor",
    subtitle: "furniture",
    discount: "UPTO 75% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1613685302957-3a6fc45346ef?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=sofas&_id=6880b7acab4acb2fb84019fa",
  },
  {
    name: "Kids Room",
    subtitle: "furniture",
    discount: "UPTO 61% OFF",
    imageUrl:
      "https://images.unsplash.com/photo-1687946803051-51da173a9f55?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    route: "/search?category=bedroom&_id=6880b8f8ab4acb2fb8401a07",
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
              route={category.route}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryWrapper;
