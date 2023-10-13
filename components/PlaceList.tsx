import { Place } from "@/types/type";
import React, { useEffect, useState } from "react";
import PlaceItemCard from "./PlaceItemCard";
import SlideDrawer from "./SlideDrawer";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface PlaceListProps {
  placeList: Place[];
}
function PlaceList({ placeList }: PlaceListProps) {
  const [selectedPlace, setSelectedPlace] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the place list data
    // Once the data is fetched, set isLoading to false
    setIsLoading(false);
  }, [placeList]);

  return (
    <div className="px-[10px] md:px-[10px] mt-7 z-10">
      <h2 className="text-[20px] font-bold">Busque</h2>
      {isLoading && (
        <div className="w-full flex justify-center items-center mt-40 text-orange-600 ">
          <AiOutlineLoading3Quarters
            className="animate-spin text-2xl mx-auto"
            size={100}
          />
        </div>
      )}
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
    </div>
  );
}

export default PlaceList;
