export type MethodArg = string | number | BigInt
export type MethodArgs = Array<MethodArg | MethodArg[]>

export function isMethodArg(x: unknown): x is MethodArg {
  return (x === null || x === undefined) ? false : typeof BigInt(x as any) === 'bigint' || ['string', 'number'].indexOf(typeof x) !== -1
}

export function isValidMethodArgs(x: unknown): x is MethodArgs | undefined {
  return (
    x === undefined ||
    (Array.isArray(x) && x.every((xi) => isMethodArg(xi) || (Array.isArray(xi) && xi.every(isMethodArg))))
  )
}
