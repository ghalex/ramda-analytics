import * as r from 'ramda'
import dayjs from 'dayjs'
import dotPath from './dotPath'

const groupBy = r.curry((key, fn, df) => {
  return r.pipe(r.groupBy(key), r.map(fn))(df)
})

groupBy.time =
  (key = 'date') =>
  (x) =>
    dayjs(dotPath(key, x)).format('HH:mm')

groupBy.day =
  (key = 'date') =>
  (x) =>
    dayjs(dotPath(key, x)).format('YYYY-MM-DD')

groupBy.month =
  (key = 'date') =>
  (x) =>
    dayjs(dotPath(key, x)).format('YYYY-MM')

export default groupBy
