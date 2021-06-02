import * as r from 'ramda'

const dropCol = r.curry((col, df) => r.map(r.dissoc(col), df))
export default dropCol
