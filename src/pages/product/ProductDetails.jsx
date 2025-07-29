import CMSkeleton from "@components/preloader/CMSkeleton";
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductDetails = ({ description, title = "Product Description" }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(description);
  return (
    <div className="mt-6 border border-gray-200 rounded-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 text-left font-semibold text-gray-800 focus:outline-none"
      >
        <span>{title}</span>
        {isOpen ? (
          <FiMinus className="text-xl" />
        ) : (
          <FiPlus className="text-xl" />
        )}
      </button>

      {isOpen && (
        <div
          className="px-4 py-3 text-sm leading-6 text-gray-600 md:leading-7 bg-white border-t border-gray-200"
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      )}
    </div>
  );
};

export default ProductDetails;
