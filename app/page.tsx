'use client'

import Hero from '@/components/Hero'
import PlaceList from '@/components/PlaceList'
import { useEffect, useState } from 'react'

export default function Home() {
  const [placeList, setPlaceList] = useState([])
  useEffect(() => {
    getPlaceList()
  }, [])
  const getPlaceList = async () => {
    const result = await fetch("/api/google-place-api?q=Mercados rio branco")
    const data = await result.json()
    setPlaceList(data.response.results)

  }
  console.log(placeList)
  return (
    <div>
      <Hero />

      {placeList? <PlaceList placeList={placeList} />: null}
    </div>
  )
}
