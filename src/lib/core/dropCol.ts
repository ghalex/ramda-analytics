import * as r from 'ramda'

const dropCol = r.curry(<T>(colKey: string, df: T[]): any => r.map((val) => r.dissoc<any, any>(colKey, val), df))
export default dropCol
