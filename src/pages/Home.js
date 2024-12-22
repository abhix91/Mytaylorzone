import React from 'react'
import Explore from '../Components/Explore/Explore'
import Hero from '../Components/Hero/Hero'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offers from '../Components/Offers/Offers'
import Popular from '../Components/Popular/Popular'
import ScrollToUp from '../Components/ScrollToUp/ScrollToUp'

export default function () {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <Explore />
      <NewsLetter />
      <ScrollToUp />
    </div>
  )
}
