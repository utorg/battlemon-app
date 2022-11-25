import Head from 'next/head'
import Header from '../components/header'
import Loader from '../components/Loader'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const HomeScene = dynamic(() => import('../scenes/HomeScene'), {
  suspense: true,
})

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Suspense fallback={<Loader />}>
        <HomeScene />
      </Suspense>
    </>
  )
}
