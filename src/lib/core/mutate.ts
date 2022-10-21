import * as r from 'ramda'

const mutate = <T extends any>(obj: { [key: string]: (val: any) => any }, df: T[]): T[] => {
  let res = df.concat()
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const fn = obj[key]

      res = r.map((x: any) => {
        return {
          ...x,
          [key]: typeof fn === 'function' ? fn(x) : fn
        }
      }, res)
    }
  }

  return res
}

export default r.curry(mutate)
