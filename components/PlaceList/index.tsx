import { Place } from '@/types/type'
import React from 'react'
import PlaceItemCard from '../PlaceItemCard'
interface PlaceListProps  {
  placeList: Place[]
}
function PlaceList({placeList}: PlaceListProps) {
  return (
    <div className='px-[10px] md:px-[10px] mt-7 z-10'>
      <h2 className='text-[20px] font-bold'>Busque</h2>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        {placeList.map((item, i) => (
          <div className='z-10' key={i}>
            <PlaceItemCard data={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PlaceList