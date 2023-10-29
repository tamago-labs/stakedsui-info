import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { StakedSuiInfoJumbotron } from '@/components/jumbotron'
import MyStaking from '@/components/myStaking'
import AllItems from '@/components/allItems'
import HowToStake from '@/components/howToStake'
import RecentListing from '@/components/recentListing'
import Dashboard from '@/components/Dashboard'
import AllValidators from '@/components/AllValidators'
import Summary from '@/components/Summary'
import useSui from '@/hooks/useSui'
import Faq from '@/components/Faq'

const mont = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function Home({ summary, validators }) {

  return (
    <main
      className={`${mont.className}`}
    >
      <Header />
      <Summary 
        validators={validators}
        summary={summary}
      />
      {/* <StakedSuiInfoJumbotron/> */}
      {/* <Dashboard/> */}
      <AllValidators 
        validators={validators}
        summary={summary}
      />
      <Faq/>
      <Footer />
    </main>
  )
}

export async function getStaticProps() {

  const  { fetchDashboard } = useSui()

  const { summary, validators } = await fetchDashboard()

  return {
    props: {
      summary,
      validators
    },
    revalidate: 600
  };
}