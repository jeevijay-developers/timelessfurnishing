import { useContext, useState, Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useCart } from "react-use-cart";
import { IoSearchOutline } from "react-icons/io5";
import { FaShoppingCart, FaUser, FaBell, FaRegUser } from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "@tanstack/react-query";
import CategoryServices from "@services/CategoryServices";
import { FiAlignLeft, FiBell, FiShoppingCart } from "react-icons/fi";

// Internal Imports
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";
import NavbarPromo from "@layout/navbar/NavbarPromo";
import CartDrawer from "@components/drawer/CartDrawer";
import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";
import CategoryDrawer from "@components/drawer/CategoryDrawer";
import MegaMenuContent from "./MegaMenuContent";
import NavbarPagesPopover from "./NavbarPagesPopover";


const Navbar = () => {
  const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
    queryKey: ["navbarCategories"],
    queryFn: CategoryServices.getShowingCategory,
  });

  const { t, lang } = useTranslation("common");
  const [searchText, setSearchText] = useState("");
  const { toggleCartDrawer, toggleCategoryDrawer } = useContext(SidebarContext);
  const { totalItems } = useCart();
  const router = useRouter();
  const { showingTranslateValue } = useUtilsFunction();
  const { isLoading, setIsLoading } = useContext(SidebarContext);
  // State to manage which main category is being hovered
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const userInfo = getUserSession();
  const { storeCustomizationSetting } = useGetSetting();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      router.push(`/search?query=${searchText}`, null, { scroll: false });
      setSearchText("");
      handleLogEvent("search", `searched ${searchText}`);
    } else {
      router.push(`/`, null, { scroll: false });
      setSearchText("");
    }
  };

  // Timer to add a delay before the menu disappears
  let leaveTimer;
  const handleMouseLeave = () => {
    leaveTimer = setTimeout(() => {
      setHoveredCategory(null);
    }, 400); 
  };

  const handleMouseEnter = (category) => {
    clearTimeout(leaveTimer);
    setHoveredCategory(category);
  };

  return (
    <>
      <CartDrawer />
      <div className="top-0 z-40" onMouseLeave={handleMouseLeave}>
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10 relative">
          <div className="flex flex-col items-center py-1">
            {/* Top Section - Logo and Icons */}
            <div className="w-full flex items-center justify-between py-2">
              {/* Left Section - Logo and Drawer */}
              <div className="flex items-center space-x-4">
                <button
                  aria-label="Bar"
                  onClick={toggleCategoryDrawer}
                  className="lg:hidden text-xl text-black"
                >
                  <FiAlignLeft className="w-6 h-6" />
                </button>
                <Link href="/" className="block w-24 sm:w-28">
                  <img
                    width={100}
                    height={100}
                    style={{ width: "15rem", maxWidth: "100rem" }}
                    priority
                    src="/logo/gray-logo.png"
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Right Section - Icons */}
              <div className="flex items-center space-x-3 lg:space-x-10">
                {/* this code enables drawer */}
                <CategoryDrawer className="w-6 h-6 drop-shadow-xl" />
                {/* pages */}
                <NavbarPagesPopover />
                <button
                  className="text-black text-2xl font-bold"
                  aria-label="Alert"
                >
                  <FiBell className="w-6 h-6" />
                </button>

                <button
                  aria-label="Total"
                  onClick={toggleCartDrawer}
                  className="relative text-black text-2xl font-bold"
                >
                  <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {totalItems}
                  </span>
                  <FiShoppingCart className="w-6 h-6" />
                </button>
                <button
                  className="text-black text-2xl hover:cursor-pointer font-bold hidden lg:block"
                  aria-label="Login"
                >
                  {userInfo?.image ? (
                    <Link
                      href="/user/dashboard"
                      className="relative top-1 w-6 h-6"
                    >
                      <Image
                        width={29}
                        height={29}
                        src={userInfo.image}
                        alt="user"
                        className="bg-white rounded-full"
                      />
                    </Link>
                  ) : userInfo?.name ? (
                    <Link
                      href="/user/dashboard"
                      className="leading-none font-bold font-serif block"
                    >
                      {userInfo.name[0]}
                    </Link>
                  ) : (
                    <Link href="/auth/login">
                      <FaRegUser className="w-6 h-6" />
                    </Link>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="hidden lg:flex items-center justify-center py-3 bg-white w-full z-[41] border-t border-b relative">
          {!isCategoryLoading &&
            categoryData &&
            categoryData
              .flatMap((cat) =>
                showingTranslateValue(cat.name)?.toLowerCase() === "home"
                  ? cat.children || []
                  : [cat]
              )
              .map((mainCategory) => (
                <div
                  key={mainCategory._id}
                  className="relative px-4 py-2"
                  onMouseEnter={() => handleMouseEnter(mainCategory)}
                >
                  <Link
                    href={`/search?category=${mainCategory.slug}&_id=${mainCategory._id}`}
                    className="font-montserrat group inline-flex items-center text-[#192A56] hover:text-black-200 text-lg font-medium focus:outline-none  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {showingTranslateValue(mainCategory.name)}
                  </Link>
                </div>
              ))}

          {/* Conditionally render the Mega Menu outside the map */}
          {hoveredCategory && hoveredCategory.children.length > 0 && (
            <div
              onMouseEnter={() => handleMouseEnter(hoveredCategory)}
              onMouseLeave={handleMouseLeave}
            >
              <MegaMenuContent category={hoveredCategory} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
