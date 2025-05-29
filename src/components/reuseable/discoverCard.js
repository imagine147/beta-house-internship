import Image from "next/image";
import { descs } from "@/db";
import { CiLocationOn } from "react-icons/ci";

export default function DiscoverCard() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  py-16 flex-wrap gap-6">
      {descs.map((desc) => (
        <div className="relative w-full mx-auto rounded-lg overflow-hidden shadow-lg" key={desc.id}>
          <Image src={desc.image} alt={desc.title} className="object-cover w-full h-[412px]" />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-5 py-4 text-white">
            <p className="text-base font-semibold">{desc.title}</p>
            <p className="text-sm mb-1">{desc.price}</p>
            <div className="flex gap-2 text-sm mb-1">
              <p>{desc.room}</p>
              <div className="border-r-2 border-r-[#CAD4DE] h-auto" />
              <p>{desc.bath}</p>
              <div className="border-r-2 border-r-[#CAD4DE] h-auto" />
              <p>{desc.ft}</p>
            </div>
            <span className="flex items-center gap-1"><CiLocationOn /><p className="text-xs">{desc.location}</p></span>
          </div>
        </div>
      ))}
    </div>
  );
}
