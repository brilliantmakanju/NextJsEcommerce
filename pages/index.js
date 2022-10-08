import Head from 'next/head'
import { useEffect, useState } from 'react'
import Slide from '../component/Home/Slide'
import Categories from '../component/Home/Categories'
import FlashDeal from '../component/Home/Flashydeal/FlashDeal'
import TopCate from '../component/Home/TopCate/TopCate'
import NewArrival from '../component/Home/NewArrivals/NewArrival'
import Discount from '../component/Home/Discount/Discount'
import Store from '../component/Home/PhoneStore/Store'
import Announc from '../component/Home/Announcment/Announc'


export default function Home() {

  return (
    <div >
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <section className="home" style={{ marginTop: "10px", marginBottom: "10px", background: '#FFB423' }} >
        <div className="container d_flex">
          <Categories />
          <Slide />
        </div>
      </section>
      <main>
        <FlashDeal />
        <div className="desktop">
          <TopCate />
          <NewArrival />
          <Discount />
          <Store />
          <Announc />
        </div>
        <div className="mobile">

        </div>
      </main>
    </div>
  )
}
