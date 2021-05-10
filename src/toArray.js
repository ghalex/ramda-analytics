import * as r from 'ramda'

const toArray = r.curry((keys, obj) => {
  return r.pipe(r.toPairs, r.map(r.zipObj(keys)))(obj)
})

export default toArray
