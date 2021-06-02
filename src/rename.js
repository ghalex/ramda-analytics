import * as r from 'ramda'
import addCol from './addCol'
import dropCol from './dropCol'
import getCol from './getCol'

const rename = r.curry((obj, arr) => {
  let result = arr.concat()

  r.keys(obj).forEach((k) => {
    const col = getCol(k, arr)

    result = r.pipe(dropCol(k), addCol(obj[k], col))(result)
  })

  return result
})

export default rename
