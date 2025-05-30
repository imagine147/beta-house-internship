import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
export default function FindProperties() {
  return (
    <div className="w-full absolute top-96 md:static p-4 bg-[#FFFFFF33]">
      <div className="bg-white flex md:flex-row justify-between pl-2 md:pl-6 rounded-md text-[#353F50] text-[8px] md:text-xs">
        <div className="flex flex-col py-2  gap-2">
          <h3>LOCATION</h3>
          <p className="text-[#787878]">e.g Gbagada</p>
        </div>
        <div className="border-r border-r-[#CAD4DE] m-2"></div>
        <div className="flex flex-col py-2  gap-2">
          <h3>PROPERTY TYPE</h3>
          <p className="text-[#787878]">e.g Duplex, Bedroom Flat</p>
        </div>
        <div className="border-r border-r-[#CAD4DE] m-2"></div>
        <div className="flex flex-col py-2 pr-2 md:pr-0 gap-2">
          <h3>BEDROOM</h3>
          <div className="flex items-center justify-center gap-2">
            <CiCircleMinus />
            <p className="text-[#787878]">0</p>
            <CiCirclePlus />
          </div>
        </div>

        <button className="px-2 md:px-8 py-2 bg-[#3D9970] text-white rounded-r-md cursor-not-allowed">Find Property</button>
      </div>
    </div>
  )
}