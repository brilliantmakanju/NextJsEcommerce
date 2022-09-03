import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../component/Home/Header'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="assest/LoginSidePic.jpeg" />
      </Head>
      <Header />
    </div>
  )
}
