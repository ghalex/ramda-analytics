import * as r from 'ramda'

const addCol = r.curry(<T, P>(col: string, colData: P[], df: T[]) => {
  if (df.length !== colData.length) return ['Arrays are not of equal length']
  return df.map((row, i) => r.assoc(col, colData[i], row))
})

export default addCol
