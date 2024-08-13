export declare type MethodArg = string | number | BigInt;
export declare type MethodArgs = Array<MethodArg | MethodArg[]>;
export declare function isMethodArg(x: unknown): x is MethodArg;
export declare function isValidMethodArgs(x: unknown): x is MethodArgs | undefined;
