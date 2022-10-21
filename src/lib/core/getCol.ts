import * as r from 'ramda'

const getCol = r.curry(<T, P>(col: string, df: T[]) => r.map<T, P>(r.prop(col), df))
export default getCol
