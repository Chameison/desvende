'use client'

import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [placeList, setPlaceList] = useState([])
  useEffect(() => {
    getPlaceList('Praias Brasil')
  }, [])
  const getPlaceList = async (value:string) => {
    setPlaceList([])
    const result = await fetch("/api/google-place-api?q="+value)
    const data = await result.json()
    setPlaceList(data.response.results)

  }
  console.log(placeList)
  return (
    <div>
      <Hero  userInput={(value:string)=>getPlaceList(value)}/>

      {placeList? <PlaceList placeList={placeList} />: null}
    </div>
  )
}
