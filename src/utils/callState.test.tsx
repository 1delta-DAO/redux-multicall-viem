import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

import React, { useRef } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { toCallState, useCallStates } from './callState'
import { Abi, encodeFunctionResult } from 'viem';

describe('callState', () => {
  describe('#useCallStates', () => {
    let container: HTMLDivElement | null = null
    beforeEach(() => {
      container = document.createElement('div')
      document.body.appendChild(container)
    })
    afterEach(() => {
      if (container) {
        unmountComponentAtNode(container)
        container.remove()
      }
      container = null
    })

    const contractInterface = [
      {
        "constant": true,
        "inputs": [{ "name": "_owner", "type": "address" }],
        "name": "balanceOf",
        "outputs": [{ "name": "balance", "type": "uint256" }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      },
    ] as unknown as Abi
    const fragment = 'balanceOf' as any

    const results = (blockNumber: number) => blockNumber >= 3 ? [{}] : [{
      valid: true,
      data: encodeFunctionResult({ abi: contractInterface, functionName: "balanceOf", result: [100000n] }),
      blockNumber
    }]

    function Caller({ latestBlockNumber }: { latestBlockNumber: number }) {
      const data = useCallStates(results(latestBlockNumber) as any, contractInterface as any, fragment, latestBlockNumber)
      const last = useRef(data)
      return <>{data[0].result === last.current[0].result ? 'true' : 'false'}</>
    }

    it('Stabilizes values across renders (assuming stable interface/fragment/results)', () => {
      render(<Caller latestBlockNumber={1} />, container)
      render(<Caller latestBlockNumber={2} />, container)
      expect(container?.textContent).toBe('true')
    })

    it('Returns referentially new values if data goes stale', () => {
      render(<Caller latestBlockNumber={2} />, container)
      render(<Caller latestBlockNumber={3} />, container)
      render(<Caller latestBlockNumber={4} />, container)
      expect(container?.textContent).toBe('false')
    })
  })

  describe('#toCallState', () => {
    it('Handles missing values', () => {
      expect(toCallState(undefined, undefined, undefined, 1000)).toEqual({
        error: false,
        loading: false,
        result: undefined,
        syncing: false,
        valid: false,
      })
    })

    it('Returns loading state', () => {
      const callResult = {
        valid: true,
        data: '0xabcd',
        blockNumber: 1000,
      }
      expect(toCallState(callResult, undefined, undefined, 1000)).toEqual({
        error: false,
        loading: true,
        result: undefined,
        syncing: true,
        valid: true,
      })
    })
  })
})
