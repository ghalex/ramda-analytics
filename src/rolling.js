import * as r from 'ramda'

const rolling = r.curry(({ window, partial }, func, arr) => {
  const iRange = r.range(0, arr.length)
  const result = r.map((i) => {
    if (i + 1 < window) {
      if (partial) {
        return func(r.slice(0, i + 1, arr))
      }
      return NaN
    }

    const truncated = r.slice(i - window + 1, i + 1, arr)
    return func(truncated)
  }, iRange)

  return result
})

export default rolling
