import * as r from 'ramda'
import addCol from './addCol'
import dropCol from './dropCol'
import getCol from './getCol'

const rename = <T>(obj: { [key: string]: string }, arr: T[]): any => {
  let result = arr.concat()

  r.keys(obj).forEach((k) => {
    const col = getCol(k as string, arr)

    result = r.pipe(
      dropCol(k as string),
      addCol(obj[k], col)
    )(result) as any
  })

  return result
}

export default r.curry(rename)
