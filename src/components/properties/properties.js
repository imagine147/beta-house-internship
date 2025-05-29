import { LiaSlidersHSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import PropertiesCard from '../reuseable/cards/propertiesCard';
export default function Properties() {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <div className="w-full flex flex-col gap-2 md:flex-row justify-between text-[#181A20] text-sm md:text-base">
        <div className="flex gap-4">
          <span className="flex items-center gap-2"><LiaSlidersHSolid size={16}/>More Filter</span>
          <p>Showing 1 - 10 of 15 results</p>
        </div>
        <div className="flex gap-2">
          <p className="text-[#717171]">Sort by:</p>
          <span className='flex items-center gap-2'>Default<IoIosArrowDown /></span>
        </div>
      </div>
      <PropertiesCard/>
    </div>
  )
}