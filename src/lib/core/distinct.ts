import * as r from 'ramda'

const distinct = <T>(fn: (x: T) => any, df: T[]): T[] => {
  const map = new Map()
  r.forEach((x: T) => {
    return map.set(fn(x), x)
  }, df)

  return Array.from(map.values())
}

export default r.curry(distinct)
