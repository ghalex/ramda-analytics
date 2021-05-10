import * as r from 'ramda'

const summarize = r.curry((obj, df) => {
  return r.map((fn) => fn(df), obj)
})

export default summarize
