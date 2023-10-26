import { useState } from "react"
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { format, parseISO, subDays } from "date-fns";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random()
  });
}

function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <div className="tooltip text-white">
          <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
          <p>${payload[0].value.toFixed(2)} CAD</p>
        </div>
      );
    }
    return null;
  }
  

const AreaChartPlot = () => { 

    return (
        <>
            <ResponsiveContainer width="100%" height="100%"> 
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#82ca9d" stopOpacity={0.4} />
                            <stop offset="75%" stopColor="#82ca9d" stopOpacity={0.05} />
                        </linearGradient>
                    </defs>

                    <Area dataKey="value" stroke="#82ca9d" fill="url(#color)" />

                    <XAxis
                        dataKey="date"
                        axisLine={false}
                        tickLine={false}
                        style={{ fill: '#fff' , fontSize: "12px"}}
                        tickFormatter={(str) => {
                            const date = parseISO(str) 
                            return date.toLocaleDateString() 
                        }}
                    />

                    <YAxis
                        datakey="value"
                        axisLine={false}
                        tickLine={false}
                        tickCount={8}
                        style={{ fill: '#fff' }}
                        tickFormatter={(number) => `$${number.toFixed(2)}`}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <CartesianGrid opacity={0.1} vertical={false} />
                </AreaChart>
            </ResponsiveContainer>
        </>
    )
}

const RowItem = ({
    name,
    value,
    extra
}) => {
    return (
        <div className="grid grid-cols-3 py-2 gap-5 border-b border-[#abd7ff]">
            <div className="col-span-1 mt-auto mb-auto">
                <h2>{name}</h2>
            </div>
            <div className="col-span-2 mt-auto mb-auto flex">
                <h4
                    className="text-lg ml-auto tracking-widest font-extrabold text-white"
                >
                    {value}
                    {extra && (
                        <>
                            {`+`}
                            {extra}
                        </>
                    )}
                </h4>
            </div>
        </div>
    )
}


const Dashboard = () => {

    const [currency, setCurrency] = useState("usd")
    const [chart, setChart] = useState("apy")


    return (
        <div class="w-full mx-auto max-w-screen-xl p-2 pb-1 pt-0 flex  flex-col justify-between">
            <div className="grid grid-cols-3 p-2 gap-5">
                <div className="col-span-3 sm:col-span-1">
                    <h1 class="mb-2 text-lg font-extrabold text-white">
                        Dashboard
                    </h1>
                    <div className="grid grid-cols-6 py-2 gap-5 border-b border-[#abd7ff]">
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
                    <RowItem
                        name="Volume (24H)"
                        value="$102,928.98"
                    />
                    <RowItem
                        name="Tokens staked"
                        value="$708.1M"
                    />
                    <RowItem
                        name="Your staked"
                        value="$100"
                        extra="$10"
                    />
                    <div class="mt-2 flex">
                        <div
                            class="inline-flex ml-auto"
                            role="group">
                            <button
                                type="button"
                                onClick={() => setCurrency("usd")}
                                class={`inline-block  border border-[#abd7ff] rounded-l ${currency === "usd" ? "bg-[#abd7ff] text-gray-800" : "bg-transparent text-white"} px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal `}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                USD
                            </button>
                            <button
                                type="button"
                                onClick={() => setCurrency("sui")}
                                class={`inline-block border-l-0 border  border-[#abd7ff] rounded-r  ${currency === "sui" ? "bg-[#abd7ff] text-gray-800" : "bg-transparent text-white"} px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal `}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                SUI
                            </button>
                        </div>
                    </div>

                </div>


                <div className="col-span-3 sm:col-span-2">
                    <div class="mb-2 mt-2 flex">
                        <div
                            class="inline-flex ml-[70px]"
                            role="group">
                            <button
                                type="button"
                                onClick={() => setChart("apy")}
                                class={`inline-block  border border-[#abd7ff] rounded-l ${chart === "apy" ? "bg-[#abd7ff] text-gray-800" : "bg-transparent text-white"} px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal `}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                APY
                            </button>
                            <button
                                type="button"
                                onClick={() => setChart("vol")}
                                class={`inline-block border-l-0 border  border-[#abd7ff]   ${chart === "vol" ? "bg-[#abd7ff] text-gray-800" : "bg-transparent text-white"} px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal `}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                vol
                            </button>
                            <button
                                type="button"
                                onClick={() => setChart("tvl")}
                                class={`inline-block border-l-0 border  border-[#abd7ff] rounded-r  ${chart === "tvl" ? "bg-[#abd7ff] text-gray-800" : "bg-transparent text-white"} px-2 pb-1 pt-1 text-xs font-medium uppercase leading-normal `}
                                data-te-ripple-init
                                data-te-ripple-color="light">
                                TVL
                            </button>
                        </div>
                    </div>
                    <section className="flex px-2 gap-3">
                        <div className="w-full h-[300px] bg-transparent rounded">
                            <AreaChartPlot />
                        </div>
                    </section>
                </div>


            </div>
        </div>
    )
}

export default Dashboard