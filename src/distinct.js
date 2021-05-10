import * as r from 'ramda'

const distinct = r.curry((fn, df) => {
  const map = new Map()
  r.forEach((x) => {
    return map.set(fn(x), x)
  }, df)

  return Array.from(map.values())
})

export default distinct
