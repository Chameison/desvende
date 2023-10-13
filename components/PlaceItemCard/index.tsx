import React from 'react'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { AiOutlineStar } from 'react-icons/ai'

const BASE_URL_PHOTO = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=800"

function PlaceItemCard({ data }: any) {
  return (
    <div className='w-full z-10 border-[1px] 
    rounded-xl shadow-md hover:scale-105 transition-all cursor-pointer'>
      {data?.photos ? <Image src={BASE_URL_PHOTO +
        "&photo_reference=" + data?.photos[0]?.photo_reference +
        "&key=" + process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY} alt='placeholder'
        width={200} height={80}
        className='w-full h-[150px] object-cover rounded-t-xl' /> :
        <Image src="/placeholder.jpg" alt='placeholder'
          width={200} height={80}
          className='w-full h-[150px] object-cover rounded-t-xl' />}
      <div className='p-2'>
        <h2 className='line-clamp-2'>{data.name}</h2>
        <div className='flex gap-2 mt-3'>
          <CiLocationOn className='text-red-500' />
          <h2 className='text-[12px]
             text-gray-400 line-clamp-2'>{data.formatted_address}</h2>
        </div>
        <div className='flex gap-2 mt-3'>
          <AiOutlineStar className='text-red-500' />

          <h2 className='text-[12px]
             text-gray-400 line-clamp-2 tracking-wider'>{data.rating} ({data.user_ratings_total})</h2>
        </div>
      </div>
    </div>
  )
}

export default PlaceItemCard