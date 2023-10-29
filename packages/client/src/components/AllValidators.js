import { PanelContext } from "@/hooks/usePanel"
import { useContext } from "react"
import { ArrowRight } from "react-feather"
import BigNumber from "bignumber.js"


const ValidatorRow = ({
    index,
    data,
    epoch
}) => {

    const { name, stakingPoolSuiBalance, apy, commissionRate, imageUrl, stakingPoolActivationEpoch, volUsd, nextEpochStake } = data

    const totalStaked = (Number(`${(BigNumber(stakingPoolSuiBalance).dividedBy(BigNumber(1000000000)).toFixed(2))}`) / 1000000).toFixed(1)
    const nextStaked = Number(`${(BigNumber(nextEpochStake).dividedBy(BigNumber(1000000000)).toFixed(2))}`)
    
    const parsedApy = Number(`${BigNumber(apy).multipliedBy(100)}`).toFixed(2)

    const sinceEpoch = Number(epoch) - Number(stakingPoolActivationEpoch)

    const rank = index + 1

    let since = new Date();
    since.setDate(since.getDate() - sinceEpoch);

    const { showValidatorPanel } = useContext(PanelContext)

    const openPanel = (data) => {
        showValidatorPanel(data)
    }

    return (
        <tr key={index} onClick={() => openPanel({
            rank,
            totalStaked,
            parsedApy,
            since,
            nextStaked,
            ...data
        })} class="border-b border-[#abd7ff] text-white font-bold text-sm sm:text-lg cursor-pointer">
            <th scope="row" class="pl-4 hidden sm:table-cell">
                {rank}
            </th>
            <td class=" flex flex-row py-3">
                <div class="relative h-5 sm:h-10 w-5 sm:w-10">
                    <img
                        class="h-full w-full rounded-full object-cover object-center"
                        src={imageUrl}
                        alt=""
                    />
                </div>
                <div className="ml-4 mt-auto mb-auto">
                    {name}
                </div>
            </td>
            <td class="px-6 py-2 text-right">
                ${Number(volUsd).toLocaleString()}
            </td>
            <td class="px-6 py-2 text-right">
                {totalStaked}M{` `}<span class="hidden sm:inline-block">SUI</span>
            </td>

            <td class="px-6 py-2 text-right">
                {parsedApy}%
            </td>
            <td class="px-6 py-2 text-right">
                {(Number(commissionRate) / 100).toFixed(2)}%
            </td>
            <td class="px-6 py-2 text-right text-sm sm:text-base">
                {since.toLocaleDateString()}
            </td>
            {/* <td class="py-2">
                <button onClick={() => openPanel(name)} type="button" class="text-[#001237] font-normal text-xs flex flex-row justify-center items-center bg-[#abd7ff]  ml-auto   rounded  px-4 py-2 focus:outline-none">
                    More<ArrowRight className="ml-1" size={14} />
                </button>
            </td> */}
        </tr>
    )
}

const AllValidators = ({
    validators,
    summary
}) => {

    const epoch = summary ? summary.epoch : 0

    return (
        <>
            <div class="w-full mx-auto max-w-screen-xl mt-2 sm:mt-0 p-2 flex  flex-col justify-between ">
                <h1 class="mb-2 text-lg font-extrabold text-white text-center sm:text-left">
                    All Validators ({validators.length})
                </h1>
                <div class="mt-2 relative overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs  uppercase border-b border-[#abd7ff]">
                            <tr>
                                <th scope="col" class="py-1 pl-4 hidden sm:table-cell">
                                    #
                                </th>
                                <th scope="col" class="py-1">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-1 text-right">
                                    Volume (24H)
                                </th>
                                <th scope="col" class="px-6 py-1 text-right">
                                    Current staked
                                </th>
                                <th scope="col" class="px-6 py-1 text-right">
                                    APY
                                </th>
                                <th scope="col" class="px-6 py-1 text-right">
                                    Commission
                                </th>
                                <th scope="col" class="px-6 py-1 text-right">
                                    active since
                                </th>
                                {/* <th scope="col" class="px-6 py-1">

                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {validators.map((item, index) => {
                                return (
                                    <ValidatorRow
                                        index={index}
                                        data={item}
                                        epoch={epoch}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AllValidators