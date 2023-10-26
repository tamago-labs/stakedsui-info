





export const GAME_ITEMS = [
    {
        itemName: "Magic Pass",
        gameName: "Pass",
        description: "Magic Pass is the exclusive NFT collection for the RetroWeb3.games platform, enabling pass holders to stake and receive game items for playing or trading. The pass has a limited supply of 1,000 on Oasys L2.",
        image: "/items/magic-pass.png",
        nftType: "ERC-721"
    },
    // {
    //     itemName: "Mine",
    //     gameName: "Minesweeper",
    //     image: "/items/mine.png"
    // },
    {
        itemName: "Flag",
        description: "A flag is used for marking hidden mines, the player who successfully flags the last mine will be rewarded with all the flags used throughout the game.",
        gameName: "Minesweeper",
        image: "/items/flag.png",
        nftType: "ERC-1155"
    }
]

export const MINT_ITEMS = [
    {
        itemName: "Flag",
        gameName: "Minesweeper",
        image: "/items/flag.png",
        perEpoch: 40,
        nftType: "ERC-1155"
    }
]