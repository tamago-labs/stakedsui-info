
import BasePanel from "./Base"
import { ArrowRight } from "react-feather"

const RowItem = ({
    name,
    value,
    link = false
}) => {
    return (
        <div className="grid grid-cols-2 py-2 gap-5 border-b border-[#abd7ff]">
            <div className="col-span-1 mt-auto mb-auto">
                <h2>{name}</h2>
            </div>
            <div className="col-span-1 mt-auto mb-auto flex">
                {!link && (
                    <h4
                        className="text-lg ml-auto   font-extrabold text-white"
                    >
                        {value}
                    </h4>
                )

                }
                {(link && value) && (
                    <a href={value} target="_blank"
                        className="text-lg truncate ml-auto hover:underline  text-white"
                    >
                        {value}
                    </a>
                )}

            </div>
        </div>
    )
}

const ValidatorDetails = ({ visible, close, data }) => {


    return (
        <BasePanel
            visible={visible}
            close={close}
        >
            {data && (
                <div className="text-[#abd7ff]">
                    <h2 class="text-3xl mb-2 mt-2 font-bold text-white">
                        {`${data.name}`}
                        <span class="bg-blue-100 ml-3 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded ">#{data.rank}</span>
                    </h2>

                    <div className="grid grid-cols-5 p-2 gap-5 py-0 sm:py-4 ">
                        <div class="col-span-5 lg:col-span-1">
                            <img
                                class="h-full w-full   object-cover object-center"
                                src={data.imageUrl}
                                alt=""
                            />
                        </div>
                        <div class="col-span-5 lg:col-span-4">
                            <p className="text-white">
                                {data.description}
                            </p>
                        </div>
                    </div>

                    <div class="p-2">
                        <RowItem
                            name="Website"
                            value={data.projectUrl}
                            link={true}
                        />
                        <RowItem
                            name="Volume (24h)"
                            value={`$${Number(data.volUsd).toLocaleString()}`}
                        />
                        <RowItem
                            name="Current Staked"
                            value={`${data.totalStaked}M SUI`}
                        />
                        <RowItem
                            name="Next Epoch Staked"
                            value={`${data.nextStaked.toLocaleString()} SUI`}
                        />
                        <RowItem
                            name="APY"
                            value={`${data.parsedApy}%`}
                        />
                        <RowItem
                            name="Commission Rate"
                            value={`${(Number(data.commissionRate) / 100).toFixed(2)}%`}
                        />
                        <RowItem
                            name="Next Epoch Commission Rate"
                            value={`${(Number(data.nextEpochCommissionRate) / 100).toFixed(2)}%`}
                        />
                        <RowItem
                            name="Active Since"
                            value={`${data.since.toLocaleDateString()}`}
                        />
                    </div>

                    {/* <div className="mt-2 text-sm p-2 ">
                        <p>The first batch is available to mint without any conditions, while the latter may require completing a quest.</p>
                    </div> */}
                    <div className=" mt-1 p-2">
                        <a target="_blank" href="https://app.legato.finance">
                            <button type="button" class="text-white w-full  flex flex-row justify-center items-center bg-blue-700  font-medium rounded  px-5 py-2.5 mr-2 mb-2 focus:outline-none">
                                Stake via Legato<ArrowRight className="ml-1" />
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </BasePanel>
    )
}

export default ValidatorDetails