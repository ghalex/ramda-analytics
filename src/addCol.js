import * as r from 'ramda'

const addCol = r.curry((col, arr, df) => {
  if (df.length !== arr.length) return 'Arrays are not of equal length'
  return df.map((row, i) => r.assoc(col, arr[i], row))
})

export default addCol
