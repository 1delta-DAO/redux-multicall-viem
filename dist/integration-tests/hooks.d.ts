import { ChainId } from './consts';
import { MulticallInfo } from '../src';
import { PublicClient } from 'viem';
export declare function useMulticallContract(chainId: ChainId): MulticallInfo;
export declare function useLatestBlock(provider: PublicClient): number | undefined;
export declare function useCurrentBlockTimestamp(chainId: ChainId, blockNumber: number | undefined): string | undefined;
export declare function useCurrentBlockTimestampMultichain(chainIds: ChainId[], blockNumbers: Array<number | undefined>): Array<string | undefined>;
export declare function useMaxTokenBalance(chainId: ChainId, blockNumber: number | undefined): string | undefined;
export declare function getProvider(chainId: ChainId): any;
export declare function getInfuraChainName(chainId: ChainId): "homestead" | "sepolia";
export declare function getViemChain(chainId: ChainId): {
    chain: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://etherscan.io";
                readonly apiUrl: "https://api.etherscan.io/api";
            };
        };
        contracts: {
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xce01f8eee7E479C928F8919abD53E553a36CeF67";
                readonly blockCreated: 19258213;
            };
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 14353601;
            };
        };
        id: 1;
        name: "Ethereum";
        nativeCurrency: {
            readonly name: "Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://cloudflare-eth.com"];
            };
        };
        sourceId?: number | undefined;
        testnet?: boolean | undefined;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        }> | undefined;
    };
    transport: import("viem").Transport<"http", {
        fetchOptions?: Pick<RequestInit, "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "method" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "signal" | "window"> | undefined;
        url?: string | undefined;
    }, import("viem").EIP1193RequestFn<undefined>>;
} | {
    chain: {
        blockExplorers: {
            readonly default: {
                readonly name: "Etherscan";
                readonly url: "https://sepolia.etherscan.io";
                readonly apiUrl: "https://api-sepolia.etherscan.io/api";
            };
        };
        contracts: {
            readonly multicall3: {
                readonly address: "0xca11bde05977b3631167028862be2a173976ca11";
                readonly blockCreated: 751532;
            };
            readonly ensRegistry: {
                readonly address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
            };
            readonly ensUniversalResolver: {
                readonly address: "0xc8Af999e38273D658BE1b921b88A9Ddf005769cC";
                readonly blockCreated: 5317080;
            };
        };
        id: 11155111;
        name: "Sepolia";
        nativeCurrency: {
            readonly name: "Sepolia Ether";
            readonly symbol: "ETH";
            readonly decimals: 18;
        };
        rpcUrls: {
            readonly default: {
                readonly http: readonly ["https://rpc.sepolia.org"];
            };
        };
        sourceId?: number | undefined;
        testnet: true;
        custom?: Record<string, unknown> | undefined;
        fees?: import("viem").ChainFees<undefined> | undefined;
        formatters?: undefined;
        serializers?: import("viem").ChainSerializers<undefined, {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "legacy" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            chainId?: number | undefined;
            accessList?: undefined;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip2930" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: bigint | undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: undefined;
            maxPriorityFeePerGas?: undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip1559" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            authorizationList?: undefined;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs?: readonly any[] | readonly Uint8Array[] | undefined;
            blobVersionedHashes: readonly any[];
            kzg?: undefined;
            authorizationList?: undefined;
        } | {
            type?: "eip4844" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: bigint | undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            chainId: number;
            sidecars?: false | readonly import("viem").BlobSidecar<any>[] | undefined;
            blobs: readonly any[] | readonly Uint8Array[];
            blobVersionedHashes?: readonly any[] | undefined;
            kzg: import("viem").Kzg;
            authorizationList?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        } | {
            type?: "eip7702" | undefined;
            data?: any;
            gas?: bigint | undefined;
            nonce?: number | undefined;
            to?: any;
            value?: bigint | undefined;
            r?: any;
            s?: any;
            v?: bigint | undefined;
            yParity?: number | undefined;
            gasPrice?: undefined;
            maxFeePerBlobGas?: undefined;
            maxFeePerGas?: bigint | undefined;
            maxPriorityFeePerGas?: bigint | undefined;
            accessList?: import("viem").AccessList | undefined;
            authorizationList: import("viem/experimental").SignedAuthorizationList<number>;
            chainId: number;
            blobVersionedHashes?: undefined;
            blobs?: undefined;
            kzg?: undefined;
            sidecars?: undefined;
        }> | undefined;
    };
    transport: import("viem").Transport<"http", {
        fetchOptions?: Pick<RequestInit, "cache" | "credentials" | "headers" | "integrity" | "keepalive" | "method" | "mode" | "redirect" | "referrer" | "referrerPolicy" | "signal" | "window"> | undefined;
        url?: string | undefined;
    }, import("viem").EIP1193RequestFn<undefined>>;
};
