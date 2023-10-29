


const Faq = () => {
    return (
        <section className=" mb-4  text-white">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="my-6  text-2xl font-bold leadi text-center sm:text-4xl">FAQs</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer text-lg font-semibold">What is StakedSui.info?</summary>
                        <div className="px-4 pb-4 text-sm">
                            <p>StakedSui.info is a public good project created by the core contributor of <a href="https://legato.finance" className="underline" target="_blank">Legato Finance</a>. It enables the tracking of Sui's staking rewards for each validator and the entire system including staking volumes and essential information. In the next version, we will add functionality to manage Staked Sui objects received from any validator.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer text-lg font-semibold"> How to staking Sui?</summary>
                        <div className="px-4 pb-4 text-sm">
                            <p>
                            SUI adopts a Delegated Proof-of-Stake consensus mechanism, offering greater flexibility compared to its competitors. Users can select any validator for staking and receive daily staking rewards that automatically compound. There are several guides available to walk you through the process including this <a className="underline" href="https://medium.com/cosmostation/sui-staking-guide-how-to-earn-sui-from-staking-a7ff455a5b08" target="_blank">one</a>.
                            </p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer text-lg font-semibold">What is Staked Sui asset?</summary>
                        <div className="px-4 pb-4 space-y-2 text-sm">
                            <p>Staked SUI is a type of asset class that represents SUI tokens locked with a validator when you stake them. It's transferable and tradable with some limitations. Our main project (<a href="https://legato.finance" className="underline" target="_blank">Legato Finance</a>) aims to break through these limits, making the handling of staked SUI assets easy for everyone.</p>
 
                        </div>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default Faq