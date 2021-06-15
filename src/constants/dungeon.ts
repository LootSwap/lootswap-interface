import { ChainId, Token } from '@lootswap/sdk'
import getPairTokensWithDefaults from '../utils/getPairTokensWithDefaults'

export const DUNGEON_POOLS: {
  [chainId in ChainId]?: {
    pid: number
    tokens: [Token, Token]
  }[]
} = {
  [ChainId.HARMONY_MAINNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'bscBNB/WONE')
    },
    {
      pid: 1,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'bscBUSD/WONE')
    },
    {
      pid: 2,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1ETH/WONE')
    },
    {
      pid: 4,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1WBTC/WONE')
    },
    {
      pid: 5,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'LOOT/WONE')
    },
    {
      pid: 6,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'LOOT/bscWISB')
    },
    {
      pid: 7,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'LOOT/XYA')
    },
    {
      pid: 8,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'WONE/bscMatic')
    },
    {
      pid: 9,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'LOOT/BUSD')
    },
    {
      pid: 10,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, '1UNI/1ETH')
    },
    {
      pid: 11,
      tokens: getPairTokensWithDefaults(ChainId.HARMONY_MAINNET, 'bscBNB/bscCAKE')
    }
  ],
  [ChainId.HARMONY_TESTNET]: [],
  [ChainId.BSC_TESTNET]: [
    {
      pid: 0,
      tokens: getPairTokensWithDefaults(ChainId.BSC_TESTNET, 'WBNB/BUSD')
    }
  ]
}
