import * as r from 'ramda'

const mutate = <T extends any>(obj: { [key: string]: (val: any, i: number) => any }, df: T[]): T[] => {
  let res = df.concat()
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const fn = obj[key]

      res = r.addIndex(r.map)((x: any, i: number) => {
        return {
          ...x,
          [key]: typeof fn === 'function' ? fn(x, i) : fn
        }
      }, res)
    }
  }

  return res
}

export default r.curry(mutate)
