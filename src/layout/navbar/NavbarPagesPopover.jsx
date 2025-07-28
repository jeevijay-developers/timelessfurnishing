import { useContext, useState, Fragment } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import useTranslation from "next-translate/useTranslation";
import { useQuery } from "@tanstack/react-query";
import CategoryServices from "@services/CategoryServices";

import {
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiPocket,
  FiPhoneIncoming,
} from "react-icons/fi";
// Internal Imports
import { getUserSession } from "@lib/auth";
import useGetSetting from "@hooks/useGetSetting";
import { handleLogEvent } from "src/lib/analytics";

import { SidebarContext } from "@context/SidebarContext";
import useUtilsFunction from "@hooks/useUtilsFunction";


const NavbarPagesPopover = () => {
 const { data: categoryData, isLoading: isCategoryLoading } = useQuery({
   queryKey: ["navbarCategories"],
   queryFn: CategoryServices.getShowingCategory,
 });


 const router = useRouter();
 const { showingTranslateValue } = useUtilsFunction();
 const { isLoading, setIsLoading } = useContext(SidebarContext);
 // State to manage which main category is being hovered

 const { storeCustomizationSetting } = useGetSetting();

 
  return (
    <div>
      <Popover className="relative z-50 hidden md:block font-serif">
        <Popover.Button className="group inline-flex items-center py-2 text-sm font-medium hover:text-emerald-600 focus:outline-none">
          <span>
            {showingTranslateValue(storeCustomizationSetting?.navbar?.pages)}
          </span>
          <ChevronDownIcon
            className="ml-1 h-3 w-3 group-hover:text-emerald-600"
            aria-hidden="true"
          />
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute z-10 -ml-1 mt-1 transform w-screen max-w-xs bg-white">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-y-scroll flex-grow scrollbar-hide w-full h-full">
              <div className="relative grid gap-2 px-6 py-6">
                {storeCustomizationSetting?.navbar?.faq_status && (
                  <span className="p-2 font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                    <div className="w-full flex">
                      <FiHelpCircle className="my-auto" />
                      <Link
                        href="/faq"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.faq
                        )}
                      </Link>
                    </div>
                  </span>
                )}

                {storeCustomizationSetting?.navbar?.about_menu_status && (
                  <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                    <div className="w-full flex">
                      <FiUsers className="my-auto" />
                      <Link
                        href="/about-us"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.about_us
                        )}
                      </Link>
                    </div>
                  </span>
                )}

                {storeCustomizationSetting?.navbar?.contact_menu_status && (
                  <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                    <div className="w-full flex">
                      <FiPhoneIncoming className="my-auto" />
                      <Link
                        href="/contact-us"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.contact_us
                        )}
                      </Link>
                    </div>
                  </span>
                )}

                {storeCustomizationSetting?.navbar?.privacy_policy_status && (
                  <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                    <div className="w-full flex">
                      <FiPocket className="my-auto" />
                      <Link
                        href="/privacy-policy"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.privacy_policy
                        )}
                      </Link>
                    </div>
                  </span>
                )}

                {storeCustomizationSetting?.navbar
                  ?.term_and_condition_status && (
                  <span className="p-2  font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                    <div className="w-full flex">
                      <FiFileText className="my-auto" />
                      <Link
                        href="/terms-and-conditions"
                        onClick={() => setIsLoading(!isLoading)}
                        className="relative inline-flex items-center font-serif ml-2 py-0 rounded text-sm font-medium  hover:text-emerald-600"
                      >
                        {showingTranslateValue(
                          storeCustomizationSetting?.navbar?.term_and_condition
                        )}
                      </Link>
                    </div>
                  </span>
                )}
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};

export default NavbarPagesPopover;
