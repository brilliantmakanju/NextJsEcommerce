import Head from 'next/head'
import { useEffect, useState } from 'react'
import Slide from '../component/Home/Slide'
import Categories from '../component/Home/Categories'
import FlashDeal from '../component/Home/Flashydeal/FlashDeal'
import TopCate from '../component/Home/TopCate/TopCate'
import NewArrival from '../component/Home/NewArrivals/NewArrival'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <section className="home" style={{ marginTop: "10px", marginBottom: "10px" , background:'yellow'}} >
        <div className="container d_flex">
          <Categories />
          <Slide />
        </div>
      </section>
      <main>
        <FlashDeal />
        <TopCate />
        <NewArrival />
      </main>
    </div>
  )
}
