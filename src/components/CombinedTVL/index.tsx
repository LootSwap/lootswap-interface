import React from 'react'
import { useStakingInfo } from '../../state/stake/hooks'
import { useActiveWeb3React } from '../../hooks'
import useTotalCombinedTVL from '../../hooks/useTotalCombinedTVL'
import { CustomMouseoverTooltip } from '../Tooltip/custom'
import { DUNGEON_SETTINGS } from '../../constants'
import useFilterStakingInfos from '../../hooks/useFilterStakingInfos'

export default function CombinedTVL({}) {
  const { chainId } = useActiveWeb3React()
  const dungeonSettings = chainId ? DUNGEON_SETTINGS[chainId] : undefined
  const isActive = true
  const filteredStakingInfos = useFilterStakingInfos(useStakingInfo(isActive), isActive)
  const TVLs = useTotalCombinedTVL(filteredStakingInfos)

  return (
    <>
      {TVLs?.stakingPoolTVL?.greaterThan('0') && (
        <CustomMouseoverTooltip
          element={
            <>
              {TVLs.stakingPoolTVL?.greaterThan('0') && (
                <>
                  <b>Staking:</b> $
                  {TVLs.stakingPoolTVL.toSignificant(8, {
                    groupSeparator: ','
                  })}
                  <br />
                </>
              )}
              {TVLs.totalDungeonTVL?.greaterThan('0') && (
                <>
                  <b>{dungeonSettings?.name}:</b> ${TVLs.totalDungeonTVL.toSignificant(8, { groupSeparator: ',' })}
                  <br />
                </>
              )}
              {TVLs.totalCombinedTVL?.greaterThan('0') && (
                <>
                  <b>Total:</b> ${TVLs.totalCombinedTVL.toSignificant(8, { groupSeparator: ',' })}
                </>
              )}
            </>
          }
        >
          {TVLs.totalCombinedTVL?.greaterThan('0') && (
            <>TVL: ${TVLs.totalCombinedTVL.toSignificant(8, { groupSeparator: ',' })}</>
          )}
        </CustomMouseoverTooltip>
      )}
    </>
  )
}
