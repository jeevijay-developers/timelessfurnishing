import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import ProductServices from "@services/ProductServices";
import useUtilsFunction from "@hooks/useUtilsFunction";
import Loading from "@components/preloader/Loading";

const MegaMenuContent = ({ category, onMouseLeave }) => {
  const { showingTranslateValue } = useUtilsFunction();

  // State to track the active sub-category
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  // Set the first sub-category as active by default
  useEffect(() => {
    if (category?.children?.length > 0) {
      setActiveSubCategory(category.children[0]);
    }
  }, [category]);

  // Fetch products for the hovered sub-category
  const {
    data: products,
    isLoading: productsLoading,
    isError,
  } = useQuery({
    queryKey: ["mega-menu-products", activeSubCategory?._id],
    queryFn: () =>
      ProductServices.getShowingProducts({
        category: activeSubCategory?._id,
      }),
    enabled: !!activeSubCategory,
  });

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
              <h4 className="text-sm font-bold text-gray-900 mb-2 border-b-2 border-transparent hover:border-customPink cursor-pointer">
                {showingTranslateValue(subCategory.name)}
              </h4>
              <ul className="space-y-1">
                {(subCategory.children || []).slice(0, 7).map((child) => (
                  <li key={child._id}>
                    <Link
                      href={`/category/${child.slug || child._id}`}
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

        {/* Horizontal Divider */}
        <hr />

        {/* Products Preview Section */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">
            Top Products in {showingTranslateValue(activeSubCategory?.name)}
          </h4>
          {productsLoading ? (
            <Loading loading={productsLoading} />
          ) : isError ? (
            <p className="text-xs text-red-500">Could not load products.</p>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {products.slice(0, 5).map((product) => (
                <Link
                  key={product._id}
                  href={`/product/${product.slug}`}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-24 h-24 rounded overflow-hidden mb-2">
                    <Image
                      src={product.image[0]}
                      alt={product.title}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-800 group-hover:text-customPink">
                    {showingTranslateValue(product.title)}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-xs text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuContent;
