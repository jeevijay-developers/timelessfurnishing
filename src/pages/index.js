import { SidebarContext } from "@context/SidebarContext";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FormalTrouser from "src/formal-trouser/FormalTrouser";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

//internal import
import Layout from "@layout/Layout";
import Banner from "@components/banner/Banner";
import useGetSetting from "@hooks/useGetSetting";
import CardTwo from "@components/cta-card/CardTwo";
import OfferCard from "@components/offer/OfferCard";
import StickyCart from "@components/cart/StickyCart";
import Loading from "@components/preloader/Loading";
import ProductServices from "@services/ProductServices";
import ProductCard from "@components/product/ProductCard";
import MainCarousel from "@components/carousel/MainCarousel";
import FeatureCategory from "@components/category/FeatureCategory";
import AttributeServices from "@services/AttributeServices";
import CMSkeleton from "@components/preloader/CMSkeleton";
import Testimonials from "@components/Testimonials/Testimonials";
import ClassicShirtCard from "@components/classic-shirt/classicShirtCard";
import WhyChooseUs from "@components/whyChooseUs/WhyChooseUs";
import ShirtGallery from "@components/shirt-gallery/ShirtGallery";
import HomeCategoryWrapper from "@components/HomeCategoryWrapper";
import Image from "next/image";
import DealOfTheDay from "@components/dealOfTheDay/DealOfTheDay";
import PremiumFurniture from "@components/premiumFurniture/PremiumFurniture";

const Home = ({ popularProducts, discountProducts, attributes }) => {
  const router = useRouter();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  const { loading, error, storeCustomizationSetting } = useGetSetting();

  const [productsToShow, setProductsToShow] = useState(4);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const [discountedProductsToShow, setDiscountedProductsToShow] = useState(4);
  const [showLoadMoreDiscounted, setShowLoadMoreDiscounted] = useState(true);

  const handleLoadMore = () => {
    const nextProducts = productsToShow + 4;
    setProductsToShow(nextProducts);
    if (nextProducts >= popularProducts.length) {
      setShowLoadMore(false);
    }
  };

  const handleLoadMoreDiscounted = () => {
    const nextProducts = discountedProductsToShow + 4;
    setDiscountedProductsToShow(nextProducts);
    if (nextProducts >= discountProducts.length) {
      setShowLoadMoreDiscounted(false);
    }
  };

  AOS.init();
  useEffect(() => {
    if (router.asPath === "/") {
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [router]);

  return (
    <>
      {isLoading ? (
        <Loading loading={isLoading} />
      ) : (
        <Layout>
          <div className="min-h-screen">
            {/* <StickyCart /> */}
            <div className="bg-white">
              <div className="mx-auto py-1">
                {" "}
                {/* max-w-screen-2xl */}
                <div className="flex w-full">
                  <div className="flex-shrink  lg:block w-full ">
                    <MainCarousel />
                  </div>
                  {/* <div className="w-full hidden lg:flex">
                    <OfferCard />
                  </div> */}
                </div>
                {/* {storeCustomizationSetting?.home?.promotion_banner_status && (
                  <div className="bg-orange-100 px-10 py-6 rounded-lg mt-6">
                    <Banner />
                  </div>
                )} */}
              </div>
            </div>

            {/* feature category's */}
            {storeCustomizationSetting?.home?.featured_status && (
              // <div className="bg-gray-100 lg:py-16 py-10"> removed this part with below part
              <div className="bg-gray-100 ">
                <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                  {/* <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="text-xl lg:text-2xl mb-2 font-serif font-semibold">
                        <CMSkeleton
                          count={1}
                          height={30}
                          loading={loading}
                          data={storeCustomizationSetting?.home?.feature_title}
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={4}
                          height={10}
                          error={error}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home?.feature_description
                          }
                        />
                      </p>
                    </div>
                  </div> */}

                  <FeatureCategory />
                </div>
              </div>
            )}
            {/* popular products */}
            {storeCustomizationSetting?.home?.popular_products_status && (
              <div className=" bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="mb-10 flex ">
                  <div className=" w-full lg:w-2/5">
                    <h2 className="font-[lora] font-thin text-[2rem] ml-4 md:ml-8 lg:ml-12 lg:text-[3.25rem] mb-2">
                      {/* Bestseller */}
                      <CMSkeleton
                        count={1}
                        height={30}
                        loading={loading}
                        data={storeCustomizationSetting?.home?.popular_title}
                      />
                    </h2>
                    {/* <p className="text-base font-sans text-gray-600 leading-6">
                      <CMSkeleton
                        count={5}
                        height={10}
                        error={error}
                        loading={loading}
                        data={
                          storeCustomizationSetting?.home?.popular_description
                        }
                      />
                    </p> */}
                  </div>
                </div>
                <div className="flex">
                  <div className="w-full">
                    {loading ? (
                      <CMSkeleton
                        count={20}
                        height={20}
                        error={error}
                        loading={loading}
                      />
                    ) : (
                      <>
                        <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center px-2 sm:px-4">
                          {popularProducts
                            ?.slice(0, productsToShow)
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                        {showLoadMore && popularProducts.length > 4 && (
                          <div className="flex justify-center mt-8">
                            <button
                              onClick={handleLoadMore}
                              className="bg-customPink text-white px-6 py-3 rounded-md hover:bg-customPinkDark transition-colors duration-300 font-medium text-sm sm:text-base"
                            >
                              View More
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* Deal of the Day Section */}
            <DealOfTheDay />

            {/* Best Month Offer Section */}
            <PremiumFurniture />

            {/* Features Section */}
            <div className="bg-gray-900 py-12">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Feature 1 - Quality */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Manage Quality</h3>
                      <p className="text-gray-300 text-sm">
                        Best Quality Guarantee
                      </p>
                    </div>
                  </div>

                  {/* Feature 2 - Win Prize */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Win ₹500 To Shop
                      </h3>
                      <p className="text-gray-300 text-sm">Enter Now</p>
                    </div>
                  </div>

                  {/* Feature 3 - Support */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.98 5.98 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-1.588-1.588A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.539-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.539a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">
                        Best Online Support
                      </h3>
                      <p className="text-gray-300 text-sm">
                        Hour: 10:00AM - 5:00PM
                      </p>
                    </div>
                  </div>

                  {/* Feature 4 - Money Guarantee */}
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                        <path
                          fillRule="evenodd"
                          d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Money Guarantee</h3>
                      <p className="text-gray-300 text-sm">With A 30 Days</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Partners Section */}
            <div className="bg-gray-50 py-20 my-20">
              <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-8">
                  {/* Left Content */}
                  <div className="lg:col-span-1">
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
                      Our Partners
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      We collaborate with leading brands and trusted partners to
                      bring you the finest furniture and home decor solutions.
                      Our partnerships ensure quality, reliability, and
                      exceptional value for our customers.
                    </p>
                  </div>

                  {/* Right Partners Grid */}
                  <div className="lg:col-span-1">
                    <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                      <Image
                        src="/partners/acer.jpg"
                        alt="Acer Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/samsung.jpg"
                        alt="Samsung Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/nokia.jpg"
                        alt="Nokia Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/sony.jpg"
                        alt="Sony Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/xaomi.jpg"
                        alt="Xiaomi Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/ticwatch.jpg"
                        alt="Ticwatch Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/lemfo.jpg"
                        alt="Lemfo Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/lenovo.jpg"
                        alt="Lenovo Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/huawei.jpg"
                        alt="Huawei Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/adyce.jpg"
                        alt="Adyce Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/nike.jpg"
                        alt="Nike Logo"
                        width={150}
                        height={40}
                      />
                      <Image
                        src="/partners/genius.jpg"
                        alt="Genius Logo"
                        width={150}
                        height={40}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* promotional banner card */}
            {/* {storeCustomizationSetting?.home?.delivery_status && (
              <div className="block mx-auto max-w-screen-2xl">
                <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
                  <div className="lg:p-16 p-6 bg-customPink shadow-sm border rounded-lg">
                    <CardTwo />
                  </div>
                </div>
              </div>
            )} */}
            <HomeCategoryWrapper />
            {/* Classic Plain Shirt */}
            {/* <div>
              <h1 className="px-6 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center">
                Classic Shirts
              </h1>
              <ClassicShirtCard />
            </div>
            <div className="mt-[4.5rem] hover:cursor-pointer">
              <FormalTrouser />
            </div>
            <WhyChooseUs />
            <ShirtGallery />
            <ShirtGallery /> */}

            {/* discounted products */}
            {storeCustomizationSetting?.home?.discount_product_status &&
              discountProducts?.length > 0 && (
                <div
                  id="discount"
                  className="bg-gray-50 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10"
                >
                  <div className="mb-10 flex justify-center">
                    <div className="text-center w-full lg:w-2/5">
                      <h2 className="px-6 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center ">
                        <CMSkeleton
                          count={1}
                          height={30}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_title
                          }
                        />
                      </h2>
                      <p className="text-base font-sans text-gray-600 leading-6">
                        <CMSkeleton
                          count={5}
                          height={20}
                          loading={loading}
                          data={
                            storeCustomizationSetting?.home
                              ?.latest_discount_description
                          }
                        />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row flex-wrap gap-5">
                    <div className="w-full">
                      {loading ? (
                        <CMSkeleton
                          count={20}
                          height={20}
                          error={error}
                          loading={loading}
                        />
                      ) : (
                        <div className="flex flex-wrap gap-2 md:gap-4 lg:gap-6 justify-center px-2 sm:px-4">
                          {discountProducts
                            ?.slice(0, discountedProductsToShow)
                            .map((product) => (
                              <ProductCard
                                key={product._id}
                                product={product}
                                attributes={attributes}
                              />
                            ))}
                        </div>
                      )}
                      {showLoadMoreDiscounted &&
                        discountProducts.length > 4 && (
                          <div className="flex justify-center mt-8">
                            <button
                              onClick={handleLoadMoreDiscounted}
                              className="bg-customPink text-white px-6 py-3 rounded-md hover:bg-customPinkDark transition-colors duration-300 font-medium text-sm sm:text-base"
                            >
                              View More
                            </button>
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              )}
          </div>
          {/* <Testimonials /> */}
        </Layout>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const { cookies } = context.req;
  const { query, _id } = context.query;

  const [data, attributes] = await Promise.all([
    ProductServices.getShowingStoreProducts({
      category: _id ? _id : "",
      title: query ? query : "",
    }),

    AttributeServices.getShowingAttributes(),
  ]);

  return {
    props: {
      attributes,
      cookies: cookies,
      popularProducts: data.popularProducts,
      discountProducts: data.discountedProducts,
    },
  };
};

export default Home;
