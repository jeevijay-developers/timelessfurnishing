import useUtilsFunction from "@hooks/useUtilsFunction";

const Price = ({ product, price, card, currency, originalPrice }) => {
  const { getNumberTwo } = useUtilsFunction();

  // Check if we have actual price values
  const currentPrice = price || product?.prices?.price;
  const actualOriginalPrice = originalPrice || product?.prices?.originalPrice;

  return (
    <div className="font-serif product-price font-bold">
      <>
        {actualOriginalPrice > currentPrice && (
          <span className="relative inline-block mr-1">
            <span className="relative inline-block mr-2 lg:mr-3 text-[10px] md:text-[12px] lg:text-sm text-gray-400 space-x-2 font-medium">
              MRP
              <div className="inline-flex items-center line-through ml-2">
                <span>{currency}</span>
                <span>{getNumberTwo(actualOriginalPrice)}</span>
              </div>
            </span>
          </span>
        )}
        <span
          className={
            card
              ? "inline-block text-lg font-semibold text-gray-800"
              : "inline-block text-2xl"
          }
        >
          {currency}
          {getNumberTwo(currentPrice)}
        </span>
      </>
    </div>
  );
};

export default Price;
