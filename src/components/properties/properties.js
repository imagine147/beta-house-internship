import { LiaSlidersHSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";
import PropertiesCard from '../reuseable/cards/propertiesCard';
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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
      <div className="w-full flex justify-center items-center mt-8 gap-4 text-[#464646]">
        <span className="text-[#60697A75]"><MdOutlineKeyboardArrowLeft size={24} /></span>
        <p className="rounded px-2 hover:bg-[#3D9970] hover:text-white cursor-pointer">1</p>
        <p className="rounded px-2 hover:bg-[#3D9970] hover:text-white cursor-pointer">2</p>
        <p className="rounded px-2 hover:bg-[#3D9970] hover:text-white cursor-pointer">3</p>
        <p className="rounded px-2 hover:bg-[#3D9970] hover:text-white cursor-pointer">4</p>
        <span className="text-[#60697A]"><MdOutlineKeyboardArrowRight size={24} /></span>
      </div>
    </div>
  )
}