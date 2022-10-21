import * as r from 'ramda'

const groupBy = <T extends any>(keyFn: (x: T) => any, fn: (x: T[]) => any, df: T[]): any => {
  return r.map<any, any>(fn, r.groupBy(keyFn, df))
}

export default groupBy
