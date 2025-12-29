"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const PremiumFurniture = () => {
  const router = useRouter();
  return (
    <div>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Best Month offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Discover premium furniture collections with exceptional quality
              and modern design. Transform your space with our curated selection
              of contemporary pieces.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Main Feature */}
            <div className="lg:col-span-2 relative">
              <div className="bg-gray-50 rounded-3xl p-8 lg:p-12 min-h-[500px] flex items-center">
                <div className="w-full flex flex-col lg:flex-row items-center gap-8">
                  {/* Content */}
                  <div className="lg:w-1/2 text-center lg:text-left">
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                      Premium Furniture
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 uppercase tracking-wide">
                      NEW AUTUMN ARRIVAL 2025
                    </p>
                    <button
                      className="bg-customPink hover:bg-customPinkDark text-white px-8 py-3 rounded-full font-medium transition-colors duration-300"
                      onClick={() =>
                        router.push(
                          "/search?category=sofas&_id=6880b7acab4acb2fb84019fa"
                        )
                      }
                    >
                      Explore Collection
                    </button>
                  </div>

                  {/* Main Product Image */}
                  <div className="lg:w-1/2 relative">
                    <div className="relative">
                      {/* Green decorative circle */}
                      <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 w-32 h-32 lg:w-48 lg:h-48 bg-green-200 rounded-full opacity-60 -z-10"></div>
                      {/* Placeholder for main chair image */}
                      <div className="w-80 h-80 bg-gray-200 rounded-lg flex items-center justify-center relative">
                        <Image
                          src="/chairs/chair1.jpg"
                          alt="Main Chair"
                          fill
                          sizes="(min-width: 1024px) 20rem, 16rem"
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Products */}
            <div className="space-y-6 flex flex-col justify-around">
              {/* Top Product Card */}
              <div className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="w-28 h-36 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 text-center relative">
                    <Image
                      src="/chairs/chair2.jpg"
                      alt="Main Chair"
                      fill
                      sizes="112px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                {/* Green decorative element */}
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-green-200 rounded-full opacity-40"></div>
              </div>

              {/* Bottom Product Card */}
              <div className="bg-gray-50 rounded-2xl p-6 relative overflow-hidden">
                <div className="flex items-center gap-4">
                  <div className="w-28 h-36 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500 text-center relative">
                    <Image
                      src="/chairs/chair3.jpg"
                      alt="Sofa"
                      fill
                      sizes="112px"
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                {/* Blue decorative element */}
                <div className="absolute -right-8 -top-8 w-20 h-20 bg-blue-200 rounded-full opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumFurniture;
