import { ExternalLink, TrendingUp } from "react-feather"
import Link from "next/link"
import { useRouter } from 'next/router'

import { Concert_One } from 'next/font/google'

const cp = Concert_One({
    weight: '400',
    subsets: ['latin'],
})

const Header = () => {

    const router = useRouter()

    const { pathname } = router

    return (
        <nav class="w-full mx-auto max-w-screen-xl p-2 pb-1 mt-0  mb-0 sm:mb-2 md:flex md:items-center md:justify-between">
            <div class=" flex flex-wrap items-center text-xs sm:text-base justify-between mx-auto p-2 w-full">
                <div class="flex">
                    {/* <TrendingUp
                        className="mr-3"
                    /> */}
                    <Link href="/" class={`self-center font-bold mb-3  text-2xl tracking-widest whitespace-nowrap ${cp.className}  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text bg-300% animate-gradient`}>
                        StakedSui.info
                    </Link>
                </div>
                <div class="w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-row p-4 md:p-0 space-x-0 text-xs sm:text-sm  rounded-lg   md:flex-row sm:space-x-8 md:mt-0    ">
                        {/* <li class="mt-auto mb-auto">
                            <Link href="/events" class={`block py-2 pl-3 pr-4 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${pathname === "/events" && "underline font-bold"}`}>Events</Link>
                        </li> */}
                        <li class="mt-auto mb-auto flex flex-row">
                            <Link href="https://blog.legato.finance/simple-way-to-track-suis-staking-rewards-and-stake-aee4237356f0" class={`block py-2 pl-3 pr-4 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                                How to use
                            </Link> 
                        </li>
                        {/* <li class="mt-auto mb-auto hidden md:block">
                            <Link href="/magic-pass" class={`block py-2 pl-3 pr-4 rounded hover:underline hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${pathname === "/magic-pass" && "underline font-bold"}`}>Magic Pass</Link>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header