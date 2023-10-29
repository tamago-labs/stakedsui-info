
import { createContext, useCallback, useMemo, useEffect, useReducer } from 'react';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';
import BigNumber from "bignumber.js"
import axios  from 'axios';

const useSui = () => {

    const getSuiPrice = async () => {
        let response
        try {
            response = await axios.get('https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=20947', {
                headers: {
                    'X-CMC_PRO_API_KEY': process.env.COINMARKETCAP_API
                },
            });
        } catch (ex) {
            response = null;
            // error
            console.log(ex);
        }
        
        if (response) {
            const { data } = response
            const price = data.data["20947"]["quote"]["USD"]["price"]
            return Number(price)
        } else {
            return 0.5
        }
    }

    const fetchDashboard = async () => {

        const client = new SuiClient({ url: getFullnodeUrl("mainnet") })

        const suiPrice = await getSuiPrice()

        let data = await client.getLatestSuiSystemState()
        let validators = data.activeValidators

        delete data["activeValidators"]

        const { apys } = await client.getValidatorsApy()

        validators = validators.map((item) => {
            const apyItem = apys.find(a => a.address.toLowerCase() === item.suiAddress.toLowerCase())
            
            const vol =  (BigNumber(item.stakingPoolSuiBalance).minus(BigNumber(item.nextEpochStake))).absoluteValue().dividedBy(BigNumber(1000000000))
            const volUsd = Number(`${vol}`) * suiPrice
            
            return {
                ...item,
                vol : `${vol}`,
                volUsd,
                suiPrice,
                apy: apyItem ? apyItem.apy : 0
            }
        }).sort((a, b) => (BigNumber(b.stakingPoolSuiBalance)).minus(BigNumber(a.stakingPoolSuiBalance)))

        return {
            summary: data,
            validators
        }
    }

    return {
        fetchDashboard,
        getSuiPrice
    }
}

export default useSui