"use client";
import { useState } from "react";
import DiscoverCard from "../reuseable/discoverCard";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function DiscoverProperties() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => setCurrentSlide((prev) => prev + 1);
  const handlePrev = () => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="w-11/12 mx-auto mt-16 relative">
      <div className="text-[#0F1A1E] text-3xl md:text-4xl text-center font-bold mb-4">
        Discover Our Popular Properties
      </div>

      <div className="relative flex items-center">
        {/* Previous Arrow */}
        <button
          onClick={handlePrev}
          className="absolute -left-8 z-10 border shadow-md rounded-full p-4 bg-[#F4F4F4] text-[#555555] hover:bg-gray-100 disabled:opacity-50 hidden xl:block text-2xl"
          disabled={currentSlide === 0}
        >
          <FaLongArrowAltLeft />
        </button>

        {/* Slide container */}
        <div className="w-full overflow-hidden">
          <DiscoverCard currentSlide={currentSlide} />
        </div>

        {/* Next Arrow */}
        <button
          onClick={handleNext}
          className="absolute -right-8 z-10 bg-[#3D9970] border shadow-md rounded-full p-4 text-white hover:bg-gray-100 hidden xl:block text-2xl"
        >
          <FaLongArrowAltRight/>
        </button>
      </div>
    </div>
  );
}
