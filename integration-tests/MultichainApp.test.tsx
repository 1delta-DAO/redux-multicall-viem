import '@testing-library/jest-dom'
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

import { act, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MultichainApp } from './MultichainApp'
import { sleep } from './utils'

const MAX_BLOCK_AGE = 600_000 // 10 minutes

function parseTimestamp(value: string | null) {
  if (!value) throw new Error('No timestamp to parse')
  return value.split(',').map((v) => parseInt(v, 10) * 1000)
}

describe('Use multicall in test multichain application', () => {
  it('Renders correctly initially', () => {
    render(<MultichainApp />)
    const h1 = screen.getByText('Hello Multichain Multicall') // H1 in Home
    expect(h1).toBeTruthy()
    const missing = screen.queryByText('Does Not Exist')
    expect(missing).toBeFalsy()
  })

  it('Performs a multichain single contract multicall query', async () => {
    render(<MultichainApp />)

    // Check that block timestamp is correctly retrieved from block
    const timestamps1 = await waitFor(() => screen.getByTestId('blockTimestamps'), { timeout: 20_000 })
    expect(timestamps1 && timestamps1?.textContent).toBeTruthy()
    const values1 = parseTimestamp(timestamps1.textContent)
    const now1 = Date.now()
    expect(values1.length).toEqual(2)
    expect(now1 - values1[0]).toBeLessThan(MAX_BLOCK_AGE)
    expect(now1 - values1[1]).toBeLessThan(MAX_BLOCK_AGE)

    // Wait for an updated block timestamp
    await act(() => sleep(12_000))

    // Check that the block timestamp has updated correctly
    const timestamps2 = await waitFor(() => screen.getByTestId('blockTimestamps'), { timeout: 1_000 })
    expect(timestamps2 && timestamps2.textContent).toBeTruthy()
    const values2 = parseTimestamp(timestamps2.textContent)
    const now2 = Date.now()
    expect(values2.length).toEqual(2)
    expect(now2 - values2[0]).toBeLessThan(MAX_BLOCK_AGE)
    expect(now2 - values2[1]).toBeLessThan(MAX_BLOCK_AGE)
  }, 35_000)
})
