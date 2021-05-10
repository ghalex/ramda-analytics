import * as r from 'ramda'

const getCol = r.curry((col, df) => r.map(r.prop(col), df))
export default getCol
