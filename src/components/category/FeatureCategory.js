import Image from "next/image";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
// IoChevronForwardSharp is not needed for the desired UI
// import { IoChevronForwardSharp } from "react-icons/io5";

//internal import
import CategoryServices from "@services/CategoryServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";

const FeatureCategory = () => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { showingTranslateValue } = useUtilsFunction();

  const {
    data,
    error,
    isLoading: loading,
  } = useQuery({
    queryKey: ["category"],
    queryFn: async () => await CategoryServices.getShowingCategory(),
  });

  // console.log("category", data);

  const handleCategoryClick = (id, categoryName) => {
    const category_name = categoryName
      .toLowerCase()
      .replace(/[^A-Z0-9]+/gi, "-");
    const url = `/search?category=${category_name}&_id=${id}`;
    router.push(url);
    setIsLoading(!isLoading);
  };

  return (
    <>
      {loading ? (
        <CMSkeleton count={10} height={20} error={error} loading={loading} />
      ) : (
        <div className="flex flex-col items-center justify-center p-6 bg-white mt-20">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Featured Category
          </h2>
          <p className="text-gray-500 mb-8">
            Impressive Collection for your Dream Home
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3  gap-6 w-full max-w-6xl">
            {data[0]?.children?.map((category, i) => (
              <div
                key={i + 1}
                className="flex flex-col items-center cursor-pointer transition-transform duration-200 ease-in-out transform hover:scale-105"
                onClick={() =>
                  handleCategoryClick(
                    category._id,
                    showingTranslateValue(category?.name)
                  )
                }
              >
                <div className="w-48 h-48 relative  rounded-full overflow-hidden flex items-center justify-center border border-gray-200 shadow-md mb-3">
                  {category.icon ? (
                    <Image
                      src={category?.icon}
                      alt={showingTranslateValue(category?.name)}
                      width={200}
                      height={200}
                      className="object-cover cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="https://res.cloudinary.com/ahossain/image/upload/v1655097002/placeholder_kvepfp.png"
                      alt="placeholder category"
                      width={128}
                      height={128}
                      objectFit="cover"
                    />
                  )}
                </div>
                <p className="text-center text-sm font-medium text-gray-700">
                  {showingTranslateValue(category?.name)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureCategory;
