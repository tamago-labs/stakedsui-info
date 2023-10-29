 
import Link from "next/link" 
import { ExternalLink } from "react-feather"
import BigNumber from "bignumber.js"
import { useInterval } from "@/hooks/useInterval"
import { useState } from "react"

import { secondsToHHMMSS } from "@/helpers"

const Summary = ({
    validators,
    summary
}) => {

    const epoch = summary ? summary.epoch : 0
        
    const [countdown, setCountdown ] = useState(`0h 0m 0s`)

    const nextEpoch = new Date((new Date(Number(summary.epochStartTimestampMs))).valueOf() + Number(summary.epochDurationMs))

    useInterval( 
        () => { 

            const current = new Date()

            const diffTime = Math.abs(nextEpoch - current);
            const totals = Math.floor(diffTime/1000)

            const { hours, minutes, seconds} = secondsToHHMMSS(totals)

            setCountdown(`${hours}h ${minutes}m ${seconds}s`) 
        }, 
        1000, 
    ) 

    const totalVol = validators.reduce((output, item) => {
        return output + item.volUsd
    }, 0)

    const totalStaked = validators.reduce((output, item) => {
        return output + (Number(`${(BigNumber(item.stakingPoolSuiBalance).dividedBy(BigNumber(1000000000)).toFixed(2))}`) / 1000000)
    }, 0)

    const avrApy = validators.map(item => Number(item.apy) * 100).reduce((a, b) => a + b, 0) / validators.length;
    
    return (
        <div class="w-full mx-auto max-w-screen-xl  flex flex-col justify-between">

            <div class="max-w-screen-sm ml-auto mr-auto mb-2 text-center block sm:hidden">
                <p class="text-base text-white">
                    A dashboard for staking rewards on Sui blockchain
                </p>
                {/* <div class="text-xs py-2">

                    <a href="https://docs.stakedsui.info/guide/staking-sui-for-beginners" target="_blank" className="mr-1 hover:underline">
                        How to staking Sui
                    </a>
                    |
                    <a href="https://docs.stakedsui.info/wiki/what-is-staked-sui" target="_blank" className="ml-1 mr-1 hover:underline">
                        What is Staked Sui?
                    </a>

                </div> */}
            </div>

            <div className="grid grid-cols-5 p-2 gap-5 py-0 sm:py-4">

                <div class="col-span-5 lg:col-span-3">
                    <h1 class="mb-2 text-lg font-extrabold text-white text-center sm:text-left">
                        Epoch {epoch}
                    </h1>
                    <div className="grid grid-cols-9 gap-3">
                        <div className="col-span-6 sm:col-span-3 mt-auto mb-auto">
                            <h2>Next reward distribution in</h2>
                            <h4
                                className="text-lg font-bold  text-white"
                            >
                                {countdown}
                            </h4>
                        </div>
                        <div className="col-span-3 sm:col-span-2 mt-auto mb-auto flex flex-col">
                            <h2  className="ml-auto sm:ml-0">Avg. APY</h2>
                            <h4
                                className="text-lg font-bold  text-white ml-auto sm:ml-0"
                            >{avrApy.toFixed(2)}%</h4>
                        </div>
                        <div className="col-span-5 sm:col-span-2 mt-auto mb-auto">
                            <h2>Volume (24H)</h2>
                            <h4
                                className="text-lg font-bold  text-white"
                            >
                                ${Number(totalVol).toLocaleString()}
                            </h4>
                        </div>
                        <div className="col-span-4 sm:col-span-2 mt-auto mb-auto flex flex-col">
                            <h2 className="ml-auto sm:ml-0">Tokens staked</h2>
                            <h4
                                className="text-lg font-bold  text-white ml-auto sm:ml-0"
                            >
                                {totalStaked.toFixed(1)}M SUI
                            </h4>
                        </div>

                    </div>
                </div>

                <div class="col-span-5 lg:col-span-2">
                    {/* LEGATO */}

                    <a href="https://legato.finance" target="_blank">
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
                    </a>
                </div>
            </div>



        </div>
    )
}


export default Summary