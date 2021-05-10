import * as r from 'ramda'

const pctChange = r.curry((arr) => {
  const iRange = r.range(0, arr.length)
  const result = r.map((i) => {
    if (i === 0) return NaN
    return arr[i] / arr[i - 1] - 1
  }, iRange)
  return result
})

export default pctChange
