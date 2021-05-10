import * as r from 'ramda'

const mutate = r.curry((obj, df) => {
  let res = df.concat()
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const fn = obj[key]

      res = r.map((x) => {
        return {
          ...x,
          [key]: typeof fn === 'function' ? fn(x) : fn
        }
      }, res)
    }
  }

  return res
})

export default mutate
