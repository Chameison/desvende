import { Place } from "@/types/type";
import React, { useEffect, useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import SlideDrawer from "./SlideDrawer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Skelton from "./Skelton";

interface PlaceListProps {
  placeList: Place[];
}
function PlaceList({ placeList }: PlaceListProps) {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);

  return (
    <div className="px-[10px] md:px-[120px] mt-7 z-10">

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
        {placeList.map((item, i) => (
          <div className="z-10" key={i} onClick={() => setSelectedPlace(item)}>
            <PlaceItemCard data={item} />
          </div>
        ))}
      </div>
      {selectedPlace?.name ? (
        <div className="fixed top-0  right-0 z-20">
          <SlideDrawer
            data={selectedPlace}
            close={() => setSelectedPlace([])}
          />
        </div>
      ) : null}
      
      {placeList?.length==0? <div
        className="grid 
        grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4
        gap-5"
      >
        {[1,2,3,4,5,6,7].map((item,index)=>(
            <Skelton key={index}/>
        ))}
        </div>:null}
        
  
    </div>
  );
}

export default PlaceList;
