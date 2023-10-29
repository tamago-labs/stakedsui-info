import Link from "next/link"
import { ExternalLink } from "react-feather"

export const StakedSuiInfoJumbotron = () => {
    return (
        <div class="w-full mx-auto max-w-screen-xl p-2 pb-1 pt-0 flex flex-col justify-between">
            <div className="grid grid-cols-7  gap-5">
                <div className="col-span-7 lg:col-span-3 flex">
                    {/* <h1 class="mb-2 text-xl sm:text-2xl font-extrabold text-white">
                        Sui APY Tracker{` `}📈
                    </h1> */}
                    <div className="mt-auto mb-auto">
                        <p class="text-sm text-white">
                            A simple dashboard to track staking rewards on Sui blockchain
                        </p>
                        <div class="text-xs py-2">

                            <a href="https://docs.stakedsui.info/guide/staking-sui-for-beginners" target="_blank" className="mr-1 hover:underline">
                                How to staking Sui
                            </a>
                            |
                            <a href="https://docs.stakedsui.info/wiki/what-is-staked-sui" target="_blank" className="ml-1 mr-1 hover:underline">
                                What is Staked Sui?
                            </a>

                            {/* |
                        <a href="https://docs.stakedsui.info/guide/guide-to-managing-staked-sui-objects" target="_blank" className="ml-1 hover:underline">
                            Guide to Managing Staked Sui
                        </a> */}
                        </div>
                    </div>

                </div>
                <div className="col-span-4 lg:col-span-4">
                    {/* <a href="https://legato.finance" target="_blank">
                        <div class="  w-full rounded-md bg-gradient-to-r from-sky-400 via-rose-400 to-lime-400 p-[2px]">
                            <div class="flex pt-1 pb-1 h-full w-full  bg-[#001237] back ">
                                <div className="w-full grid grid-cols-10 p-2 gap-1">
                                    <div className="col-span-6 flex">
                                        <div className="m-auto text-sm p-1 ml-0">

                                            <h2 class="text-white text-sm sm:text-base flex flex-row">
                                                Visit Legato
                                                <ExternalLink className="ml-2 hidden sm:block" />
                                            </h2>

                                            <p class="text-xs mt-1">
                                                Locking in your APY of Staked SUI assets obtained from any validator
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-span-4 flex">
                                        <img src="/legato-screenshot-1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a> */}





                    {/* <div className="col-span-2 sm:col-span-1">
                            <div className="grid grid-cols-6 py-2 gap-5">
                                <div className="col-span-4 mt-auto mb-auto">
                                    <h2>Volume (24H)</h2>
                                    <h4
                                        className="text-sm font-bold  text-white"
                                    >
                                        $102,928.98
                                    </h4>
                                </div>
                                <div className="col-span-2 mt-auto mb-auto flex flex-col">
                                    <h2 className="ml-auto">Tokens staked</h2>
                                    <h4
                                        className="text-sm font-bold ml-auto text-white"

                                    >$708.1M</h4>
                                </div>
                            </div>
                        </div> */}

                    <div className="grid grid-cols-10 p-2 gap-5">
                        <div className="col-span-2 mt-auto mb-auto">
                            <h2>Volume (24H)</h2>
                            <h4
                                className="text-sm font-bold  text-white"
                            >
                                $102,928.98
                            </h4>
                        </div>
                        <div className="col-span-2 mt-auto mb-auto">
                            <h2>Tokens staked</h2>
                            <h4
                                className="text-sm font-bold  text-white"
                            >
                                708.1M SUI
                            </h4>
                        </div>
                        <div className="col-span-4 mt-auto mb-auto">
                            <h2>Next reward distribution in</h2>
                            <h4
                                className="text-sm font-bold  text-white"
                            >
                                10h 40m 20s
                            </h4>
                        </div>
                        <div className="col-span-2 mt-auto mb-auto flex flex-col">
                            <h2 className="ml-auto">Avg APY</h2>
                            <h4
                                className="text-2xl sm:text-4xl ml-auto tracking-widest font-extrabold text-white"
                            >4.15%</h4>
                        </div>
                    </div>




                </div>
            </div>
        </div >
    )
}

export const MagicPassJumbotron = () => {
    return (
        <div class="w-full mx-auto max-w-screen-xl p-2 pb-1 md:flex md:items-center md:justify-between">

            <section class="bg-[#001237]  border rounded-md border-[#abd7ff]">
                <div class="py-8 px-4 mx-auto max-w-screen-xl  lg:py-16">
                    <div className="grid grid-cols-5 p-2 gap-5">
                        <div className="col-span-3">
                            <h1 class="mb-4 text-4xl font-extrabold    md:text-5xl lg:text-6xl  text-white">
                                MAGIC PASS NFT COLLECTIONS
                            </h1>
                            <p class="mb-4 text-lg font-normal text-[#abd7ff] lg:text-xl ">
                                A pass that is the gateway to the RetroWeb3.games platform enables you to stake to receive game items for playing or trading
                            </p>
                            <div class="flex flex-row mb-6 ">
                                <h2 class="text-2xl font-extrabold text-white mt-auto mb-auto">
                                    <span
                                        class="text-2xl font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
                                    >
                                        12
                                    </span> / 1000 MINTED
                                </h2>
                            </div>

                            <div class=" mb-4 flex flex-row ">
                                <Link href="/magic-pass" class="inline-flex justify-center items-center py-3 px-8 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                    Mint Now
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-2">
                            <img src="./illustration-jumbotron-magic-pass.png" class="w-3/4 m-auto" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

