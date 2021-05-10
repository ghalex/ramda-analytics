import * as r from 'ramda'
import dayjs from 'dayjs'

const groupBy = r.curry((key, fn, df) => {
  return r.pipe(r.groupBy(key), r.map(fn))(df)
})

groupBy.time = (key = 'date') => (x) => dayjs(x[key]).format('HH:mm')
groupBy.day = (key = 'date') => (x) => dayjs(x[key]).format('YYYY-MM-DD')
groupBy.month = (key = 'date') => (x) => dayjs(x[key]).format('YYYY-MM')

export default groupBy
