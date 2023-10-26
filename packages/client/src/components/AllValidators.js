import { PanelContext } from "@/hooks/usePanel"
import { useContext } from "react"
import { ArrowRight } from "react-feather"



const ValidatorRow = ({
    name,
    totalStaked,
    apy,
    commission
}) => {

    const { showValidatorPanel } = useContext(PanelContext)

    const openPanel = (slug) => {
        showValidatorPanel(slug)
    }

    return (
        <tr class="border-b border-[#abd7ff] text-white font-bold text-lg">
            <th onClick={() => openPanel(name)} scope="row" class=" hover:underline cursor-pointer py-3">
                {name}
            </th>
            <td class="px-6 py-2 text-right">
                {Number(totalStaked).toLocaleString()} SUI
            </td>
            <td class="px-6 py-2 text-right">
                {Number(apy).toFixed(2)}%
            </td>
            <td class="px-6 py-2 text-right">
                {Number(commission).toFixed(0)}%
            </td>
            <td class="py-2">
                <button onClick={() => openPanel(name)}  type="button" class="text-[#001237] font-normal text-xs flex flex-row justify-center items-center bg-[#abd7ff]  ml-auto   rounded  px-4 py-2 focus:outline-none">
                    More<ArrowRight className="ml-1" size={14} />
                </button>
            </td>
        </tr>
    )
}

const AllValidators = () => {
    return (
        <>
            <div class="w-full mx-auto max-w-screen-xl p-2 flex  flex-col justify-between ">
                <h1 class="mb-2 text-lg font-extrabold text-white">
                    All Validators
                </h1>
                <div class="mt-2 relative overflow-x-auto">
                    <table class="w-full text-sm text-left">
                        <thead class="text-xs  uppercase border-b border-[#abd7ff]">
                            <tr>
                                <th scope="ocol" class="py-1">
                                    Validator
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
                                <th scope="col" class="px-6 py-1">

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <ValidatorRow
                                name="Cosmostation"
                                totalStaked={490559220.942640}
                                apy={4.3412344}
                                commission={2}
                            />
                            <ValidatorRow
                                name="Figment"
                                totalStaked={275120676.383081}
                                apy={4.16}
                                commission={10}
                            />
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AllValidators