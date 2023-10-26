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

const mont = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main
      className={`${mont.className}`}
    >
      <Header />
      <StakedSuiInfoJumbotron/>
      <Dashboard/>
      <AllValidators/>
      <Footer />
    </main>
  )
}
