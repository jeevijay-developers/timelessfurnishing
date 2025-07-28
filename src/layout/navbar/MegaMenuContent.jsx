import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import ProductServices from "@services/ProductServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Loading from "@components/preloader/Loading";

const MegaMenuContent = ({ category, onMouseLeave }) => {
  const { showingTranslateValue } = useUtilsFunction();

  const [activeSubCategory, setActiveSubCategory] = useState(null);

  useEffect(() => {
    if (category?.children?.length > 0) {
      setActiveSubCategory(category.children[0]);
    }
  }, [category]);

  if (!category) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-white shadow-xl z-50"
      onMouseLeave={onMouseLeave}
    >
      <div className="max-w-screen-2xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* Sub-categories Section */}
        <div className="grid grid-cols-4 gap-6">
          {category.children.map((subCategory) => (
            <div
              key={subCategory._id}
              className="w-full"
              onMouseEnter={() => setActiveSubCategory(subCategory)}
            >
              <Link
                className="text-sm font-bold text-gray-900 mb-2 border-b-2 border-transparent hover:border-customPink cursor-pointer"
                href={`/search?category=${subCategory.slug}&_id=${subCategory._id}`}
              >
                {showingTranslateValue(subCategory.name)}
              </Link>
              <ul className="space-y-1">
                {(subCategory.children || []).slice(0, 7).map((child) => (
                  <li key={child._id}>
                    <Link
                      href={`/search?category=${child.slug}&_id=${child._id}`}
                      className="text-xs text-gray-600 hover:text-customPink block"
                    >
                      {showingTranslateValue(child.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;
