import type { NextPage } from 'next'
import Head from 'next/head'
import Footer  from '../components/Footer'
import LargeCard from '../components/LargeCard'
import Banner from '../components/Banner'
import MediumCard from '../components/MediumCard'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import fetch from 'isomorphic-unfetch'

const Home: NextPage<{ exploreData: any, cardsData: any }> = ({ exploreData, cardsData }) => {
  return (
    <div className="">
      <Head>
        <title>rent bil</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>explore nearby</h2>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-2'>
            {exploreData?.map((item: any) => (
              <SmallCard img={item.img} distance={item.distance} location={item.location} key={item.location} />
            ))}
          </div>
        </section>
        <section>
  <h2 className='text-4xl font-semibold py-8'>live anywhere</h2>
  <div className='flex space-x-4 overflow-scroll p-3 -ml-3'>
  {cardsData?.map((item: {img: string, title: string}) => (
  <MediumCard key={item.img} img={item.img} title={item.title} />
))}
  </div>
</section>

        <LargeCard 
        img='https://links.papareact.com/4cj'
        title='The Greatest Outdoors'
        description='Wishlists crated by us'
        buttonText='Get inspired'
        />
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then((res) => res.json());
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

export default Home
