import React from 'react'
import { ChainId } from './consts'
import { useMulticallContract } from './hooks'
import { multicall } from './multicall'

interface Props {
  chainId: ChainId
  blockNumber: number | undefined
  blocksPerFetch?: number
}

export function Updater({ chainId, blockNumber, blocksPerFetch }: Props) {
  const contract = useMulticallContract(chainId)
  const listenerOptions = blocksPerFetch ? { blocksPerFetch } : undefined
  return (
    <multicall.Updater
      chainId={chainId}
      latestBlockNumber={blockNumber}
      multicallInfo={contract}
      listenerOptions={listenerOptions}
      isDebug
    />
  )
}
