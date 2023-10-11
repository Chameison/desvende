import { Place } from '@/types/type'
import React from 'react'
interface PlaceListProps  {
  placeList: Place[]
}
function PlaceList({placeList}: PlaceListProps) {
  return (
    <div className='px-[10px] md:px-[10px] mt-7'>
      <h2 className='text-[20px] font-bold'>Busque</h2>
    </div>
  )
}

export default PlaceList