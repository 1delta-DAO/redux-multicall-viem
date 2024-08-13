import type { CallResult, CallState } from '../types';
import { AbiFunction } from 'viem';
export declare function useCallStates(results: CallResult[], contractInterface: AbiFunction[] | undefined, fragment: ((i: number) => string | undefined) | string | undefined, latestBlockNumber: number | undefined): CallState[];
export declare function toCallState(callResult: CallResult | undefined, contractInterface: AbiFunction[] | undefined, fragment: string | undefined, syncingBlockNumber: number | undefined): CallState;
