import { useMemo } from 'react'
import { Fraction } from '@lootswap/sdk'

import { utils } from 'ethers'
import useDungeonToken from './useDungeonToken'
import { useTokenBalance } from '../state/wallet/hooks'
import useGovernanceToken from 'hooks/useGovernanceToken'
import { useTotalSupply } from '../data/TotalSupply'

export default function useDungeonRatio(): Fraction | undefined {
  const govToken = useGovernanceToken()
  const dungeon = useDungeonToken()
  const dungeonTotalSupply = useTotalSupply(dungeon)
  const dungeonGovTokenBalance = useTokenBalance(dungeon?.address, govToken)
  const multiplier = utils.parseEther('1').toString()

  return useMemo(() => {
    return dungeonGovTokenBalance && dungeonTotalSupply
      ? dungeonGovTokenBalance?.divide(dungeonTotalSupply?.raw.toString()).multiply(multiplier)
      : undefined
  }, [govToken, dungeon, dungeonTotalSupply, dungeonGovTokenBalance])
}
