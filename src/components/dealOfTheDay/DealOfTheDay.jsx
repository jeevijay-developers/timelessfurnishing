"use client"
import { useRouter } from 'next/router';
import React from 'react'

const DealOfTheDay = () => {
  const router = useRouter()
  return (
    <div>
      <div className="bg-gray-100 py-16">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Left side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative">
                <img
                  src="/cta/offerOfTheDay.png"
                  alt="Deal of the Day"
                  className="w-64 h-64 lg:w-96 lg:h-80 object-contain"
                />
              </div>
            </div>

            {/* Right side - Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                DEAL
                <br />
                OF THE DAY
              </h2>
              <div className="w-16 h-1 bg-gray-400 mb-6 mx-auto lg:mx-0"></div>

              <h3 className="text-lg lg:text-xl font-semibold text-gray-700 mb-4 uppercase tracking-wide">
                CLICK SHOP NOW FOR ALL DEAL OF THE PRODUCT
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed text-sm lg:text-base">
                Discover our exclusive deal of the day! Enjoy unbeatable prices
                on premium furniture and home decor. Shop now to upgrade your
                space with style and comfort. Hurry, this offer is available for
                a limited time only!
              </p>

              <button
                className="bg-customPink hover:bg-customPinkDark text-white px-8 py-3 rounded-md font-medium transition-colors duration-300 uppercase tracking-wide"
                onClick={() =>
                  router.push(
                    "/search?category=living&_id=6880b8e2ab4acb2fb8401a01"
                  )
                }
              >
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealOfTheDay
