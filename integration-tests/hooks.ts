import { act } from '@testing-library/react'
import { mainnet, sepolia } from 'viem/chains'
import { config } from 'dotenv'
import { useEffect, useMemo, useState } from 'react'
import IMulticallABI from '../src/abi/InterfaceMulticall'

import { ChainId, DAI_ADDRESS, MULTICALL_ADDRESS, NULL_ADDRESS, USDC_ADDRESS, USDT_ADDRESS } from './consts'
import { ERC20_ABI } from './erc20'
import { useMultiChainSingleContractSingleData, useMultipleContractSingleData, useSingleCallResult } from './multicall'
import { MulticallInfo } from '../src'
import { createPublicClient, http, PublicClient } from 'viem'

config()

const providerCache: Partial<Record<ChainId, any>> = {}
const MulticallInterface = IMulticallABI
const ERC20Interface = ERC20_ABI

export function useMulticallContract(chainId: ChainId) {
  return useMemo(() => {
    return {
      address: MULTICALL_ADDRESS,
      abi: MulticallInterface,
      provider: createPublicClient(getViemChain(chainId)) as any
    } as MulticallInfo
  }, [chainId])
}

export function useLatestBlock(provider: PublicClient) {
  const [blockNumber, setBlockNumber] = useState<number | undefined>(20514111)
  useEffect(() => {
    if (!provider) return
    const onBlock = (num: bigint) => act(() => {
      setBlockNumber(Number(num))
    })
    provider.watchBlockNumber({ onBlockNumber: onBlock, poll:true })
    return () => { }
  }, [provider, setBlockNumber])
  return blockNumber
}

export function useCurrentBlockTimestamp(chainId: ChainId, blockNumber: number | undefined): string | undefined {
  const callState = useSingleCallResult(chainId, blockNumber, { address: MULTICALL_ADDRESS, abi: IMulticallABI as any }, 'getCurrentBlockTimestamp')
  console.log("callState result", callState, IMulticallABI)
  return callState.result?.[0]?.toString()
}

export function useCurrentBlockTimestampMultichain(
  chainIds: ChainId[],
  blockNumbers: Array<number | undefined>
): Array<string | undefined> {
  const chainToBlock = useMemo(() => {
    return chainIds.reduce((result, chainId, i) => {
      result[chainId] = blockNumbers[i]
      return result
    }, {} as Record<number, number | undefined>)
  }, [chainIds, blockNumbers])

  const chainToAddress = useMemo(() => {
    return chainIds.reduce((result, chainId) => {
      result[chainId] = MULTICALL_ADDRESS
      return result
    }, {} as Record<number, string>)
  }, [chainIds])

  const chainToCallState = useMultiChainSingleContractSingleData(
    chainToBlock,
    chainToAddress,
    MulticallInterface as any,
    'getCurrentBlockTimestamp'
  )

  console.log("chainToCallState", chainToCallState)
  return Object.values(chainToCallState).map((callState) => callState.result?.[0]?.toString())
}

export function useMaxTokenBalance(chainId: ChainId, blockNumber: number | undefined): string | undefined {
  const { contracts, accounts } = useMemo(
    () => ({
      // The first element is intentionally empty to test sparse arrays; see https://github.com/Uniswap/redux-multicall/pull/21.
      // eslint-disable-next-line no-sparse-arrays
      contracts: [, USDC_ADDRESS, USDT_ADDRESS, DAI_ADDRESS],
      accounts: [NULL_ADDRESS],
    }),
    []
  )
  const results = useMultipleContractSingleData(chainId, blockNumber, contracts, ERC20Interface as any, 'balanceOf', accounts)
  let max
  for (const result of results) {
    if (!result.valid || !result.result?.length) continue
    const value = BigInt(result.result[0])
    if (!max || value > max) max = value
  }
  return max?.toString()
}

export function getProvider(chainId: ChainId) {
  if (providerCache[chainId]) return providerCache[chainId]!
  providerCache[chainId] = createPublicClient(getViemChain(chainId))
  // providerCache[chainId]?.once('error', (e: any) => {
  //   throw e
  // })
  return providerCache[chainId]!
}

export function getInfuraChainName(chainId: ChainId) {
  switch (chainId) {
    case ChainId.MAINNET:
      return 'homestead'
    case ChainId.SEPOLIA:
      return 'sepolia'
    default:
      throw new Error(`Unsupported eth infura chainId for ${chainId}`)
  }
}

export function getViemChain(chainId: ChainId) {
  switch (chainId) {
    case ChainId.MAINNET:
      return { chain: mainnet, transport: http("https://rpc.ankr.com/eth") }
    case ChainId.SEPOLIA:
      return { chain: sepolia, transport: http("https://sepolia.drpc.org") }
    default:
      throw new Error(`Unsupported eth infura chainId for ${chainId}`)
  }
}
