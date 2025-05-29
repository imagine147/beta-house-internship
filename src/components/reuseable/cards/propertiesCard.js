import Image from "next/image"
import Icon from "../../../images/Icon.svg"
import Vid from "../../../images/Vector (2).svg"
import Pic from "../../../images/Vector (3).svg"
import { MdCompareArrows } from "react-icons/md";
import { IoBedOutline } from "react-icons/io5";
import { GoShareAndroid } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import Bath from "../../../images/Vector (1).svg"
import { cards } from "@/db"

export default function PropertiesCard() {
  return (
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6 mb-6 text-sm">
        {cards.map((card) => (
          <div className="w-full rounded-b-lg shadow-md relative" key={card.id}>
            <Image className="rounded-t-lg w-full" src={card.image} alt="house-image"/>
            <div className="absolute top-4 left-4 text-white">
              <button className="rounded-md py-2 px-4 bg-[#3D9970]">Featured</button>
            </div>
            <div className="absolute top-4 right-4 text-white">
              <button className="rounded-md py-2 px-4 bg-[#D3D3D3B2]">For Sale</button>
            </div>
            <div className="absolute top-48 md:top-50 lg:top-43 xl:top-44 2xl:top-66 right-4 flex gap-3">
              <span className="p-2 rounded bg-[#878787B2]"><Image src={Icon} alt="link-icon" /></span>
              <span className="p-2 rounded bg-[#878787B2]"><Image src={Vid} alt="vid-icon"/></span>
              <span className="p-2 rounded bg-[#878787B2]"><Image src={Pic} alt="pic-icon"/></span>
            </div>
            <div className="w-full p-4">
              <div className="space-y-2 text-[#666666]">
                <h3 className="text-[#444444] font-bold">{card.title}</h3>
                <span className="flex items-center gap-2"><IoLocationSharp />{card.location}</span>
                <div className="flex gap-6 text-xs">
                  <span className="flex items-center gap-2"><IoBedOutline />{card.bedrooms}</span>
                  <span className="flex items-center gap-2"><Image src={Bath} alt="bathroom-icon" />{card.bath}</span>
                </div>
              </div>
              <div className="border-b border-b-[#E8E8E8] py-2"></div>
              <div className="flex gap-6 items-center pt-4 mb-4">
                <h4 className="text-[#373737] font-bold">{card.price}</h4>
                <div className="flex gap-4 text-[#484848] items-center">
                  <MdCompareArrows  size={20}/>
                  <GoShareAndroid  size={20}/>
                  <CiHeart  size={20}/>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}
