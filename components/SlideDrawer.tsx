import { Place } from "@/types/type";
import Image from "next/image";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsFillMapFill, BsFillShareFill } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";

interface SlideDrawerProps {
  close: any;
  data: any;
}
const BASE_URL_PHOTO =
  "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800";

function SlideDrawer({ close, data }: SlideDrawerProps) {
  const onDirectionClick=()=>{
    window.open('https://www.google.com/maps/search/?api=1&query='
    +data.name+data.formatted_address)
}
  return (
    <div className="h-screen  w-screen  md:w-[400px] bg-white shadow-md p-5 z-20 sticky">
      <div className="w-full flex justify-end">
        <button
          className="bg-red-400 cursor-pointer hover:bg-red-600 px-2 rounded-sm text-white"
          onClick={() => close()}
        >
          x
        </button>
      </div>
      <div>
        <h2
          className="line-clamp-2 text-lg font-medium 
        mb-3"
        >
          {data.name}
        </h2>
      </div>
      <div>
        <Image
          src={
            BASE_URL_PHOTO +
            "&photo_reference=" +
            data?.photos[0]?.photo_reference +
            "&key=" +
            process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY
          }
          alt="placeholder"
          width={200}
          height={80}
          className="w-full max-h-[250px] h- object-fill rounded-xl"
        />
        <div className="flex gap-2 mt-3">
          <CiLocationOn className="text-red-500" />
          <h2
            className="text-[12px]
             text-gray-400 line-clamp-2"
          >
            {data?.formatted_address}
          </h2>
        </div>
      </div>
      <div className="flex gap-2 mt-3">
        <AiOutlineStar className="text-red-500" />

        <h2
          className=" flex text-[12px]
             text-gray-400 line-clamp-2 tracking-wider"
        >
          {data.rating}
          <div className="flex items-center mx-1">
            (<FaUserFriends />
            {data.user_ratings_total})
          </div>
        </h2>
      </div>{" "}
      <div className="mt-5 flex gap-5">
        <button
          onClick={() => onDirectionClick()}
          className="flex items-center gap-2 p-1 px-3
                 bg-red-500 rounded-full text-white
                 hover:scale-105 transition-all"
        >
          <BsFillMapFill />
          <span>Direction</span>
        </button>
        <button
          className="flex items-center gap-2 p-1 px-3
                 bg-red-500 rounded-full text-white
                 hover:scale-105 transition-all"
        >
          <BsFillShareFill />
          <span>Share</span>
        </button>
      </div>
      <div className="mt-5">
        <iframe
                width={450}
                height={250}
            loading="lazy"
            className="w-full h-[200px] rounded-lg"
            src={"https://www.google.com/maps/embed/v1/place?key="
            +process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY+
            "&q="+data.formatted_address
            }>
            </iframe>
        </div>
    </div>
  );
}

export default SlideDrawer;
